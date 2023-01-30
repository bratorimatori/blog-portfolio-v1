import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Source_Sans_Pro } from '@next/font/google';
import React from 'react';
import { HomeLayout } from '@/layouts/HomeLayout';

const lora = Source_Sans_Pro({
  weight: ['200', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-lora',
});

function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${lora.variable} font-sans min-h-screen bg-white dark:bg-[#020a13]`}
    >
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
    </main>
  );
}

export default App;
