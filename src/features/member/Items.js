import React from "react";
import styles from "./member.module.css";
import Delete from "@material-ui/icons/Delete";

export const Items = (props) => {
  const { item } = props;
  return (
    <>
      <span className={styles.cursor}>{item.name}</span>
      <div>
        <button className={styles.taskIcon}>
          <Delete />
        </button>
      </div>
    </>
  );
};
