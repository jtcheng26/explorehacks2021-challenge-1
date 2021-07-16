import AppLayout from "../components/layout/appLayout";
import Article from "../components/article";
import Hero from "../components/sections/hero";

export default function Home() {
  return (
    <AppLayout>
      <Hero />
      <Article
        label="OUR MISSION"
        title="Computers for everyone. 
Even penguins."
        content="Life without computers is a life without purpose. It’s a life without connection to others, a life without joy, without passion.

Our mission is to ensure that computers are accessible to everyone, even penguins."
      />
    </AppLayout>
  );
}
