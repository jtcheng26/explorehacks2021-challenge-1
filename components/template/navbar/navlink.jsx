import Link from "next/link";

export default function Navlink({ children, href, className, nohighlight, dark }) {
  return (
    <Link href={href}>
      <a
        className={
          `${!dark ? "text-gray-lightest" : "text-gray-darker"} font-bold ${
            !nohighlight
              ? "hover:text-brand-default py-4"
              : "py-2"
          } transition-colors text-lg ` + className
        }
      >
        {children}
      </a>
    </Link>
  );
}
