import Head from "next/head";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Notionatica</title>
        <meta
          name="description"
          content="Made with love by Ali Sertaç Cebeci"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          sizes="91x67"
          href="static/images/synnada.png"
        />
      </Head>
      <main className="flex flex-col items-center justify-start w-full h-screen font-sans">
        <Navbar />
        <Main />
      </main>
    </>
  );
}
