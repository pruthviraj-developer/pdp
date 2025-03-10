// app/layout.tsx
import Script from "next/script";
import { ReactNode } from "react";

const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID; // Replace with your GTM ID

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ GTM Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer', '${GTM_ID}');
                `,
          }}
        />
        <Script
          id="segment-script"
          strategy="beforeInteractive"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              !function(){var n=window.analytics=window.analytics||[];if(!n.initialize)if(n.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{n.invoked=!0,window.analytics.methods=["identify","track","trackLink","trackForm","trackClick","trackSubmit","page","pageview","ab","alias","ready","group","on","once","off"],window.analytics.factory=function(n){return function(){var a=Array.prototype.slice.call(arguments);return a.unshift(n),window.analytics.push(a),window.analytics}};for(var a=0;a<window.analytics.methods.length;a++){var t=window.analytics.methods[a];window.analytics[t]=window.analytics.factory(t)}var i="${process.env.ANALYTIC_HOST}";n.load=function(n){if(!document.getElementById("analytics-js")){window.a=window.analytics;var a=document.createElement("script");a.async=!0,a.id="analytics-js",a.type="text/javascript",a.src=i+"/analytics.min.js",a.addEventListener("load",function(a){"function"==typeof n&&n(a)},!1);var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(a,t)}},n.SNIPPET_VERSION="4.1.0",n.load(function(){var n=new XMLHttpRequest;n.open("GET",i+"/config.json"),n.onload=function(){if(200===n.status){let i;try{i=JSON.parse(n.responseText),i=JSON.parse(atob(i.data))}catch(n){return void console.log("Json parsing failed")}for(window.analytics.initialize(i);window.a.length>0;){var a=window.a.shift(),t=a.shift();window.analytics[t]&&window.analytics[t].apply(window.analytics,a)}window.analytics.page()}else console.log("Request failed.  Returned status of "+n.status)},n.send()})}}();
              `,
          }}
        />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
