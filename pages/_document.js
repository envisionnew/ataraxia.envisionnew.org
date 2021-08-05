import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="author" content="Ataraxia" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={`/favicon/send.png`} />
          <meta property="twitter:image" content={`/favicon/send.png`} />
          <meta
            name="google-site-verification"
            content="SIjCpAkrChhv5gxAW9PcjzHvnOvnK0ttzzCpq4u1qx0"
          />
          <link rel="icon" href="/favicon/favicon.ico" />
          <meta
            name="description"
            content="Ataraxia is a non-profit organization dedicated to promoting neurodiversity within our communities, while creating tangible impacts in the mental health of homeless populations."
          />
          <script
            async
            defer
            data-website-id="ce211351-10bc-4b51-9ba8-9245e9b03c57"
            src="https://umami.saurish.com/umami.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
