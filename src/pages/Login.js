import React from "react";
import Inputs from "../components/atoms/Inputs/Inputs";
import * as styles from "../styles/LoginStyles.module.css";
import Stack from "@mui/material/Stack";
import { FormControlLabel } from "@mui/material";
import Link from "next/link";
import Checkbox from "@mui/material/Checkbox";
import IconGoogleCircle from "../icons/google";
import Button from "@mui/material/Button";
import PageLayout from "../components/molecules/PageLayout";
import Image from "next/image";
import logo from "../images/Jesteria.png";
import FlowerAnimation from "../components/molecules/FlowerAnimation/FlowerAnimation";
import Carousel from "react-material-ui-carousel";
import { useRouter } from "next/router";
import ItemCarousel from "../components/molecules/ItemCarousel/ItemCarousel";
import items from "../utils/itemCarousel.js";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../src/firebase/firebaseApp";

const Login = (props) => {
  const [credentials, setCredencials] = useState({
    email: "samuel@gmail.com",
    password: "samuel12345",
  });

  const { push } = useRouter();
  const changeUser = (e) => {
    setCredencials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const loginUser = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      push("/Home");
    } catch (error) {
      console.log("user not registered");
    }
  };
  const registerUser = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      push("/Home");
    } catch (error) {
      console.log("error with register user");
    }
  };
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
          <p className={styles.txtWelcome}>Bienvenido de nuevo</p>
          <FlowerAnimation />
          <Inputs />
          <div className={styles.containerLinks}>
            <div style={{ width: "50%" }}>
              <FormControlLabel
                control={<Checkbox />}
                label="Recuérdame"
                style={{ height: "100%", marginLeft: "40%" }}
              />
            </div>
            <div className={styles.forgetPassword}>
              <Link
                href="/"
                style={{
                  marginRight: "40%",
                  paddingTop: "2%",
                  minWidth: "20%",
                  fontSize: "1rem",
                }}
              >
                Olvidé mi contraseña
              </Link>
            </div>
          </div>
          <div className={styles.buttonsContainer}>
            <Stack
              spacing={2}
              style={{
                display: "flex",
                flexDirection: "column",
                minWidth: "50%",
                paddingInline: "20%",
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                style={{ height: "100%", background: "rgb(63, 61, 86)" }}
                onClick={loginUser}
              >
                Iniciar Sesión
              </Button>
              <Button
                variant="contained"
                style={{
                  height: "100%",
                  background: "rgb(255, 255, 255)",
                  color: "rgb(63, 61, 86)",
                }}
                onClick={registerUser}
              >
                <IconGoogleCircle />
                Iniciar Sesión con google
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Login;
