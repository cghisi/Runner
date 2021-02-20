// pages/_app.js
import React from "react";
import NextApp from "next/app";

import { theme } from "essential-slices";

import { ThemeProvider, BaseStyles } from "theme-ui";
import { Client } from "../prismic";

import "../styles/globals.css";

export default class App extends NextApp {
  static async getInitialProps(appCtx) {
    const client = Client();
    const menu = (await client.getSingle("menu")) || {};
    return {
      props: {
        menu: menu,
      },
    };
  }

  render() {
    const { Component, pageProps, props } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} menu={props.menu} />
      </ThemeProvider>
    );
  }
}
