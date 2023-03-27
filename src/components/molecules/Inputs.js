import React from "react";
import Box from "@mui/material/Box";
import { SvgIcon, TextField } from "@mui/material";
import * as styles from "../../styles/LoginStyles.module.css";
import InputPassword from "../atoms/InputPassword";

export default function Inputs(props) {
  return (
    <div className={styles.formInputs}>
      <Box className={styles.boxInput}>
        <TextField
          id="email-user"
          label="Email"
          className={styles.inputEmail}
        />
        <InputPassword />
      </Box>
    </div>
  );
}
