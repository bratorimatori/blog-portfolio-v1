/* eslint-disable @next/next/inline-script-id */
/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { HomeLayout } from '@/layouts/HomeLayout';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import StructuredData from '@/components/StructuredData';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StructuredData />
      <Head>
        <title>Bojan Tomic - Software Engineer | React, Next.js & Node.js Developer</title>

        {/* Primary Meta Tags */}
        <meta name='description' content='Bojan Tomic is a software engineer specializing in React, Next.js, and Node.js. Read technical blog posts about web development, SSR, SSG, and modern JavaScript frameworks.' />
        <meta name='keywords' content='Bojan Tomic, Software Engineer, React Developer, Next.js, Node.js, JavaScript, TypeScript, Web Development, SSR, SSG, Full Stack Developer' />
        <meta name='author' content='Bojan Tomic' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='Content-Language' content='en' />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Bojan Tomic - Software Engineer' />
        <meta property='og:title' content='Bojan Tomic - Software Engineer | React & Next.js Developer' />
        <meta property='og:description' content='Technical blog and portfolio of Bojan Tomic, specializing in React, Next.js, and modern web development.' />
        <meta property='og:url' content='https://bojantomic.com' />
        <meta property='og:image' content='https://bojantomic.com/cover/og_image.jpg' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:locale' content='en_US' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Bojan Tomic - Software Engineer' />
        <meta name='twitter:description' content='Technical blog about React, Next.js, and web development' />
        <meta name='twitter:image' content='https://bojantomic.com/cover/og_image.jpg' />

        {/* Canonical URL */}
        <link rel='canonical' href='https://bojantomic.com' />

        {/* Favicon */}
        <link rel='icon' href='/favicon.ico' />

        {/* Theme Color */}
        <meta name='theme-color' content='#ffffff' media='(prefers-color-scheme: light)' />
        <meta name='theme-color' content='#181818' media='(prefers-color-scheme: dark)' />
      </Head>
      <main className={`font-inter min-h-screen bg-white dark:bg-[#181818]`}>
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
    </>
  );
}

export default App;
