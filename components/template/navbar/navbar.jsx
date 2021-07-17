import Navlink from "./navlink";
import Image from "next/image";
import Button from "../../button";
import { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";

export default function Navbar({ scroll }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <div
          className={`md:hidden flex flex-col justify-center bg-gray-default opacity-90 backdrop-blur-xl shadow-2xl ${
            scroll && ""
          } fixed top-24 right-0 space-y-2 p-4 z-50 rounded-lg backdrop-brightness-75`}
        >
          <Navlink href="/#mission">Mission</Navlink>
          <Navlink href="/#solution">Solution</Navlink>
          <Navlink href="/#stories">Community</Navlink>
          <Navlink href="/#contact">Contact</Navlink>
          <div className="mr-5">
            <Button href="/#join" outlined>
              Join the Colony
            </Button>
          </div>
        </div>
      )}
      <nav
        className={`flex flex-row items-center backdrop-blur-xl transition-shadow ${
          scroll && "shadow-2xl"
        } fixed top-0 right-0 left-0 space-x-9 px-4 z-50`}
      >
        <Navlink href="/#hero">
          <Image src="/assets/LogoFull.png" width="30" height="40" alt="logo" />
        </Navlink>
        <div className="flex-grow" />
        <div className="hidden md:visible space-x-9 md:flex flex-row items-center">
          <Navlink href="/#mission">Mission</Navlink>
          <Navlink href="/#solution">Solution</Navlink>
          <Navlink href="/#stories">Community</Navlink>
          <Navlink href="/#contact">Contact</Navlink>
          <div className="mr-5">
            <Button href="/#join" outlined>
              Join the Colony
            </Button>
          </div>
        </div>
        <div
          className="md:hidden w-10 h-10 text-gray-lighter cursor-pointer hover:text-brand-default transition-colors"
          onClick={() => setOpen(!open)}
        >
          <MenuIcon />
        </div>
      </nav>
    </>
  );
}
