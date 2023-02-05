import Head from "next/head";
import Image from "next/image";
import { type } from "os";
import { ReactElement, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Chat from "../Components/Chat";
import { NextPageWithLayout } from "./_app";
import Layout from "../Components/Layout";

type data = {
  message: String;
};

const Home: NextPageWithLayout = () => {
  const [data, setData] = useState<data>({ message: " No message yet" });

  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch("http://localhost:5000/");
  //     const json = await res.json();
  //     setData(json);
  //   })();
  // }, []);

  return (
    <div className={""}>
    </div>
  );
};
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Home;
