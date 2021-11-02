import React from "react";
import styles from "./member.module.css";
import Button from "@material-ui/core/Button";
import { PowerSlider } from "./PowerSlider";
import { Chart } from "./Chart";

const statusArray = ["str", "agl", "ran", "sus", "dex", "pot"];
const toJapanese = {
  str: "破壊力",
  agl: "スピード",
  ran: "射程距離",
  sus: "持続力",
  dex: "精密動作性",
  pot: "成長性",
};

export const Details = () => {
  const member = {
    name: "ギリー",
  };
  const chartData = [1, 2, 3, 4, 5, 5];
  return (
    <div>
      <div className={styles.details}>
        <label>{member.name}</label>
      </div>
      <div className={styles.contents}>
        <div className={styles.item}>
          <Chart data={chartData} />
        </div>
        <div className={styles.item}>
          {statusArray.map((e, i) => (
            <PowerSlider key={i} label={toJapanese[e]} />
          ))}
        </div>
      </div>
      <div className={styles.saveIcon}>
        <Button variant="outlined">保存</Button>
      </div>
    </div>
  );
};
