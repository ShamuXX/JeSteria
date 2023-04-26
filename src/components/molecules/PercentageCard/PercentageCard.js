import React from "react";
import * as styles from "./PercentageCard.module.css";

export default function PercentageCard(){
  return(
    <div className={styles.container}>
      <div className={styles.containerBack2}></div>
			<div className={styles.containerBack1}></div>
      <div className={styles.containerBase}>
				<p className={styles.title}>Media de actividades completadas por día</p>
      </div>
   </div>      
	)
}