import { Paper } from "@mui/material";
import Image from "next/image";
import styles from "./ItemCarousel.module.css";
export default function ItemCarousel(props) {
  return (
    <Paper className={styles.paper}>
      <Image
        src={props.item.image}
        className={props.item.styles}
        alt="graphics1"
      />
      <h2>{props.item.name}</h2> <br />
    </Paper>
  );
}
