import MenuButtonIcon from "../../atoms/MenuButtonIcon/MenuButtonIcon";
import * as styles from "./MenuBarOptions.module.css";
import Button from "@mui/material/Button";
import { auth } from "../../../firebase/firebaseApp";
import {signOut } from "firebase/auth";
import { useRouter } from "next/router";
import Logout from "@mui/icons-material/Logout";

export default function MenuBarOption() {
  const { push } = useRouter();
  const logout = () => {
    signOut(auth)
  .then(() => {
    push("/Login")
  })
  }
  return (
    <div className={styles.container}>
      <MenuButtonIcon text="Home" icon="Home" navigate="/Login" />
      <MenuButtonIcon
        text="Daily managment"
        icon="TrendingUp"
        navigate="/Login"
      />
      <MenuButtonIcon text="Reminders" icon="AssignmentInd" navigate="/Login" />
      <MenuButtonIcon
        text="Graphics and Statistics"
        icon="Leaderboard"
        navigate="/Login"
      />
      <MenuButtonIcon
        text="Designate schedule"
        icon="AutoAwesomeMotion"
        navigate="/Login"
      />
      <MenuButtonIcon
        text="Personalization"
        icon="ManageAccounts"
        navigate="/Login"
      />
      <MenuButtonIcon text="Achievements" icon="NorthEast" navigate="/Login" />
      <div className={styles.containerLogOutButton} onClick={logout}>
        <div className={styles.containerLogOutInfo}>
        <Logout />
        <Button 
          sx={{color:"#626262", marginBottom: "1em"}}> 
          Log Out 
        </Button>
        </div>
      </div>
    </div>
  );
}
