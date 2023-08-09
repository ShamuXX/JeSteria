import * as styles from "./TimeSelect.module.css"
import button from "react"

export default function TimeSelect({text}) {
    const timeValHour = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11, 12, 13, 14];
    const timeValMinutes = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]

    const onHandleClick = () => {
      
    }

    const hour = timeValHour.map((hour, Index) => {
      return(
        <button key={Index} className={styles.buttonTime}>
          {hour}
        </button>    
      )
    })
    const minutes = timeValMinutes.map((minutes, Index) => {
      return(
        <button key={Index} className={styles.buttonTime} onClick={onHandleClick}>
          {minutes}
        </button>   
      )
    })
    return(
      <div className={styles.containerAllElements}>
        <div className={styles.main}>
          <p className={styles.text}>{text}</p>
          <div className={styles.container}>
            <div className={styles.hourContainer}>
                {hour}
            </div>
            <div className={styles.minutesContainer}>
              {minutes}
            </div>
        </div>
        </div>
        <div className={styles.containerFormats}>
          <div className={styles.formatTime}><p>Am</p></div>
          <div className={styles.formatTime}><p>Pm</p></div>
        </div>
      </div>
        
    )
}