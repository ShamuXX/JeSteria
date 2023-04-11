import React from "react";
import Inputs from "../components/atoms/Inputs/Inputs";
import * as styles from "../styles/LoginStyles.module.css";
import Stack from "@mui/material/Stack";

import IconGoogleCircle from "../icons/google";
import Button from "@mui/material/Button";

const Login = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerSection1}>
        <h1 style={{ fontSize: "1.3rem" }}>hola</h1>
      </div>
      <div className={styles.containerSection2}>
        <Inputs />
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
  );
};

export default Login;
