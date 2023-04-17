import Image from "next/image";
import flower from "../../../images/Flor.png";
import star from "../../../images/Estrella.png";
import * as styles from "./FlowerAnimation.module.css";

export default function FlowerAnimation(props) {
  return (
    <div className={styles.containerImg}>
      <Image src={star} className={styles.imgStar} alt="Star" />
      <Image src={flower} className={styles.imgFlower} alt="Flower" />
      <Image src={star} className={styles.imgStar} alt="Star" />
      <Image src={flower} className={styles.imgFlower} alt="Flower" />
      <Image src={star} className={styles.imgStar} alt="Star" />
      <Image src={flower} className={styles.imgFlower} alt="Flower" />
      <Image src={star} className={styles.imgStar} alt="Star" />
      <Image src={flower} className={styles.imgFlower} alt="Flower" />
      <Image src={star} className={styles.imgStar} alt="Star" />
    </div>
  );
}
