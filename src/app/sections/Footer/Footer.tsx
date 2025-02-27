// app/components/Footer.tsx
import React from "react";
import { aboutLinks, helpLinks, mainLinks, paymentMethods } from "./FooterData";
import styles from "./Footer.module.css";

import Link from "next/link";
import LogoText from "@public/assets/Images/Logo/logo(text).svg";
import LogoIcon from "@public/assets/Images/Logo/logo(icon).svg";
import Facebook from "@public/assets/Icons/Media/facebook.svg";
import Instagram from "@public/assets/Icons/Media/instagram.svg";
import X from "@public/assets/Icons/Media/x.svg";
import LinkedIn from "@public/assets/Icons/Media/linkedin.svg";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-5 p-10">
        <Link href="/" passHref>
          <div className="relative flex items-center gap-4">
            <LogoIcon className="h-16 fill-header-bg-secondary-light" />
            <LogoText className="h-10 fill-header-bg-secondary-light" />
          </div>
        </Link>
        <div className="grid grid-cols-2 gap-10 lg:flex lg:flex-row lg:justify-between lg:gap-0">
          {/* Main Links Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase lg:text-base">{mainLinks.title}</h3>
            <ul className="flex flex-col gap-2">
              {mainLinks.links.map((link, linkIdx) => (
                <li key={linkIdx} className={`${styles.footerLink}`}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links Section */}
          <div className="flex flex-col gap-4 lg:border-l lg:border-footer-bg-secondary-light lg:pl-4">
            <h3 className="text-sm font-bold uppercase lg:text-base">{aboutLinks.title}</h3>
            <ul className="flex flex-col gap-2">
              {aboutLinks.links.map((link, linkIdx) => (
                <li key={linkIdx} className={`${styles.footerLink}`}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links Section */}
          <div className="flex flex-col gap-4 lg:border-l lg:border-footer-bg-secondary-light lg:pl-4">
            <h3 className="text-sm font-bold uppercase lg:text-base">{helpLinks.title}</h3>
            <ul className="flex flex-col gap-2">
              {helpLinks.links.map((link, linkIdx) => (
                <li key={linkIdx} className={`${styles.footerLink}`}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Section */}
          <div className="flex flex-col gap-4 lg:border-l lg:border-footer-bg-secondary-light lg:pl-4">
            <h3 className="text-sm font-bold uppercase lg:text-base">Social</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li key={1}>
                <Link
                  href="https://www.facebook.com/share/ZjsHnDd8kC6fD99v/?mibextid=qi2Omg"
                  passHref
                >
                  <Facebook className="w-10 fill-white hover:fill-primary-pink-100" />
                </Link>
              </li>
              <li key={2}>
                <Link href="https://www.instagram.com/buzz.apex/" passHref>
                  <Instagram className="w-10 fill-white hover:fill-primary-pink-100" />
                </Link>
              </li>
              <li key={3}>
                <Link href="/" passHref>
                  <X className="w-10 fill-white hover:fill-primary-pink-100" />
                </Link>
              </li>
              <li key={4}>
                <Link
                  href="https://www.linkedin.com/company/buzz-by-apex/"
                  passHref
                >
                  <LinkedIn className="w-10 fill-white hover:fill-primary-pink-100" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 flex flex-row gap-10 lg:flex-col lg:gap-4 lg:border-l lg:border-footer-bg-secondary-light lg:pl-4">
            <div className="flex flex-1 flex-col gap-4">
              <h3 className="text-sm font-bold uppercase lg:text-base">Phone:</h3>
              <div className="flex flex-col gap-2">
                <p className={`${styles.footerLink}`}>+213 777 58 59 66</p>
                <p className={`${styles.footerLink}`}>+213 777 58 59 66</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <h3 className="font-bold uppercase">Address: </h3>
              <p className={`${styles.footerLink}`}>
                123 Rue Didouche Mourad, Alger Centre, Alger.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse items-center gap-5 bg-footer-bg-secondary-light py-8 text-footer-title1-text-dark lg:flex-row lg:justify-evenly lg:gap-0">
        <div className="flex flex-row">
          <p className="text-sm lg:text-base">© apex.tech2024</p>
        </div>

        <div className="grid grid-cols-3 justify-center gap-4 lg:flex lg:flex-row">
          {paymentMethods.map((method, methodIdx) => (
            <div
              key={methodIdx}
              className="h-8 w-12 rounded-md bg-primary-pink-200 hover:bg-primary-pink-300"
            ></div>
            // <img key={methodIdx} src={method.icon} alt={method.name} />
          ))}
        </div>
        <div className="flex flex-row gap-4 text-sm lg:text-base">
          <a href={"/terms"}>Terms & Conditions</a>
          <a href={"/privacy"}>Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
