import AppLayout from "../components/layout/appLayout";
import Hero from "../components/sections/hero";
import Mission from "../components/sections/mission";
import Solution from "../components/sections/solution";
import Community from "../components/sections/community";

export default function Home() {
  return (
    <AppLayout>
      <Hero />
      <Mission />
      <Solution />
      <Community />
    </AppLayout>
  );
}
