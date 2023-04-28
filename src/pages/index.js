import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import Login from "./Login";
import Link from "next/link";
import Calendar from "../components/molecules/CalendarComponent/Calendar";
import PageLayout from "../components/molecules/PageLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <PageLayout >
      <Link href="/Home">adsd</Link>
      <Calendar />
      </PageLayout>
  );
}
