import React from "react";
import { TextField } from "@mui/material";
import * as styles from "./ForgetPassword.module.css";
import Button from "@mui/material/Button";

export default function forgetPassword({ forgot }) {
  return (
    <div className={styles.container}>
      <p className={styles.txt}>
        ¡No te preocupes! Ingresa tu email y te ayudaremos.
      </p>
      <div>
        <TextField
          className={styles.txtField}
          id="email"
          name="email"
          label="Email"
        />
      </div>
      <Button
        variant="contained"
        color="secondary"
        style={{
          height: "3rem",
          background: "rgb(63, 61, 86)",
          marginTop: "2rem",
        }}
      >
        Enviar
      </Button>
      <Button
        style={{
          marginTop: "2rem",
          maxWidth: "10%",
          fontSize: "1rem",
        }}
        onClick={forgot}
      >
        Volver
      </Button>
    </div>
  );
}
