import React from "react";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
/** inputLabel, input, inputadornment, iconButton,visibility, visibilyOff */
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import "../styles/LoginStyles.css";

const Login = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="container">
      <div className="container-section1">
        <h1>Login</h1>
        <img
          src={require("../images/Img-graphics1.png")}
          className="img-graphic1"
          alt="Grafica 1"
        />
        <img
          src={require("../images/Img-graphics2.png")}
          className="img-graphic2"
          alt="Grafica 2"
        />
      </div>
      <div className="container-section2">
        <div className="container-logo">
          <img
            src={require("../images/Jesteria.png")}
            className="logo"
            alt="Logo"
          />
        </div>
        <p className="txtWelcome">Bienvenido de nuevo</p>
        <div className="container-img">
            <img
              src={require("../images/Flor.png")}
              className="img-flower"
              alt="Flower"
            />
          </div>
          <div className="container-star">
            <img
              src={require("../images/Estrella.png")}
              className="img-star"
              alt="Star"
            />
        </div>

        <div className="form-inputs">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              id="email-user"
              label="Email"
              sx={{ m: 1, width: "60ch", marginBottom: "30px" }}
            />
            <FormControl sx={{ m: 1, width: "60ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Login;
