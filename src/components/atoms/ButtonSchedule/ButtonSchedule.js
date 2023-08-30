import React from "react";
import * as styles from "./ButtonSchedule.module.css";
import Link from "next/link";
import { Button } from "@mui/material";

export default function ButtonSchedule(props) {
  const handleClick = () => {
    props.setPage("1");
  };
  return (
    <Button className={styles.containerButton} onClick={handleClick}>
      <p className={styles.title}>Agendar un nuevo horario</p>
    </Button>
  );
}
