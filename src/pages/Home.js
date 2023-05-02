import React from "react";
import { useRouter } from "next/navigation";
import Card from "../components/molecules/Card/Card";
import * as styles from "../styles/Home.module.css";
import Image from "next/image";
import logo from "../images/LogoLetrasBlancas.png";
import MenuBarOption from "../components/molecules/MenuBarOptions/MenuBarOptions";
import HeaderBar from "../components/atoms/HeaderBar/HeaderBar";
import imgProfile from "../images/profile.png";

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
          <HeaderBar
            title="Home"
            description="aplication home"
            header="Home"
            href="/"
            imgProfile={imgProfile}
          />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
