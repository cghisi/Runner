import React from "react";
import Head from "next/head";
import Navigation from "./Navigation";

const Layout = ({ menu, children }) => {
  const menuLinks = menu.data.menu_links;
  return (
    <div>
      <Head>
        <title>Slice Machine - NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation menuLinks={menuLinks} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
