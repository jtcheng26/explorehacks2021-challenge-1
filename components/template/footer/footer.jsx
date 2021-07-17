import Button from "../../button";
import Body from "../../typography/body";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center flex-col w-full h-96 bg-gray-darkest p-5 text-center">
      <div className="flex flex-col items-center justify-center space-y-4 pt-20">
        <div className="font-bold text-4xl">
          NiranjanUx: For Penguins. By Penguins.
        </div>
        <Body>Have a question or concern? Send us an email down below!</Body>
        <div id="contact">
          <Button dark>Support</Button>
        </div>
      </div>
      <div className="flex-grow" />
      <div className="font-light text-gray-light text-sm pb-3">
        Copyright © 2021 NiranjanUx LLC.
      </div>
    </footer>
  );
}
