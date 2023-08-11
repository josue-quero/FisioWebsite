import { useState } from "react";
import styles from './styles.module.css';
import { useMediaQuery } from 'react-responsive';

import close from '../../../../../assets/close-outline.svg';
import menu from '../../../../../assets/menu-outline.svg';
import { navLinks } from '../../../../../constants';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={styles.navbar}>
      {isTabletOrMobile ? (
        <ul className={styles.routesList}>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${styles.routeLink} ${active === nav.title ? styles.activeLink : styles.unactiveLink}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>) : (
        <div className={styles.collapsedContainer}>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className={styles.burguerIcon}
            onClick={() => setToggle(!toggle)}
          />
          {!toggle && (
            <div
            className={styles.collapsedListContainer}
          >
            <ul className={styles.collapsedList}>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${styles.routeLink} ${active === nav.title ? styles.activeLink : styles.unactiveLink}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;