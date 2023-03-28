import React from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Home = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Joana mensA</h1>
      <Button onClick={() => router.push("/Login")}>aaaa</Button>
    </div>
  );
};

export default Home;
