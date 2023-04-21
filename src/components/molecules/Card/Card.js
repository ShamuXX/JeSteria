import React from "react";
import * as styles from "./Card.module.css";

export default function Card(){
  return(
    <div className={styles.container}>
      <p className={styles.title}>Actividades de hoy</p>
        <div className={styles.containerPercentages}>
          <div className={styles.containerCompleted}> 
            <p className={styles.title}>85%</p>
						<p>Completado</p>
          </div>
					<div className={styles.containerRemaining}>
						<p className={styles.title}>15%</p>
						<p>Restante</p>
					</div>
      	</div>
    </div>
    )
}

