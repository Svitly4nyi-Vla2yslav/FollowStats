import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Follow Stats" />
        <meta
          property="og:description"
          content="Analyze your Instagram followers with Follow Stats!"
        />
        <meta
          property="og:image"
          content="https://follow-stats.netlify.app/assets/tempImageryDmsK.png"
        />
        <meta property="og:url" content="https://follow-stats.netlify.app" />
        <meta property="og:type" content="website" />

        {/* Twitter Card метадані */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Follow Stats" />
        <meta
          name="twitter:description"
          content="Analyze your Instagram followers with Follow Stats!"
        />
        <meta
          name="twitter:image"
          content="https://follow-stats.netlify.app/assets/tempImageryDmsK.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
