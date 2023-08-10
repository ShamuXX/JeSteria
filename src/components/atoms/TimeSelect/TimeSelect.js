import * as styles from "./TimeSelect.module.css";
import { useState } from "react";

export default function TimeSelect({ text }) {
  const timeValHour = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const timeValMinutes = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

  const [stateHour, setStateHour] = useState(true);
  const [stateMinute, setStateMinute] = useState(true);
  const [indicator, setIndicator] = useState("");

  const handleHour = (index) => () => setStateHour(index);
  const handleMinute = (index) => () => setStateMinute(index);
  function handleIndicator(val) {
    setIndicator(val);
  }
  const Hour = timeValHour[stateHour];
  const Minutes = timeValMinutes[stateMinute];

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
      <header>
        <p>{text}</p>
        <main>
          <section className={styles.hourContainer}>{hour}</section>
          <section className={styles.minutesContainer}>{minutes}</section>
        </main>
      </header>
      <section>
        <div
          onClick={() => {
            handleIndicator("AM");
          }}
        >
          <p>AM</p>
        </div>
        <div
          onClick={() => {
            handleIndicator("PM");
          }}
        >
          <p>PM</p>
        </div>
      </section>
    </div>
  );
}
