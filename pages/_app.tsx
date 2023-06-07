/* eslint-disable @next/next/inline-script-id */
/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { HomeLayout } from '@/layouts/HomeLayout';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`font-inter min-h-screen bg-white dark:bg-[#181818]`}>
      <Head>
        <title>Bojan Tomic Dev</title>
        <meta name='description' content='Bojan Tomic Dev' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Script
        strategy='beforeInteractive'
        dangerouslySetInnerHTML={{
          __html: `
              (function() {
                window.__onThemeChange = function() {};
                function setTheme(newTheme) {
                  window.__theme = newTheme;
                  preferredTheme = newTheme;  
                    window.__onThemeChange(newTheme);
                }
                var preferredTheme;
                try {
                  preferredTheme = localStorage.getItem('theme');
                  var theme = localStorage.getItem('theme') || 'light';
                  if (theme === 'dark') {
                    document.querySelector('html').classList.add('dark');
                  }
                } catch (err) { }
                window.__setPreferredTheme = function(newTheme) {
                  setTheme(newTheme);
                  try {
                    localStorage.setItem('theme', newTheme);
                  } catch (err) {}
                }
                var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
                darkQuery.addListener(function(e) {
                  window.__setPreferredTheme(e.matches ? 'dark' : 'light')
                });
                setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
              })();
            `,
        }}
      />
      <Analytics />
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
    </main>
  );
}

export default App;
