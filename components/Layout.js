import React from "react";
import Head from "next/head";

import { Header } from "./Header";
import { Footer } from "./Footer";

const Layout = ({ menu, children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <title>RUNNER</title>
        <meta
          name="description"
          content="Start running, earn rewards. Add more to your running schedule with RUNNING"
        />
        <link
          rel="preload"
          href="/fonts/Poppins-Regular.ttf'"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Poppins-Medium.ttf'"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Header
        //altLangs={altLangs}
        //currentLang={lang.currentLang}
        menu={menu}
      />
      <main>{children}</main>
      <Footer menu={menu} />
    </>
  );
};

export default Layout;
