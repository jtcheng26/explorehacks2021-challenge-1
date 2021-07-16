import Navlink from "./navlink";

export default function Navbar({ children }) {
  return (
    <nav className="bg-brand-500 flex flex-row">
      <Navlink href="/">Home</Navlink>
      {children}
    </nav>
  );
}
