import React from "react";
import styles from "./member.module.css";
import { DetailBody } from "./DetailBody";

export const Details = () => {
  const member = {
    name: "ギリー",
  };
  return (
    <div>
      <div className={styles.details}>{member.name}</div>
      <DetailBody />
    </div>
  );
};
