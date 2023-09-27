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
import { useRouter } from "next/router";

const IconType = ({ type }) => {
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
  function onHandleClick() {
    props.setChange(props.navigate);
  }
  return (
    <div className={styles.buttonContainer} onClick={onHandleClick}>
      <div className={styles.containerInfo}>
        <IconType type={props.icon} />
        <p className={styles.text}>{props.text}</p>
      </div>
    </div>
  );
}
