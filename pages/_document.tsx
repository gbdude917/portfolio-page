import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Gabriel Leong - Portfolio Page</title>
        <meta
          name="description"
          content="This is Gabriel's portfolio page. You can learn more about him here in his personal website."
        />
        <meta name="robots" content="index, archive" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
