import Head from "next/head";

import Navbar from "../template/navbar";
import Footer from "../template/footer";

export default function AppLayout({ children, title }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title || "Hackathon Template"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex-grow p-5">{children}</main>
      <Footer />
    </div>
  );
}
