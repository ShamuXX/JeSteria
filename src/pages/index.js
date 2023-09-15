import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import Login from "./Login";
import Link from "next/link";
import PercentageCard from "../components/molecules/PercentageCard/PercentageCard";
import PageLayout from "../components/molecules/PageLayout";
import Card from "../components/molecules/Card/Card";
import ButtonSchedule from "../components/atoms/ButtonSchedule/ButtonSchedule";
import Calendar from "../components/molecules/CalendarComponent/Calendar";
import CardActivities from "../components/molecules/CardActivities/CardActivities";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <div>
      <Link href="/Login">adsd</Link>
      <CardActivities
        name={"Name Activity"}
        description={"Read book of wolves in the night"}
        hour={"12 pm - 2 pm"}
      />
    </div>
  );
}
