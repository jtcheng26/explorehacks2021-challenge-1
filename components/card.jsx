import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/solid";

export default function Card({ label, title, href, img }) {
  return (
    <div className="w-full md:w-72 xl:w-96 shadow-2xl rounded h-56 relative group">
      <Link href={href}>
        <a className="flex flex-col h-full">
          <div className="absolute top-0 right-0 left-0 b-10 h-full bg-gray-darker group-hover:bg-gray-dark z-20 opacity-75 transition-colors rounded" />
          <div className="absolute top-0 right-0 left-0 h-full z-10">
            {img && (
              <Image src={img} alt="card image" layout="fill" className="rounded object-cover" />
            )}
          </div>
          <div className="p-4 w-4/5 sm:w-full lg:w-4/5 z-30">
            <div className="tracking-wide font-light text-brand-default text-sm">
              {label}
            </div>
            <div className="text-xl font-bold leading-relaxed">{title}</div>
          </div>
          <div className="flex-grow" />
          <div className="bg-gray-default flex items-center p-4 py-2 font-semibold group-hover:bg-gray-light cursor-pointer rounded-b z-30 transition-colors">
            Read More
            <div className="flex-grow" />
            <ChevronRightIcon width="30" height="30" />
          </div>
        </a>
      </Link>
    </div>
  );
}
