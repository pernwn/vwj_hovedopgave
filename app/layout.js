
import '@/app/globals.css'
import { Josefin_Sans, Lato } from 'next/font/google';
import Head from 'next/head';


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

export const metadata = {
  title: {
    template: "%s | CyberMinds",
    default: "CyberMinds",
  },
  description: "Victoria W Johansen - Multimediedesign, Hovedopgave 2024",
};


export default function RootLayout({ children }) {
  

  return (
    <html lang="en" className="background--custom" >
      <body
        className={`${josefin_Sans.variable} ${lato.variable} mx-auto max-w-stretch overflow-x-hidden`}
      >
        <main className="flex-grow h-screen">{children}</main>
      </body>
    </html>
  );
}
