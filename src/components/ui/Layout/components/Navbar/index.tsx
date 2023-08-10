import { useState } from "react";
import styles from './styles.module.css';
import { useMediaQuery } from 'react-responsive';

import close from '../../../../../assets/close-outline.svg';
import { navLinks } from '../../../../../constants';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={styles.navbar}>
      {isTabletOrMobile ? (
      <ul className={styles.routesList}>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>) : (
        <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={close}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      )}
    </nav>
  );
};

export default Navbar;