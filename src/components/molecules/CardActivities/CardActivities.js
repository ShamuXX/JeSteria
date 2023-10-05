import React from "react";
import { Home, Margin } from "@mui/icons-material";
import CircleIcon from "@mui/icons-material/Circle";
import Link from "next/link";
import * as styles from "./CardActivities.module.css";
import IconType from "@/src/icons/Icons";

export default function CardActivities(props) {
  return (
    <div className={styles.container}>
      <header>
        <h4>{props.name}</h4>
        <IconType type={props.icon} sxCard={true} />
      </header>
      <section>
        <div className={styles.containerText}>
          <p>{props.description}</p>
          <CircleIcon color="error" />
        </div>
        <div className={styles.containerHour}>
          <p>{props.hour}</p>
          <Link href="/Login">Ver más..</Link>
        </div>
      </section>
    </div>
  );
}
