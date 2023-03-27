import React from "react";
import { SvgIcon, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
/** inputLabel, input, inputadornment, iconButton,visibility, visibilyOff */
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import * as styles from "../styles/LoginStyles.module.css";
import graphics1 from "../images/Img-graphics1.png";
import graphics2 from "../images/Img-graphics2.png";
import imgCarousel1 from "../images/imgSeccion1-1.png";
import imgCarousel2 from "../images/imgSeccion1-2.png";
import imgCarousel3 from "../images/imgSeccion1-3.png";
import imgCarousel4 from "../images/imgSeccion1-4.png";
import logo from "../images/Jesteria.png";
import flower from "../images/Flor.png";
import star from "../images/Estrella.png";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import IconGoogleCircle from "../icons/google";

import Carousel from "react-material-ui-carousel";
import Paper from "@mui/material/Paper";

function Item(props) {
  return (
    <Paper className={styles.paper}>
      <Image src={props.item.image} className={props.item.styles} alt="graphics1" />
      <h2>{props.item.name}</h2> <br/>
      {console.log(props.item.styles)}
    </Paper>
  );
}

const Login = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  var items = [
    {
      name: "Organiza tus actividades diarias",
      image: imgCarousel1,
      styles: styles.imgCarousel1,
    },
    {
      name: "Lleva el control de tu vida",
      image: imgCarousel2,
      styles: styles.imgCarousel2,
    },
    {
      name: "Lleva el control de tu vida",
      image: imgCarousel3,
      styles: styles.imgCarousel3,
    },
    {
      name: "Lleva el control de tu vida",
      image: imgCarousel4,
      styles: styles.imgCarousel4,
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.containerSection1}>
          <Carousel sx={{width: '100%', height: '60vh', padding: '10%'}}>
            {items.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        
        {/*<Image src={graphics1} className={styles.imgGraphics1} alt="Graphic1" />
        <Image src={graphics2} className={styles.imgGraphics2} alt="Graphic2" /> */}
      </div>
      <div className={styles.containerSection2}>
        <div className={styles.containerLogo}>
          <Image src={logo} className={styles.logo} alt="Logo" />
        </div>
        <p className={styles.txtWelcome}>Bienvenido de nuevo</p>
        <div className={styles.containerImg}>
          <Image src={star} className={styles.imgStar} alt="Star" />
          <Image src={flower} className={styles.imgFlower} alt="Flower" />
          <Image src={star} className={styles.imgStar} alt="Star" />
          <Image src={flower} className={styles.imgFlower} alt="Flower" />
          <Image src={star} className={styles.imgStar} alt="Star" />
          <Image src={flower} className={styles.imgFlower} alt="Flower" />
          <Image src={star} className={styles.imgStar} alt="Star" />
          <Image src={flower} className={styles.imgFlower} alt="Flower" />
          <Image src={star} className={styles.imgStar} alt="Star" />
          <div className={styles.containerStar}></div>
        </div>

        <div className={styles.formInputs}>
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
              sx={{ m: 1, width: "60ch", marginBottom: "30px", height: "10%" }}
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
        <div className={styles.containerLinks}>
          <FormControlLabel control={<Checkbox />} label="Recuérdame" />
          <div className={styles.forgetPassword}>
            <Link href="#">Olvidé mi contraseña</Link>
          </div>
        </div>
        <div className="buttons-container">
          <Stack
            spacing={2}
            style={{
              marginTop: "10%",
              width: "60ch",
              height: "80%",
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              style={{ height: "100%", background: "rgb(63, 61, 86)" }}
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
            >
              <IconGoogleCircle />
              Iniciar Sesión con google
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Login;
