import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="absolute padding-x z-10 py-8 top-0 w-full">
      <nav className="flex w-full justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} width={130} height={29} alt="nike logo" />
        </a>
        <ul className="flex-1 gap-8 justify-center items-center hidden md:flex">
          {navLinks.map(function (item) {
            return (
              <li key={item.label}>
                <a
                  className="font-montserrat leading-normal text-lg text-slate-gray hover:text-slate-950"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="hidden md:block">
          <a
            className="font-montserrat leading-normal font-medium text-lg hover:opacity-70"
            href="#"
          >
            Sign in
          </a>
        </div>
        <img
          className="md:hidden"
          width={25}
          height={25}
          src={hamburger}
          alt="hamburger-menu"
        />
      </nav>
    </header>
  );
};

export default Nav;
