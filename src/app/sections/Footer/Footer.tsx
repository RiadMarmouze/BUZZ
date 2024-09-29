// app/components/Footer.tsx
import React from "react";
import { footerLinks } from "./FooterData";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={`bg-gray-800 text-white ${styles.footer}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 text-center">
        {footerLinks.map((link) => (
          <a key={link.path} href={link.path} className={styles.footerLink}>
            {link.text}
          </a>
        ))}
        <div className="mt-2">
          <p>© 2024 MyApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
