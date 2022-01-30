import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { StyleProvider } from "../styles/StyleProvider";
import {
  Wagmi,
  Header,
  Page,
  Footer,
  SmileyContainer,
} from "../src/components";
import "modern-normalize";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <title>W3bbz</title>
      </Head>
      <Wagmi>
        <StyleProvider>
          <Header />
          <SmileyContainer />
          <Page>
            <Component {...pageProps} />
          </Page>

          <Footer />
        </StyleProvider>
      </Wagmi>
    </>
  );
}

export default appWithTranslation(MyApp);
