import React from "react";
import Button from "@material-ui/core/Button";
import { PowerSlider } from "./PowerSlider";
import { Chart } from "./Chart";
import styles from "./member.module.css";

const statusArray = ["str", "agl", "ran", "sus", "dex", "pot"];
const toJapanese = {
  str: "破壊力",
  agl: "スピード",
  ran: "射程距離",
  sus: "持続力",
  dex: "精密動作性",
  pot: "成長性",
};

export const DetailBody = () => {
  const chartData = [1, 2, 3, 4, 5, 5];
  return (
    <>
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
    </>
  );
};
