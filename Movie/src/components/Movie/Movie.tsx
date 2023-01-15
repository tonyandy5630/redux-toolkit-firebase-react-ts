import React from "react";
import styles from "./movie.module.css";

type MovieProps = {
  id: number;
  name: string;
};
export default function Movie({ id, name }: MovieProps) {
  return (
    <div className={styles.outline}>
      <div className={styles.id}>{id}</div>
      <div className={styles.name}>{name}</div>
    </div>
  );
}
