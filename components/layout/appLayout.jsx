import Head from "next/head";

import Navbar from "../template/navbar";
import Footer from "../template/footer";
import { useEffect, useState } from "react";

export default function AppLayout({ children, title }) {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const listener = window.addEventListener("scroll", () => {
        if (!scroll && window.pageYOffset !== 0) setScroll(true);
        else if (scroll && window.pageYOffset === 0) setScroll(false);
      });
      return () => window.removeEventListener("scroll", listener);
    }
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-darker text-gray-lightest">
      <Head>
        <title>{title || "ExploreHacks 2021 Challenge 1"}</title>
        <link rel="icon" href="/assets/LogoFull.png" />
      </Head>
      <Navbar scroll={scroll} />
      <main className="h-full">{children}</main>
      <Footer />
    </div>
  );
}
