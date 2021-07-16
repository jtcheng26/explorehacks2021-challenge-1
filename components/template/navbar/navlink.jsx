import Link from "next/link";

export default function Navlink({ children, href, className }) {
  return (
    <Link href={href}>
      <a className={"text-white font-semibold p-5 hover:bg-brand-700 " + className}>
        {children}
      </a>
    </Link>
  );
}
