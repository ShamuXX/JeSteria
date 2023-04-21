import React from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";
import * as styles from "../styles/Home.module.css";

const Home = () => {
  const router = useRouter();

  return (
    <div className={styles.containerPage}>
      <div className={styles.container1}>
        <h1>Hola</h1>
      </div>
      <div className={styles.container2}>
        <div className={styles.childrenContainer1}>
          <h1>adiós</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
