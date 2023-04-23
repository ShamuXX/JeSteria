import {
  Home,
  TrendingUp,
  AssignmentInd,
  Leaderboard,
  AutoAwesomeMotion,
  ManageAccounts,
  NorthEast,
  Logout,
} from "@mui/icons-material";
import * as styles from "./MenuButtonIcon.module.css";
import { Button } from "@mui/material-next";

const IconType = ({ type }) => {
  console.log(type);
  if (type == "Home") return <Home className={styles.icons} />;
  else if (type == "TrendingUp") return <TrendingUp className={styles.icons} />;
  else if (type == "AssignmentInd")
    return <AssignmentInd className={styles.icons} />;
  else if (type == "Leaderboard")
    return <Leaderboard className={styles.icons} />;
  else if (type == "AutoAwesomeMotion")
    return <AutoAwesomeMotion className={styles.icons} />;
  else if (type == "ManageAccounts")
    return <ManageAccounts className={styles.icons} />;
  else if (type == "NorthEast") return <NorthEast className={styles.icons} />;
  else if (type == "Logout") return <Logout className={styles.icons} />;
  else {
    console.log("naa");
  }
};

export default function MenuButtonIcon(props) {
  return (
    <Button
      href="/"
      color="secondary"
      sx={{
        borderRadius: "10px",
        height: "8%",
        width: "85%",
        display: "flex",
        backgroundColor: "#D9D9D9",

        margin: "8%",
      }}
    >
      <div className={styles.containerInfo}>
        <IconType type={props.icon} />
        <p className={styles.text}>{props.text}</p>
      </div>
    </Button>
  );
}
