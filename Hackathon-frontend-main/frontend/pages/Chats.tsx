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

const Chats: NextPageWithLayout = () => {
  const [data, setData] = useState<data>({ message: " No message yet" });


  return (
    <div className={""}>
      <Chat />
    </div>
  );
};
Chats.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Chats;
