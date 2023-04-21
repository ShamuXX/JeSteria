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
  if (type == "TrendingUp") return <TrendingUp className={styles.icons} />;
  if (type == "AssignmentInd")
    return <AssignmentInd className={styles.icons} />;
  if (type == "Leaderboard") return <Leaderboard className={styles.icons} />;
  if (type == "AutoAwesomeMotion")
    return <AutoAwesomeMotion className={styles.icons} />;
  if (type == "ManageAccounts")
    return <ManageAccounts className={styles.icons} />;
  if (type == "NorthEast") return <NorthEast className={styles.icons} />;
  if (type == "Logout") return <Logout className={styles.icons} />;
  else {
  }
};

export default function MenuButtonIcon(props) {
  return (
    <Button
      color="secondary"
      sx={{
        borderRadius: "10px",
        height: "8%",
        width: "100%",
        display: "flex",
        backgroundColor: "#D9D9D9",

        margin: "10%",
      }}
    >
      <div className={styles.containerInfo}>
        <IconType type={props.icon} />
        <p className={styles.text}>{props.text}</p>
      </div>
    </Button>
  );
}
