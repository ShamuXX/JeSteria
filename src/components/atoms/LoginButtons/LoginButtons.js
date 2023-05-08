import React from "react";
import Stack from "@mui/material/Stack";
import { FormControlLabel } from "@mui/material";
import Link from "next/link";
import Checkbox from "@mui/material/Checkbox";
import IconGoogleCircle from "../../../icons/google";
import Button from "@mui/material/Button";
import * as styles from "./LoginButtons.module.css";

export default function LoginButtons(){
    return(
        <div>
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
                style={{ height: "100%", background: "rgb(63, 61, 86)", marginTop: "2rem"}}
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
    )
}