import React from "react";
import { Items } from "./Items";
import styles from "./member.module.css";
import AddCircle from "@material-ui/icons/AddCircleOutline";

const p = [
  {
    name: "ギリー",
  },
  {
    name: "トム",
  },
  {
    name: "ジョナサン",
  },
];

export const Member = () => {
  return (
    <div>
      <ul className={styles.memberList}>
        {p.map((e, i) => (
          <li key={i} className={styles.listItem}>
            <Items item={e} />
          </li>
        ))}
      </ul>
      <button className={styles.addIcon}>
        <AddCircle fontSize="large" />
      </button>
    </div>
  );
};
