import React, { useState } from "react";
import Card from "../components/molecules/Card/Card";
import * as styles from "../styles/Home.module.css";
import Image from "next/image";
import logo from "../images/LogoLetrasBlancas.png";
import MenuBarOption from "../components/molecules/MenuBarOptions/MenuBarOptions";
import ProgressionActivities from "../components/atoms/ProgressionActivities/ProgressionActivities";
import Calendar from "../components/molecules/CalendarComponent/Calendar";
import PercentageCard from "../components/molecules/PercentageCard/PercentageCard";
import ButtonSchedule from "../components/atoms/ButtonSchedule/ButtonSchedule";
import PageLayout from "../components/molecules/PageLayout";
import NewActity from "../homeFunctions/newActivity";
import HeaderBar from "../components/atoms/HeaderBar/HeaderBar";
import imgProfile from "../images/profile.png";
import { useAuthUser } from "../hooks/useAuthUser";
import getDataUser from "../firebase/getDataUser";

const Home = () => {
  useAuthUser();
  const activityData = getDataUser();
  activityData.getDataActivity();
  const [changeFunctionPage, setChangeFunctionPage] = useState("2");
  return (
    <PageLayout>
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

            {changeFunctionPage === "1" && (
              <NewActity setPage={setChangeFunctionPage} />
            )}
            {changeFunctionPage === "2" && (
              <div>
                <div className={styles.containerGruop}>
                  <div className={styles.containerProgessionAct}>
                    <p className={styles.textAct}>Actividades Completadas</p>
                    <ProgressionActivities text="Hoy" number="2" iconVisible />
                    <ProgressionActivities text="Semana" number="2" />
                    <ProgressionActivities text="Mes" number="2" iconVisible />
                    <ProgressionActivities text="Total" number="2" styleCard />
                  </div>
                </div>
                <div style={{ display: "flex", width: "100%" }}>
                  <Card />
                  <Calendar />
                  <div>
                    <PercentageCard />
                    <ButtonSchedule setPage={setChangeFunctionPage} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
