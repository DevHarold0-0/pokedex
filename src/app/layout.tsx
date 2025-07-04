import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import '@mantine/core/styles.css';
import "./globals.css";

import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';

import Header from "./components/Header";
import Footer from "./components/Footer";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
  display: "swap" //for performance
});


export const metadata: Metadata = {
  title: "My pokedex app",
  description: "A pokedex website",
};

//Suppressed hydration during development, remove during production. Known cause of hydration errror to be extensions. In my case Colorzilla on chrome.
export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className={`${robotoFlex.variable} antialiased`} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body suppressHydrationWarning>
        <MantineProvider defaultColorScheme="auto">
          <header>
            <Header />
          </header>

            <main>
              {children}
            </main>
          
          <footer>
            <Footer />
          </footer>
        </MantineProvider>
      </body>
    </html>
  );
}