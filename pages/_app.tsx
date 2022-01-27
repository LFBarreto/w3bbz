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
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="W3BBZ" />
        <meta name="description" content="W3BBZ" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-tap-highlight" content="no" />

        <link
          rel="preload"
          href="/fonts/tinier.regular.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/tiny.regular.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/5by7.bold.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/5by7.regular.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/FuturaLT-Bold.woff2"
          as="font"
          type="font/woff2"
        />

        <link rel="apple-touch-icon" href="/iconx72.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/iconx152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/iconx180.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/iconx167.png" />

        <link rel="icon" type="image/png" sizes="32x32" href="/iconx32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/iconx16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="W3BBZ" />

        <link rel="manifest" href="/manifest.json" />
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
