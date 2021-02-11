import React from "react";
import Head from "next/head";

import Header from "./Header";

const Layout = ({ menu, children }) => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon_32x32.png" type="image/png" />
        <link
          rel="preload"
          href="/fonts/OpenSans-Regular.woff"
          as="font"
          crossOrigin=""
        />
        <title>RUNNER</title>
        <meta
          name="description"
          content="Your consulting team that will help you with your website, translations..."
        />
      </Head>
      <Header
        //altLangs={altLangs}
        //currentLang={lang.currentLang}
        menu={menu}
      />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
