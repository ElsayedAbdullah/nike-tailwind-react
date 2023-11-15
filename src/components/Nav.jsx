import { useState } from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { ModeToggle } from "./ModeToggle.jsx";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  function handleClick() {
    setToggleMenu(!toggleMenu);
  }
  return (
    <header className="padding-x fixed top-0 z-40 w-full bg-white py-5 shadow-sm dark:bg-slate-950 md:absolute md:bg-transparent md:shadow-none">
      <nav className="max-container flex w-full items-center justify-between">
        <a href="/">
          <img src={headerLogo} width={130} height={29} alt="nike logo" />
        </a>
        <ul className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {navLinks.map(function (item) {
            return (
              <li key={item.label}>
                <a
                  className="font-montserrat text-lg leading-normal text-slate-gray hover:text-slate-950 dark:text-slate-50 dark:hover:opacity-75"
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
            className="font-montserrat text-lg font-medium leading-normal hover:opacity-70 dark:text-slate-50 dark:hover:opacity-75"
            href="#"
          >
            Sign in
          </a>
        </div>
        <div className="flex items-center">
          <ModeToggle />

          <button
            onClick={handleClick}
            id="hamburger-button"
            className={`relative h-8 w-8 cursor-pointer text-3xl md:hidden ${
              toggleMenu ? "toggle-btn" : ""
            }`}
          >
            <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-slate-900 transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-slate-900 before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-slate-900 after:transition-all after:duration-500 after:content-[''] dark:bg-white dark:before:bg-white dark:after:bg-white"></div>
          </button>
        </div>
      </nav>
      <section
        id="mobile-menu"
        onClick={handleClick}
        className={`animate-open-menu absolute left-0 top-[72px] w-full origin-top flex-col justify-center bg-black text-5xl ${
          toggleMenu ? "flex" : "hidden"
        }`}
      >
        <nav
          className="flex min-h-screen flex-col items-center py-8"
          aria-label="mobile"
        >
          <ul className="flex flex-col gap-6">
            {navLinks.map(function (item) {
              return (
                <li
                  key={item.label}
                  className="text-center font-montserrat text-xl leading-normal text-slate-400 hover:opacity-70"
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Nav;
