import MenuButtonIcon from "../../atoms/MenuButtonIcon/MenuButtonIcon";
import * as styles from "./MenuBarOptions.module.css";
import Button from "@mui/material/Button";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import Logout from "@mui/icons-material/Logout";

export default function MenuBarOption(props) {
  const auth = getAuth();
  const { push } = useRouter();
  const logout = () => {
    signOut(auth).then(() => {
      push("/Login");
    });
  };

  return (
    <div className={styles.container}>
      <MenuButtonIcon
        text="Home"
        icon="Home"
        navigate="1"
        setChange={props.changePage}
      />
      <MenuButtonIcon
        text="Add Activity"
        icon="TrendingUp"
        navigate="2"
        setChange={props.changePage}
      />
      <MenuButtonIcon
        text="Daily Activities"
        icon="AssignmentInd"
        navigate="3"
        setChange={props.changePage}
      />
      <MenuButtonIcon
        text="Graphics and Statistics"
        icon="Leaderboard"
        navigate="5"
        setChange={props.changePage}
      />
      <MenuButtonIcon
        text="Designate schedule"
        icon="AutoAwesomeMotion"
        navigate="4"
      />
      <MenuButtonIcon
        text="Personalization"
        icon="ManageAccounts"
        navigate="5"
      />
      <MenuButtonIcon text="Achievements" icon="NorthEast" navigate="6" />
      <div className={styles.containerLogOutButton} onClick={logout}>
        <div className={styles.containerLogOutInfo}>
          <Logout />
          <Button sx={{ color: "#626262", marginBottom: "1em" }}>
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
}
