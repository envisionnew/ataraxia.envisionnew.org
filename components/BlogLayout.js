import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";

export default function BlogLayout(props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const router = useRouter();
  const { children, ...customMeta } = props;
  const meta = {
    title: "Blog | Ataraxia",
    description: `Find student-written and community-written content about neurodiversity and neuroscience.`,
    type: "article",
    ...customMeta,
  };

  return (
    <div className="h-screen bg-white dark:bg-black">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://ataraxiahealth.org${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://ataraxiahealth.org${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta
          property="og:site_name"
          content="Ataraxia – a non-profit organization."
        />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ataraxiahealthh" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Header />
      <main
        id="skip"
        className="flex flex-col justify-center px-8 bg-white dark:bg-black"
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}
