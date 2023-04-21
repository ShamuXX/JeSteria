import React from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Card from "../components/molecules/Card/Card";
import PageLayout from "../components/molecules/PageLayout";

const Home = () => {
  const router = useRouter();

  return (
    <PageLayout title="Home">
      <h1>Joana mensA</h1>
      <Button onClick={() => router.push("/Login")}>aaaa</Button>
      <Card />
      </PageLayout>
  );
};

export default Home;
