import React from "react";
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import { AppType } from "next/dist/shared/lib/utils";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: AppType) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
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
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
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
        </Head>
        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
