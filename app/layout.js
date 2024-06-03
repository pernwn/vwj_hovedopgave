'use client'

import '@/app/globals.css'
import { Josefin_Sans, Lato } from 'next/font/google';
import Head from 'next/head';
import { metadata } from './metadata';

const josefin_Sans = Josefin_Sans({
  weight: "variable",
  subsets: ["latin"],
  variable:"--font-josefin"
});

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable:"--font-lato"
});


export default function RootLayout({ children }) {
  

  return (
    <html lang="en" className="background--custom" >
      <Head>
        <title>{metadata.title.default}</title>
        <meta
          name="description"
          content={metadata.description}
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body
        className={`${josefin_Sans.variable} ${lato.variable} mx-auto max-w-stretch overflow-x-hidden`}
      >
        <main className="flex-grow h-screen">{children}</main>
      </body>
    </html>
  );
}
