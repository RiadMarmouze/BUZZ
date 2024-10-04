import React from "react";
import styles from "./TopNavbar.module.css";
import { NavItem, navItems } from "./TopNavbarData";

const TopNavbar: React.FC = () => {
  return (
    <nav className={`${styles.navbar}`}>
      <ul className="mt-5 flex w-full justify-between gap-0 border-t border-header-bg-secondary-light pt-2 lg:mt-0 lg:gap-10 lg:border-none lg:pt-0">
        {navItems.map((item) => (
          <li key={item.href} >
            <NavItemLink item={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Separate component for each navigation link
const NavItemLink: React.FC<{ item: NavItem }> = ({ item }) => {
  return (
    <a href={item.href} className={`${styles.link} scroll-link leading-none text-nowrap`}>
      {item.title}
    </a>
  );
};

export default TopNavbar;
