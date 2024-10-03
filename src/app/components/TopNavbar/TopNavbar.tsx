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
      <ul className="mt-5 flex justify-center space-x-8 border-t border-header-bg-secondary-light pt-2 lg:mt-0 lg:border-none lg:pt-0">
        {navItems.map((item) => (
          <div key={item.href} className="felx flex-col">
            <NavItemLink
              
              item={item}
              isActive={isActiveLink(pathname, item.href)}
            />
          </div>
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
      <a href={item.href} className={`${styles.link} scroll-link `}>
        {item.title}
      </a>
    </li>
  );
};

export default TopNavbar;
