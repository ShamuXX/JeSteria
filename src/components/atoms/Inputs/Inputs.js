import React from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import * as styles from "./Inputs.module.css";
import InputPassword from "../../molecules/InputPassword/InputPassword";
import { useState } from "react";

export default function Inputs(props) {
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
        <TextField
          id="email-user"
          label="Email"
          className={styles.txtField}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputPassword />
      </Box>
    </div>
  );
}
