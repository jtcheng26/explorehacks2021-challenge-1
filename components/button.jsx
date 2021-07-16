import Navlink from "./template/navbar/navlink";

export default function Button({ children, href, dark, outlined }) {
  return (
    <div
      className={`rounded-lg px-4 transition-colors flex items-center ${
        outlined
          ? "bg-transparent border-2 border-brand-default hover:bg-gray-darker"
          : "bg-brand-default hover:bg-brand-dark"
      }`}
    >
      <Navlink dark={dark} href={href || "/"} nohighlight>
        <span className={`${outlined && "font-normal text-brand-default"}`}>
          {children}
        </span>
      </Navlink>
    </div>
  );
}
