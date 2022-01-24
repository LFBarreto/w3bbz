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
  SpotifyWidget,
} from "../src/components";
import "modern-normalize";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta name="application-name" content="W3BBZ" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="W3BBZ" />
        <meta name="description" content="W3BBZ" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-tap-highlight" content="no" />

        <link rel="apple-touch-icon" href="/iconx72.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/iconx152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/iconx180.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/iconx167.png" />

        <link rel="icon" type="image/png" sizes="32x32" href="/iconx32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/iconx16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="W3BBZ" />
        <meta property="og:description" content="Best W3BBZ in the world" />
        <meta property="og:site_name" content="W3BBZ" />
        <meta property="og:url" content="https://web.bz" />
        <meta property="og:image" content="https://web.bz/iconx512.png" />

        <link rel="manifest" href={"/manifest.json"} />
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
          <SpotifyWidget />
        </StyleProvider>
      </Wagmi>
    </>
  );
}

export default appWithTranslation(MyApp);
