import React from "react";
import { useRouter } from "next/navigation";
import Card from "../components/molecules/Card/Card";
import * as styles from "../styles/Home.module.css";
import Image from "next/image";
import logo from "../images/LogoLetrasBlancas.png";
import MenuBarOption from "../components/molecules/MenuBarOptions/MenuBarOptions";
import ProgressionActivities from "../components/atoms/ProgressionActivities/ProgressionActivities";
import { styled } from "@mui/material/styles";

const Home = () => {
  const router = useRouter();

  return (
    <div className={styles.containerPage}>
      <div className={styles.container1}>
        <div className={styles.containerImageMenu}>
          <Image src={logo} className={styles.logo} alt="Logo" />
        </div>
        <div className={styles.containerMenuButtons}>
          <MenuBarOption />
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.childrenContainer1}>
          <h1>adiós</h1>
          <Card />
          <ProgressionActivities
            text="Hoy"
            number="2"
            iconVisible={true}
            styleCard={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
