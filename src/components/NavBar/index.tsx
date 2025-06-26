import Link from "next/link";
import Menu from "../Menu/index";

const NavBar = () => {
  return (
    <nav className="bg-black py-1.5">
      <div className="wrapper flex items-center justify-between">
        <Link href="/">
          <p className="text-3xl text-left">TecnoSchool</p>
        </Link>
        <Menu />
      </div>
    </nav>
  );
};

export default NavBar;
