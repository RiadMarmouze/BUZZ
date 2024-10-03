"use client";
import React from "react";
import styles from "./TopNavbar.module.css";
import { NavItem, navItems } from "./TopNavbarData";
import { usePathname } from "next/navigation";

const isActiveLink = (currentPath: string, linkPath: string) => {
  return currentPath === linkPath;
};

const TopNavbar: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav className={`${styles.navbar}`}>
      <ul className="flex justify-center space-x-8">
        {navItems.map((item) => (
          <NavItemLink
            key={item.href}
            item={item}
            isActive={isActiveLink(pathname, item.href)}
          />
        ))}
      </ul>
    </nav>
  );
};

// Separate component for each navigation link
const NavItemLink: React.FC<{ item: NavItem; isActive: boolean }> = ({
  item,
  isActive,
}) => {
  return (
    <li>
      <a
        href={item.href}
        className={`${styles.link} scroll-link ${
          isActive ? styles.activeLink : ""
        }`}
      >
        {item.title}
      </a>
    </li>
  );
};

export default TopNavbar;
