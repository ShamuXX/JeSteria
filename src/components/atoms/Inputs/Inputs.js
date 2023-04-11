import React from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import * as styles from "./Inputs.module.css";
import InputPassword from "../../molecules/InputPassword/InputPassword";

export default function Inputs(props) {
  return (
    <div className={styles.container}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "blue",
          minWidth: "50%",
          padding: "5%",
        }}
      >
        <TextField id="email-user" label="Email" className={styles.txtField} />
        <InputPassword />
      </Box>
    </div>
  );
}
