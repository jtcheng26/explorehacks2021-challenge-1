import Article from "../article";
import Image from "next/image";
import Body from "../typography/body";

export default function Solution() {
  return (
    <div
      className="px-5 py-16 md:p-16 flex flex-col md:flex-row relative md:pt-44 lg:pt-60 pb-20"
      id="solution"
    >
      <div className="absolute top-0 right-0 left-0 b-10 h-full bg-gray-default opacity-30 z-10" />
      <div className="flex items-center justify-center md:float-left p-10 z-20">
        <Image
          src="/assets/KernelIcon.png"
          width="340"
          height="340"
          alt="linux penguin"
        />
      </div>
      <div className="md:flex-grow" />
      <div className="md:w-3/5 z-20">
        <Article
          label="OUR SOLUTION"
          title="An exclusive kernel. Specially made for penguins."
          content="Here at NiranjanUx, we are fighting the digital divide through our exclusive Linux kernel specially engineered for penguins."
        >
          <Body>No penguin left behind.</Body>
        </Article>
      </div>
    </div>
  );
}
