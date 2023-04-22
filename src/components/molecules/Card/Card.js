import React from "react";
import * as styles from "./Card.module.css";
import Box from "../../atoms/Box/Box";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function Card(){
	const [state, setSate] = useState(true);
  const onMorePress = () => setSate(!state);
	const items = [
		{
			text: "Lavar a los perros",
			hora: "5pm"
		},
		{
			text: "Hacer la tarea de matemáticas",
			hora: "6pm"
		},
		{
			text: "Estudiar para el examen de inglés",
			hora: "3pm"
		},
		{
			text: "Hacer ejercicio",
			hora: "10am"
		},
		{
			text: "Sacar a pasear a los gatos",
			hora: "12pm"
		},
	]
  return(
    <div className={styles.container} style={{maxWidth: state ? "25%" : "100%"}}>
			<div className={styles.containerTitle}>
      <p className={styles.title} style={{alignSelf: state ? "flex-start" : "center"}}>Actividades de hoy</p>
			</div>
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
				{state ? items.slice(0,3).map((item, i) => (
              <Box key={i} item={item} text={item.text}/>
            )): items.map((item, i) => (
              <Box key={i} item={item} text={item.text}/>
            ))}
			</div>
			<p className={styles.more} onClick={onMorePress}>{state ? "Ver más..." : "Ver menos"}</p>
    </div>
    )
}

