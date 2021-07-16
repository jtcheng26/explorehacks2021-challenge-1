import AppLayout from "../components/layout/appLayout";
import Hero from "../components/sections/hero";
import Mission from "../components/sections/mission";

export default function Home() {
  return (
    <AppLayout>
      <Hero />
      <Mission />
    </AppLayout>
  );
}
