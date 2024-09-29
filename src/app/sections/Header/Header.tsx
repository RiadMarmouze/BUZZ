// app/components/Header.tsx
import React from "react";

import styles from "./Header.module.css";
import TopNavbar from "@/app/components/TopNavbar/TopNavbar";
import CustomButton from "@/app/components/CustomButton/CustomButton";
import LogoText from "@public/assets/Images/Logo/logo(text).svg";
import LogoIcon from "@public/assets/Images/Logo/logo(icon).svg";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="relative flex items-center gap-4">
            <LogoIcon className="h-16 fill-primary-pink-500" />
            <LogoText className="h-10" />
          </div>

          <TopNavbar />

          {/* Sign In Button */}
          <div className="flex gap-4">
            <CustomButton
              children="LOG IN"
              variant="filled"
              theme="light"
              colorTextLight="text-white"
              colorTextDark="text-white"
              colorTextLightHover="hover:text-gray-200"
              colorTextDarkHover="hover:text-gray-400"
              lightBackgroundColor="bg-primary-pink-500"
              darkBackgroundColor="bg-primary-pink-800"
              lightBackgroundHoverColor="hover:bg-primary-pink-600"
              darkBackgroundHoverColor="hover:bg-primary-pink-900"
              lightBorderColor="border-primary-pink-500"
              darkBorderColor="border-primary-pink-800"
              lightBorderHoverColor="hover:border-primary-pink-600"
              darkBorderHoverColor="hover:border-primary-pink-900"
            />
            <CustomButton
              children="SIGN UP"
              variant="outlined"
              theme="light"
              colorTextLight="text-white"
              colorTextDark="text-white"
              colorTextLightHover="hover:text-gray-200"
              colorTextDarkHover="hover:text-gray-400"
              lightBackgroundColor="bg-primary-pink-500"
              darkBackgroundColor="bg-primary-pink-800"
              lightBackgroundHoverColor="hover:bg-primary-pink-500"
              darkBackgroundHoverColor="hover:bg-primary-pink-900"
              lightBorderColor="border-header-title1-text-light"
              darkBorderColor="border-primary-pink-800"
              lightBorderHoverColor="hover:border-primary-pink-500"
              darkBorderHoverColor="hover:border-primary-pink-900"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
