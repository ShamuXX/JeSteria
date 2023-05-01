import * as styles from "./ProgressionActivities.module.css";
import { CheckCircle } from "@mui/icons-material";

export default function ProgressionActivities(props) {
  return (
    <div className={props.styleCard ? styles.container : styles.container2}>
      {props.iconVisible ? (
        <CheckCircle className={styles.icon} fontSize="large" />
      ) : null}
      <p className={styles.text}>{props.text}</p>
      <h3 className={styles.number}>{props.number}</h3>
    </div>
  );
}
