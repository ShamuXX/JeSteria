import React from "react";
import * as styles from "./ButtonSchedule.module.css";
import Link from "next/link";
import { Button } from "@mui/material";

export default function ButtonSchedule(){
  return(
		<Button className={styles.containerButton} href="/Login">
			<p className={styles.title}>Agendar un nuevo horario</p>
			</Button>
  )
}

