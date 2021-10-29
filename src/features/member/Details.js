import React from "react";
import { Chart } from "./Chart";
import { PowerSlider } from "./PowerSlider";
import styles from "./member.module.css";
export const Details = () => {
  const member = {
    name: "ギリー",
  };
  return (
    <div>
      <div className={styles.details}>{member.name}</div>
      <Chart />
      <PowerSlider />
    </div>
  );
};
