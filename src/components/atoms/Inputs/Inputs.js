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
          minWidth: "50%",
          paddingInline: "20%",
        }}
      >
        <div style={{paddingBottom: "1rem"}}>
          <TextField id="email-user" label="Email" className={styles.txtField} />
        </div>
        <InputPassword />
      </Box>
    </div>
  );
}
