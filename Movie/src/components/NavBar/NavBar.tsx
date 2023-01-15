import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className={styles["nav-bar"]}>
      <div className={styles.actions}>
        <Link className={styles.link} to='/add-movie'>
          Add a movie
        </Link>
      </div>
      <div className={styles.actions}>
        <Link className={styles.link} to='/show-movies'>
          Show all movies
        </Link>
      </div>
    </div>
  );
}
