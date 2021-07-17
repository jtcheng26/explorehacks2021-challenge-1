import Button from "../button";
import Body from "../typography/body";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="px-5 sm:px-20 pt-56 h-full pb-30 md:pb-64 mb-10" id="hero">
      <div className="absolute -right-20 top-36 z-20 sm:right-10 lg:right-20 xl:right-32">
        <Image src="/assets/LogoFull.png" width="270" height="324" alt="logo" />
      </div>
      <div className="absolute top-0 right-0 left-0 b-10 h-full bg-gray-default opacity-30 z-10" />
      <div className="space-y-7 w-11/12 sm:w-9/12 relative z-30 pb-24 md:pb-0">
        <div className="font-bold text-7xl">
          The future of computing is{" "}
          <span className="text-brand-default">penguin.</span>
        </div>
        <div className="w-full md:w-2/3">
          <Body>
            NiranjanUx Kernel is a state-of-the-art Linux kernel for{" "}
            <span className="font-semibold">penguins.</span> Join NiranjanUx in
            ending the digital divide.
          </Body>
        </div>
        <div className="flex flex-row space-x-4">
          <Button href="#join" dark>
            Join the Colony
          </Button>
          <Button href="#stories" outlined>
            Customer Stories
          </Button>
        </div>
      </div>
    </div>
  );
}
