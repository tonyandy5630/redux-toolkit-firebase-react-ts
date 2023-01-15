import React from "react";
import { useState } from "react";
import styles from "./addmovie.module.css";
import { useAppDispatch } from "../../store/store";
import { addMovie } from "../../store/movieSlice";

export default function AddMovie() {
  const [movieName, setMovieName] = useState("");
  const dispatch = useAppDispatch();
  const handleMovieNameChange = (e: any) => {
    setMovieName((value) => e.target.value);
  };

  const handleMovieSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addMovie({ id: Math.random(), movieName }));
    setMovieName("");
  };

  return (
    <div className={styles.container}>
      <h1>Add A Movie</h1>
      <div>
        <form onSubmit={handleMovieSubmit}>
          <input
            name='movieName'
            value={movieName}
            onChange={handleMovieNameChange}
          />
          <button type='submit' onClick={handleMovieSubmit}>
            Add this movie
          </button>
        </form>
      </div>
    </div>
  );
}
