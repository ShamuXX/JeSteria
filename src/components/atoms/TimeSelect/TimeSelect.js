import * as styles from "./TimeSelect.module.css";
import { useState } from "react";

export default function TimeSelect({ text }) {
  const timeValHour = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const timeValMinutes = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

  const [stateHour, setStateHour] = useState(true);
  const [stateMinute, setStateMinute] = useState(true);

  const handleHour = (index) => () => setStateHour(index);
  const handleMinute = (index) => () => setStateMinute(index);
  console.log("Hora", stateHour);
  console.log("Minuto", stateMinute);

  const hour = timeValHour.map((hour, Index) => {
    const isActive = Index === stateHour ? styles.active : "";
    const className = [styles.buttonHour, isActive].join(" ");

    return (
      <button key={Index} className={className} onClick={handleHour(Index)}>
        {hour}
      </button>
    );
  });
  const minutes = timeValMinutes.map((minutes, Index) => {
    const isActive = Index === stateMinute ? styles.active : "";
    const className = [styles.buttonMinute, isActive].join(" ");

    return (
      <button key={Index} className={className} onClick={handleMinute(Index)}>
        {minutes}
      </button>
    );
  });
  return (
    <div className={styles.containerAllElements}>
      <header className={styles.main}>
        <p className={styles.text}>{text}</p>
        <div className={styles.container}>
          <div className={styles.hourContainer}>{hour}</div>
          <div className={styles.minutesContainer}>{minutes}</div>
        </div>
      </header>
      <div className={styles.containerFormats}>
        <div className={styles.formatTime}>
          <p>Am</p>
        </div>
        <div className={styles.formatTime}>
          <p>Pm</p>
        </div>
      </div>
    </div>
  );
}
