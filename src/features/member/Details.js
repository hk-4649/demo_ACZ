import React, { useState } from "react";
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
const initialStatus = {
  str: 1,
  agl: 2,
  ran: 4,
  sus: 4,
  dex: 1,
  pot: 3,
};

export const Details = () => {
  // eslint-disable-next-line no-unused-vars
  const [status, setStatus] = useState(initialStatus);
  const member = {
    name: "ギリー",
  };
  // const chartData = [1, 2, 3, 4, 5, 5];
  const chartData = Object.entries(status).map(([key]) => status[key]);
  return (
    <div>
      <div className={styles.details}>
        <label>{member.name}</label>
        {/* <input
          type="text"
          className={styles.inputLog}
          value={member.name}
          required
        /> */}
      </div>
      <div className={styles.contents}>
        <div className={styles.item}>
          <Chart data={chartData} />
        </div>
        <div className={styles.item}>
          {statusArray.map((e, i) => (
            <PowerSlider
              key={i}
              label={toJapanese[e]}
              onChange={(_, val) => setStatus({ ...status, [e]: val })}
            />
          ))}
        </div>
      </div>
      <div className={styles.saveIcon}>
        <Button variant="outlined">保存</Button>
      </div>
    </div>
  );
};
