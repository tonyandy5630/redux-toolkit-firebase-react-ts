import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { firestore } from "../firebase/index";
import { addDoc, collection, getDocs } from "firebase/firestore";

const movieRef = collection(firestore, "movies");

let movies: { id: number; movieName: string }[] = [];
type InitState = {
  movieList: Array<{ id: number; movieName: string }>;
  loading: boolean;
};

export const fetchMovie = createAsyncThunk("movie/fetchMovie", async () => {
  try {
    return await getDocs(movieRef);
  } catch (err) {
    console.log(err);
  }
});

const initState: InitState = {
  movieList: movies,
  loading: true,
};

export const movieSlice = createSlice({
  name: "movieList",
  initialState: initState,
  reducers: {
    addMovie: (
      state,
      action: PayloadAction<{ id: number; movieName: string }>
    ) => {
      try {
        const data = {
          id: action.payload.id,
          movieName: action.payload.movieName,
        };
        state.movieList.push(data);
        addDoc(movieRef, data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovie.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchMovie.fulfilled, (state, action) => {
        state.loading = false;
        const arr = action.payload?.docs;
        const tempMovies: { id: number; movieName: string }[] = [];
        arr?.map((i) => {
          const { id, movieName } = i.data();
          tempMovies.push({ id, movieName });
        });

        state.movieList = tempMovies;
      }),
      builder.addCase(fetchMovie.rejected, (state, action) => {
        state.loading = false;
        state.movieList = [];
      });
  },
});

export const { addMovie } = movieSlice.actions;
export default movieSlice.reducer;
