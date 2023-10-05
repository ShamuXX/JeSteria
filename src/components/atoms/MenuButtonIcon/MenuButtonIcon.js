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
import IconType from "@/src/icons/Icons";

export default function MenuButtonIcon(props) {
  function onHandleClick() {
    props.setChange(props.navigate);
  }
  return (
    <div className={styles.buttonContainer} onClick={onHandleClick}>
      <div className={styles.containerInfo}>
        <IconType type={props.icon} className={styles.icons} />
        <p className={styles.text}>{props.text}</p>
      </div>
    </div>
  );
}
