import * as styles from "./ProgressionActivities.module.css";

export default function ProgressionActivities(props) {
  return (
    <div className={styles.container2}>
      <p className={styles.text}>{props.text}</p>
      <h3 className={styles.number}>{props.number}</h3>
    </div>
  );
}
