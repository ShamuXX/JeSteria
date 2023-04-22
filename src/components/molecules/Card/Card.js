import React from "react";
import * as styles from "./Card.module.css";
import Box from "../../atoms/Box/Box";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function Card(){
	const [state, setSate] = useState(true);
  const onMorePress = () => setSate(!state);
  return(
    <div className={styles.container} style={{maxWidth: state ? "25%" : "100%"}}>
      <p className={styles.title} style={{alignSelf: state ? "flex-start" : "center"}}>Actividades de hoy</p>
        <div className={styles.containerPercentages} style={{width: state ? "100%" : "50%"}}>
          <div className={styles.containerCompleted}> 
            <p className={styles.title}>85%</p>
						<p>Completado</p>
          </div>
					<div className={styles.containerRemaining}>
						<p className={styles.title}>15%</p>
						<p>Restante</p>
					</div>
      	</div>
			<div className={styles.containerTasks}>
			<Box text={"Label 1"}/>
			<Box text={"Label 2"}/>
			<Box text={"Label 3"}/>
			</div>
			<p className={styles.more} onClick={onMorePress}>Ver más...</p>
    </div>
    )
}

