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
import logo from '../images/Jesteria.png'

const Login = (props) => {
  return (
    <PageLayout title="Login">
    <div className={styles.container}>
      <div className={styles.containerSection1}>
        <h1 style={{ fontSize: "1.3rem" }}>hola</h1>
      </div>
      <div className={styles.containerSection2}>
      <div className={styles.containerLogo}>
          <Image src={logo} className={styles.logo} alt="Logo" />
      </div>
      <p className={styles.txtWelcome}>Bienvenido de nuevo</p>
        <Inputs />
        <div className={styles.containerLinks}>
          <div style={{ width: "50%"}}>
          <FormControlLabel control={<Checkbox />} label="Recuérdame" style={{height: '100%', marginLeft:'40%'}}/>
          </div>
          <div className={styles.forgetPassword}>
          <Link href='/' style={{ marginRight: '40%', paddingTop: '2%', minWidth: '20%', fontSize: '1rem'}}>Olvidé mi contraseña</Link>
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
              onClick={() => router.push("/Home")}
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
