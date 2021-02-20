import React from "react";
import Head from "next/head";

import { Header } from "./Header";
import { Footer } from "./Footer";

const Layout = ({ menu, children }) => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon_32x32.png" type="image/png" />
        <title>RUNNER</title>
        <meta
          name="description"
          content="Your consulting team that will help you with your website, translations..."
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
    </div>
  );
};

export default Layout;
