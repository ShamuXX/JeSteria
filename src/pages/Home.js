import React from "react";
import { useRouter } from "next/navigation";
import MenuButtonIcon from "../components/atoms/MenuButtonIcon/MenuButtonIcon";
import * as styles from "../styles/Home.module.css";

const Home = () => {
  const router = useRouter();

  return (
    <div className={styles.containerPage}>
      <div className={styles.container1}>
        <MenuButtonIcon text="Home" icon="Home" />
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
