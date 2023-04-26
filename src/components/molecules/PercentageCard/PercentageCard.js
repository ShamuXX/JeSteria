import React from "react";
import * as styles from "./PercentageCard.module.css";

export default function PercentageCard(){
  return(
    <div className={styles.container}>
      <div className={styles.containerBack2}></div>
			<div className={styles.containerBack1}></div>
      <div className={styles.containerBase}>
				<p className={styles.title}>Media de actividades completadas por día</p>
        <div className={styles.containerCircle}>
          <svg height="100%">
            <circle className={styles.circle} r="75" cx="50%" cy="50%" pathLength="100"></circle>
            <text x="43%" y="52%" className={styles.percentage}>85%</text>
          </svg>
        </div>
      </div>
   </div>      
	)
}