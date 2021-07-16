import Link from "next/link";

export default function Navlink({ children, href, className }) {
  return (
    <Link href={href}>
      <a className={"text-white font-bold p-4 hover:bg-brand-700 text-lg " + className}>
        {children}
      </a>
    </Link>
  );
}
