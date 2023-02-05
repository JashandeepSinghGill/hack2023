import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { SSRProvider } from "react-bootstrap";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import SidebarProvider from "../services/useSide.js";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  pageProps: {
    /** Initial session passed in from `getServerSideProps` or `getInitialProps` */
    session?: Session;
  };
};

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  //To use bootstrap js features
  // useEffect(() => {
  //   require("bootstrap/dist/js/bootstrap.bundle.min.js");
  // }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SidebarProvider>
        <SessionProvider session={session} refetchInterval={40 * 60}>
          <SSRProvider>{getLayout(<Component {...pageProps} />)} </SSRProvider>
        </SessionProvider>
      </SidebarProvider>
    </>
  );
}
