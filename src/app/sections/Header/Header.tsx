// app/components/Header.tsx
import React from "react";

import styles from "./Header.module.css";
import TopNavbar from "@/app/components/TopNavbar/TopNavbar";
import CustomButton from "@/app/components/CustomButton/CustomButton";
import LogoText from "@public/assets/Images/Logo/logo(text).svg";
import LogoIcon from "@public/assets/Images/Logo/logo(icon).svg";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="mx-auto max-w-7xl border-b border-header-bg-secondary-light px-4 pb-4 pt-14 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}

          <TopNavbar />

          <Link href="/" passHref>
            <div className="relative flex items-center gap-4">
              <LogoIcon className="h-16 fill-header-bg-secondary-light" />
              <LogoText className="h-10 fill-header-bg-secondary-light" />
            </div>
          </Link>

          {/* Sign In Button */}
          <div className="flex gap-4">
            <CustomButton
              text="LOG IN"
              variant="filled"
              theme="light"

              colorTextLight="text-white"
              lightBackgroundColor="bg-primary-pink-500"
              lightBorderHoverColor="hover:border-primary-pink-600"


              colorTextLightHover="hover:text-gray-200"
              lightBackgroundHoverColor="hover:bg-primary-pink-600"
              lightBorderColor="border-primary-pink-500"


              colorTextDark="text-white"
              darkBackgroundColor="bg-primary-pink-800"
              darkBorderColor="border-primary-pink-800"

              
              colorTextDarkHover="hover:text-gray-400"
              darkBackgroundHoverColor="hover:bg-primary-pink-900"
              darkBorderHoverColor="hover:border-primary-pink-900"

            />
            <CustomButton
              text="SIGN UP"
              variant="filled"
              theme="light"
              
              colorTextLight="text-header-bg-primary-light"
              lightBackgroundColor="bg-header-bg-secondary-light"
              lightBorderColor="border-header-title1-text-light"

              
              colorTextLightHover="hover:text-primary-pink-700"
              lightBackgroundHoverColor="hover:bg-primary-pink-100"
              lightBorderHoverColor="hover:border-primary-pink-500"


              colorTextDark="text-white"
              darkBackgroundColor="bg-primary-pink-800"
              darkBorderColor="border-primary-pink-800"
              
              colorTextDarkHover="hover:text-gray-400"
              darkBackgroundHoverColor="hover:bg-primary-pink-900"
              darkBorderHoverColor="hover:border-primary-pink-900"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
