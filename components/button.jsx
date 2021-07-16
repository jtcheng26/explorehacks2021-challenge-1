import Navlink from "./template/navbar/navlink";

export default function Button({ children, href }) {
  return (
    <div className="bg-brand-default rounded-lg py-2 hover:bg-brand-dark">
      <Navlink href={href || "/"}>{children}</Navlink>
    </div>
  );
}
