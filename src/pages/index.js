import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import Login from "./Login";
import Link from "next/link";
import PercentageCard from "../components/molecules/PercentageCard/PercentageCard";
import PageLayout from "../components/molecules/PageLayout";
import Card from "../components/molecules/Card/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <PageLayout>
      <Link href="/Home">adsd</Link>
      <div>hola</div>
      <div style={{display:"flex"}}>
        <Card />
        <PercentageCard />
      </div>
    </PageLayout>
  );
}
