import Layout from "@/components/layout/Layout";
import Loading from "@/components/loader/Loading";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  Space_Grotesk,
  Manrope,
  JetBrains_Mono,
} from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1900);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main
      className={`${spaceGrotesk.variable} ${manrope.variable} ${jetBrains.variable}`}
    >
      <Head>
        <title>Deepanshu Verma | Full Stack Lead | MERN & AI Architect</title>
        <meta
          name="description"
          content="Hi, I'm Deepanshu Verma – a Full Stack Lead and AI Architect skilled in MERN, OpenAI, and scalable web solutions. Check out my portfolio!"
        />
        <meta
          name="keywords"
          content="Deepanshu Verma, Portfolio, Full Stack Lead, AI Architect, MERN, React, Next.js, OpenAI"
        />
        <meta name="author" content="Deepanshu Verma" />

        {/* Open Graph Meta */}
        <meta
          property="og:title"
          content="Deepanshu Verma | Full Stack Lead | MERN & AI Architect"
        />
        <meta
          property="og:description"
          content="Check out my portfolio and latest web projects featuring MERN stack and AI integrations."
        />
        <meta
          property="og:image"
          content="/images/profile.jpg"
        />
        <meta property="og:url" content="https://www.deepanshuverma.in/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Deepanshu Verma | Full Stack Lead | MERN & AI Architect"
        />
        <meta
          name="twitter:description"
          content="Check out my portfolio and latest web projects featuring MERN stack and AI integrations."
        />
        <meta
          name="twitter:image"
          content="/images/profile.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading ? (
        <Loading />
      ) : (
        <Layout>
          {" "}
          <Component {...pageProps} />{" "}
        </Layout>
      )}
    </main>
  );
}
