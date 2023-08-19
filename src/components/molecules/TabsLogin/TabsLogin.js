import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Inputs from "../../atoms/Inputs/Inputs";
import LoginButtons from "../../atoms/LoginButtons/LoginButtons";
import { TextField } from "@mui/material";
import * as styles from "./TabsLogin.module.css";
import InputPassword from "../InputPassword/InputPassword";
import Button from "@mui/material/Button";
import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../firebase/firebaseApp";
import getDataUser from "../../../firebase/getDataUser";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsLogin({ forgot }) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [state, setSate] = useState(true);
  const checked = () => setSate(!state);

  const [alertlogin, setAlertlogin] = useState(false);
  const [alertsignup, setAlertsignup] = useState(false);

  const [credentials, setCredencials] = useState({
    name: "",
    email: "",
    password: "",
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
      setAlertlogin(!alertlogin);
    }
  };
  const registerUser = async () => {
    const { uploadData } = getDataUser();
    try {
      await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      await updateProfile(auth.currentUser, { displayName: credentials.name });
      auth;
      push("/Home");
    } catch (error) {
      console.log(error);
      setAlertsignup(!alertsignup);
    }
    const userData = auth.currentUser;
    uploadData(userData);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="Iniciar Sesión" {...a11yProps(0)} />
          <Tab label="Registrarse" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {alertlogin ? (
          <Alert severity="error">Usuario o contraseña incorrectos</Alert>
        ) : (
          ""
        )}
        <Inputs change={changeUser} />
        <LoginButtons click={loginUser} forgot={forgot} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        {alertsignup ? (
          <Alert severity="error">
            Rellena los campos con información válida
          </Alert>
        ) : (
          ""
        )}
        <div className={styles.container}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minWidth: "50%",
              paddingInline: "20%",
            }}
          >
            <div className={styles.txtFieldContainer}>
              <TextField
                id="name"
                name="name"
                label="Usuario"
                className={styles.txtField}
                onChange={changeUser}
              />
            </div>
            <div className={styles.txtFieldContainer}>
              <TextField
                id="email"
                name="email"
                label="Email"
                className={styles.txtField}
                onChange={changeUser}
              />
            </div>
            <InputPassword change={changeUser} />
            <FormControlLabel
              control={<Checkbox onChange={checked} />}
              label="Acepto los términos y condiciones"
              style={{ height: "100%" }}
            />
            <Button
              variant="contained"
              color="secondary"
              disabled={state}
              sx={{
                height: "3rem",
                background: "rgb(63, 61, 86)",
                marginTop: "2rem",
                "&.Mui-disabled": {
                  background: "#878787",
                  color: "#c0c0c0",
                },
              }}
              onClick={registerUser}
            >
              Registrarse
            </Button>
          </Box>
        </div>
      </TabPanel>
    </Box>
  );
}
