import Navlink from "./template/navbar/navlink";

export default function Button({ children, href, dark, outlined, onClick }) {
  return (
    <div className="group" onClick={onClick}>
      <div
        className={`rounded-lg px-4 transition-colors flex items-center justify-center cursor-pointer ${
          outlined
            ? "bg-transparent border-2 border-brand-default group-hover:bg-gray-darker"
            : "bg-brand-default group-hover:bg-brand-dark"
        }`}
      >
        {!onClick ? (
          <Navlink dark={dark} href={href || "/"} nohighlight>
            <span className={`${outlined && "font-normal text-brand-default"}`}>
              {children}
            </span>
          </Navlink>
        ) : (
          <div className={`font-bold text-lg transition-colors py-2 ${!dark && "hover:text-brand-default"}`}>
            <span className={`${outlined && "font-normal text-brand-default"} ${dark && "text-gray-darker"}`}>
              {children}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
