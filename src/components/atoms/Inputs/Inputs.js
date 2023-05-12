import React from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import * as styles from "./Inputs.module.css";
import InputPassword from "../../molecules/InputPassword/InputPassword";
import { useState } from "react";

export default function Inputs({change}) {
  const [email, setEmail] = useState("");

  return (
    <div className={styles.container}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minWidth: "50%",
          paddingInline: "20%",
        }}
      >
        <div style={{paddingBottom: "1rem"}}>
          <TextField
          id="email"
          name="email"
          label="Email"
          className={styles.txtField}
          onChange={change}
        />
        </div>

        <InputPassword change={change}/>
      </Box>
    </div>
  );
}
