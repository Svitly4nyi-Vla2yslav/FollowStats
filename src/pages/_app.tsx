import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

// Додаємо типи для властивостей `fbq`
interface WindowWithFbq extends Window {
  fbq?: ((...args: any[]) => void) & {
    queue?: any[];
    loaded?: boolean;
    version?: string;
  };
}

declare const window: WindowWithFbq & typeof globalThis;

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (window.gtag) {
        window.gtag("config", "G-P5ZL3XZE45", {
          page_path: url,
        });
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ініціалізуємо Facebook Pixel
      (function (f: WindowWithFbq, b: Document, e: string, v: string, t?: HTMLScriptElement, s?: HTMLScriptElement) {
        if (f.fbq) return;
        f.fbq = function (...args: any[]) {
          (f.fbq!.queue = f.fbq!.queue || []).push(args);
        };
        f.fbq.loaded = true;
        f.fbq.version = "2.0";
        f.fbq.queue = [];
        t = b.createElement(e) as HTMLScriptElement;
        t.async = true;
        t.src = v;
        s = b.getElementsByTagName(e)[0] as HTMLScriptElement;
        s?.parentNode?.insertBefore(t, s);
      })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

      // Налаштовуємо Pixel з ID та перевіряємо наявність `fbq`
      window.fbq?.("init", "8450861085020995"); // Заміни на свій Pixel ID
      window.fbq?.("track", "PageView");
    }
  }, []);

  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P5ZL3XZE45"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P5ZL3XZE45');
            `,
          }}
        />
        <meta property="og:title" content="Follow Stats" />
        <meta
          property="og:description"
          content="Analyze your Instagram followers with Follow Stats!"
        />
        <meta
          property="og:image"
          content="https://follow-stats.netlify.app/assets/image/tempImageryDmsK.png"
        />
        <meta property="og:url" content="https://follow-stats.netlify.app" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Follow Stats" />
        <meta
          name="twitter:description"
          content="Analyze your Instagram followers with Follow Stats!"
        />
        <meta
          name="twitter:image"
          content="https://follow-stats.netlify.app/assets/image/tempImageryDmsK.png"
        />
        <meta property="fb:app_id" content="900174205381464" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
