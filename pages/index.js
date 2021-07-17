import AppLayout from "../components/layout/appLayout";
import Hero from "../components/sections/hero";
import Mission from "../components/sections/mission";
import Solution from "../components/sections/solution";
import Community from "../components/sections/community";
import Join from "../components/sections/join";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <AppLayout>
      <Hero />
      <Mission />
      <Solution />
      <Community />
      <Join />
    </AppLayout>
  );
}
