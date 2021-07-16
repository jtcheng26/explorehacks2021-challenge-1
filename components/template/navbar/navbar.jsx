import Navlink from "./navlink";
import Image from "next/image";
import Button from "../../button";

export default function Navbar({ scroll }) {
  return (
    <nav
      className={`flex flex-row items-center backdrop-blur-xl ${
        scroll && "shadow-2xl"
      } fixed top-0 right-0 left-0`}
    >
      <Navlink href="/">
        <Image src="/assets/LogoFull.png" width="30" height="40" alt="logo" />
      </Navlink>
      <div className="flex-grow" />
      <Navlink href="/#mission">Mission</Navlink>
      <Navlink href="/#solution">Solution</Navlink>
      <Navlink href="/#community">Community</Navlink>
      <Navlink href="/#contact">Contact</Navlink>
      <div className="mr-5">
        <Button href="/#join">Join the Colony</Button>
      </div>
    </nav>
  );
}
