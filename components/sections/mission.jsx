import Article from "../article";
import Image from "next/image";
import Body from "../typography/body";

export default function Mission() {
  return (
    <div
      className="p-5 md:px-16 pt-44 flex flex-col md:flex-row pb-0"
      id="mission"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="md:w-2/3">
        <Article
          label="OUR MISSION"
          title="Computers for everyone. Even penguins."
          content="Life without computers is a life without purpose. It’s a life without connection to others, a life without joy, without passion."
        >
          <Body>
            Our mission is to ensure that computers are accessible to everyone, even
            penguins.
          </Body>
        </Article>
      </div>
      <div className="flex items-center justify-center md:float-right p-10">
        <Image
          src="/assets/LinuxPenguin.png"
          width="300"
          height="360"
          alt="linux penguin"
        />
      </div>
    </div>
  );
}
