import React from "react";
import * as styles from "../styles/LoginStyles.module.css";
import PageLayout from "../components/molecules/PageLayout";
import Image from "next/image";
import logo from "../images/Jesteria.png";
import FlowerAnimation from "../components/molecules/FlowerAnimation/FlowerAnimation";
import Carousel from "react-material-ui-carousel";
import ItemCarousel from "../components/molecules/ItemCarousel/ItemCarousel";
import items from "../utils/itemCarousel.js";
import TabsLogin from "../components/molecules/TabsLogin/TabsLogin";
import ForgetPassword from "../components/molecules/ForgetPassword/ForgetPassword";
import { useState } from "react";

const Login = (props) => {
  const [state, setSate] = useState(true);
  const forgot = () => setSate(!state);
  return (
    <PageLayout title="Login">
      <div className={styles.container}>
        <div className={styles.containerSection1}>
          <Carousel sx={{ width: "100%", height: "60vh", padding: "10%" }}>
            {items.map((item, i) => (
              <ItemCarousel key={i} item={item} />
            ))}
          </Carousel>
        </div>
        <div className={styles.containerSection2}>
          <div className={styles.containerLogo}>
            <Image src={logo} className={styles.logo} alt="Logo" />
          </div>
          <p className={styles.txtWelcome}>
            {state ? "Bienvenido de nuevo" : "¿No recuerdas tu contraseña?"}
          </p>
          <FlowerAnimation />
          {state ? (
            <TabsLogin forgot={forgot} />
          ) : (
            <ForgetPassword forgot={forgot} />
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Login;
