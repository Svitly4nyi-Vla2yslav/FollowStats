import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

// interface WindowWithFbq extends Window {
//   fbq?: (...args: any[]) => void; // або конкретизуйте тип аргументів
// }

// declare var window: WindowWithFbq;

// type WindowWithGtag = Window & {
//   gtag?: (command: string, targetId: string, params?: object) => void;
// };

// const windowWithGtag = window as WindowWithGtag;

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.gtag("config", "G-P5ZL3XZE45", {
        page_path: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     // Ініціалізуємо Facebook Pixel
  //     (function (f, b, e, v, n, t, s) {
  //       if (f.fbq) return;
  //       n = f.fbq = function () {
  //         n.callMethod
  //           ? n.callMethod.apply(n, arguments)
  //           : n.queue.push(arguments);
  //       };
  //       if (!f.fbq) f.fbq = n;
  //       n.push = n;
  //       n.loaded = true;
  //       n.version = "2.0";
  //       n.queue = [];
  //       t = b.createElement(e);
  //       t.async = true;
  //       t.src = "https://connect.facebook.net/en_US/fbevents.js";
  //       s = b.getElementsByTagName(e)[0];
  //       s.parentNode.insertBefore(t, s);
  //     })(window, document, "script");

  //     // Налаштування Pixel із вказаним ID
  //     window.fbq("init", "8450861085020995"); // заміни "YOUR_PIXEL_ID" на фактичний ID Pixel
  //     window.fbq("track", "PageView");
  //   }
  // }, []);

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
