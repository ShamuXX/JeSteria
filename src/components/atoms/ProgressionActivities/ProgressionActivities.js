import * as styles from "./ProgressionActivities.module.css";
import { useState } from "react";
import { CheckCircle } from "@mui/icons-material";

export default function ProgressionActivities(props) {
  const [iconActive, setIconActive] = useState(props.iconVisible);
  const [styleCard, setStyleCard] = useState(props.styleCard);
  return (
    <>
      {styleCard ? (
        <div className={styles.container}>
          {iconActive ? (
            <CheckCircle className={styles.icon} fontSize="large" />
          ) : null}
          <p className={styles.text}>{props.text}</p>
          <h3 className={styles.number}>{props.number}</h3>
        </div>
      ) : (
        <div className={styles.container2}>
          {iconActive ? (
            <CheckCircle className={styles.icon} fontSize="large" />
          ) : null}
          <p className={styles.text}>{props.text}</p>
          <h3 className={styles.number}>{props.number}</h3>
        </div>
      )}
    </>
  );
}
