import React from "react";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from '@mui/material/FormControl';
/** inputLabel, input, inputadornment, iconButton,visibility, visibilyOff */
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';

const Login = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div className="containerInfo"></div>
      <div className="containerInputs">
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'}}>
          <TextField id="email-user" label="Email" sx={{m: 1, width: '25ch'}}/>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
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
      <h1>Login</h1>
    </div>
  );
};

export default Login;
