import React from "react";
import { Member } from "./features/member/Member";
import { Details } from "./features/member/Details";
import "./App.css";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.containerApps}>
      <div className={styles.appMembers}>
        <Member />
      </div>
      <div className={styles.appDetails}>
        <Details />
      </div>
    </div>
  );
}

export default App;
