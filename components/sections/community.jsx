import Article from "../article";
import Card from "../card";

export default function Community() {
  return (
    <div
      className="p-5 py-24 md:p-16 flex flex-col pb-0"
      id="stories"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="">
        <Article
          label="OUR COMMUNITY"
          title="Supported by a thriving worldwide community. Hear their stories."
          content="We pride ourselves in the profound social and cultural impact of our product. NiranjanUx is changing the world for penguins and non-penguins alike. Read some of our customers’ stories down below."
        />
      </div>
      <div className="flex items-center justify-center flex-col md:flex-row md:float-right py-10 px-5 space-y-5 md:space-x-5 md:space-y-0">
        <Card
          label="Flipperbook"
          title="How NiranjanUx is Changing the World"
          href="https://www.linux.org"
          img="/assets/StoryLogo.png"
        />
        <Card
          label="Penguin Web Services"
          title="NiranjanUx and the Penguin Computing Revolution"
          href="https://en.wikipedia.org/wiki/Penguin"
          img="/assets/StoryPenguin.png"
        />
        <Card
          label="Anonymous Penguin"
          title="NiranjanUx From a Penguin’s Perspective"
          href="https://www.nationalgeographic.com/animals/birds/facts/penguins-1"
          img="/assets/StoryPenguins.png"
        />
      </div>
    </div>
  );
}
