import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png"; // Aktualisierte Logo-Datei
import { navItems } from "../constants";

const Navbar = ({ toggleTheme, theme }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className={`sticky top-0 z-50 py-3 bg-transparent backdrop-blur-md ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center relative">
          <div className="relative flex items-center flex-shrink-0 space-x-2">
            <img
              className={`h-10 w-10 animate-move-and-return ${theme === 'dark' ? 'text-white' : 'text-black'}`}
              src={logo}
              alt="Logo"
            />
            <img
              className={`h-10 w-10 animate-flip-and-spin ${theme === 'dark' ? 'text-white' : 'text-black'}`}
              src={logo2}
              alt="Logo 2"
            />
            <span className={`text-xl tracking-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Software-Tool
            </span>
          </div>
          <ul className={`hidden lg:flex ml-14 space-x-12 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:text-lilac-dark transition">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex space-x-4">
            <button className="button bg-lilac-dark text-white px-4 py-2 rounded-lg hover:bg-lilac-light hover:shadow-lg transition ease-in-out duration-200">
              Registrieren
            </button>
            <button className="button bg-transparent border border-lilac-dark text-lilac-dark px-4 py-2 rounded-lg hover:bg-lilac-dark hover:text-white hover:shadow-lg transition ease-in-out duration-200">
              Konto erstellen
            </button>
            <button onClick={toggleTheme} className="ml-4 focus:outline-none text-lilac-dark hover:text-lilac-light transition ease-in-out duration-200">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleNavbar} className="focus:outline-none text-lilac-dark">
              {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        <div className={`${mobileDrawerOpen ? "block" : "hidden"} lg:hidden mt-4`}>
          <ul className={`space-y-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:text-lilac-dark transition">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button className="button bg-lilac-dark text-white w-full py-2 rounded-lg hover:bg-lilac-light hover:shadow-lg transition ease-in-out duration-200">
                Registrieren
              </button>
            </li>
            <li>
              <button className="button bg-transparent border border-lilac-dark text-lilac-dark w-full py-2 rounded-lg hover:bg-lilac-dark hover:text-white hover:shadow-lg transition ease-in-out duration-200">
                Konto erstellen
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
