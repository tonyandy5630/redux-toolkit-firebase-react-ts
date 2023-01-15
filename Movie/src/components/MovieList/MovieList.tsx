import React, { useEffect } from "react";
import styles from "./showmovie.module.css";
import Movie from "../Movie/Movie";
import { useDispatch } from "react-redux";
import { fetchMovie } from "../../store/movieSlice";
import { useAppSelector } from "../../store/store";

export default function MovieList() {
  const movies = useAppSelector((state) => state.movie.movieList);
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(fetchMovie());
  }, []);

  const movieList = movies.map((item) => (
    <Movie key={item.id} id={item.id} name={item.movieName} />
  ));
  return (
    <div className={styles.list}>
      <h1>All Movies</h1>
      {movieList}
    </div>
  );
}
