// app/components/Header.tsx
import React from "react";
import TopNavbar from "@/app/components/TopNavbar/TopNavbar";
import CustomButton from "@/app/components/CustomButton/CustomButton";
import LogoText from "@public/assets/Images/Logo/logo(text).svg";
import LogoIcon from "@public/assets/Images/Logo/logo(icon).svg";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="flex justify-center px-10 pt-5 lg:pt-14">
      <Link href="/" passHref className="absolute hidden lg:block">
        <div className="flex items-center gap-4">
          <LogoIcon className="h-16 fill-header-bg-secondary-light" />
          <LogoText className="h-12 fill-header-bg-secondary-light" />
        </div>
      </Link>
      <div className="flex w-full flex-col-reverse items-center justify-between lg:flex-row lg:border-b lg:border-header-bg-secondary-light lg:pb-5">
        {/* Logo */}

        <TopNavbar />

        <Link href="/" passHref className="block lg:hidden">
          <div className="flex items-center gap-4">
            <LogoIcon className="h-12 fill-header-bg-secondary-light" />
            <LogoText className="h-8 fill-header-bg-secondary-light" />
          </div>
        </Link>

        {/* Sign In Button */}
        <div className="hidden lg:flex lg:gap-4">
          <CustomButton
            text="LOG IN"
            variant="filled"
            theme="light"
            raduis="rounded-md lg:rounded-2xl"
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
            raduis="rounded-md lg:rounded-2xl"
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
  );
};

export default Header;
