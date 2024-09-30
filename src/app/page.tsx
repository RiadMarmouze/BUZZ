// import Image from "next/image";
import MockUp1 from "@public/assets/Images/Common/mock-up1.svg";
import MockUp2 from "@public/assets/Images/Common/mock-up2.svg";
import MockUp3 from "@public/assets/Images/Common/mock-up3.svg";
import Facebook from "@public/assets/Images/Common/Media/facebook.svg";
import Instagram from "@public/assets/Images/Common/Media/instagram.svg";
import X from "@public/assets/Images/Common/Media/x.svg";
import LinkedIn from "@public/assets/Images/Common/Media/linkedin.svg";

import AppleAppStore from "@public/assets/Images/Common/apple-app-store.svg";
import GooglePlayStore from "@public/assets/Images/Common/google-play-store.svg";
import Link from "next/link";
import CustomButton from "./components/CustomButton/CustomButton";

export default function Home() {
  return (
    <div className="relative flex flex-col gap-10">
      <div className="absolute top-0 h-[80dvh] w-full bg-primary-pink-500">
        <div className="absolute bottom-0 z-20 flex flex-col gap-5 p-10">
          <Link href="/" passHref>
            <Facebook className="fill-white hover:fill-primary-pink-100" />
          </Link>
          <Link href="/" passHref>
            <Instagram className="fill-white hover:fill-primary-pink-100" />
          </Link>
          <Link href="/" passHref>
            <X className="fill-white hover:fill-primary-pink-100" />
          </Link>
          <Link href="/" passHref>
            <LinkedIn className="fill-white hover:fill-primary-pink-100" />
          </Link>
        </div>
      </div>

      <div className="z-10 mx-auto flex max-w-7xl flex-col gap-10 pt-14 text-body-bg-primary-light">
        <h1 className="text-center text-[82px] font-[600] leading-none">
          The Future of Online
          <br />
          Services in Algeria.
        </h1>

        <h2 className="text-center text-xl font-thin">
          First remote digital services provider in Algeria, with
          <br />
          <span className="font-semibold">top 10%</span> of digital services
          providers all in <span className="font-semibold">one place.</span>
        </h2>
      </div>
      <div className="z-10 flex w-full items-center justify-center gap-16">
        <MockUp1 className="hidden lg:block" />
        <MockUp2 className="block" />
        <MockUp3 className="hidden lg:block" />
      </div>

      <div className="mx-auto flex flex-row gap-8">
        <Link
          href={"https://play.google.com/store/"}
          passHref
          className="flex w-60 flex-row items-center gap-4 rounded-xl border-2 border-gray-500 bg-black px-5 py-3 hover:border-gray-600 hover:bg-gray-900"
        >
          <GooglePlayStore className="h-12" />
          <div className="flex flex-col text-body-bg-primary-light">
            <span className="text-base font-thin leading-tight">GET IT ON</span>
            <span className="text-2xl font-[600] leading-tight">
              Google Play
            </span>
          </div>
        </Link>
        <Link
          href={"https://www.apple.com/app-store/"}
          passHref
          className="flex w-60 flex-grow flex-row items-center gap-4 rounded-xl border-2 border-gray-500 bg-black px-5 py-3 hover:border-gray-600 hover:bg-gray-900"
        >
          <AppleAppStore className="h-12" />
          <div className="flex flex-col text-body-bg-primary-light">
            <span className="text-base font-thin leading-tight">GET IT ON</span>
            <span className="text-2xl font-[600] leading-tight">App Store</span>
          </div>
        </Link>
      </div>
      <h1 className="text-center text-[64px] font-[600] leading-none">
        ABOUT US
      </h1>
      <div className="mx-auto flex max-w-7xl flex-grow flex-row justify-center gap-32">
        <MockUp1 />
        <div className="flex w-[40%] flex-col justify-evenly">
          <h2 className="text-[36px] font-semibold">
            Digital Services provider
          </h2>
          <div className="flex flex-col gap-5 text-xl">
            <p>
              <span className="font-semibold">Buzz</span> is a service based{" "}
              <span className="font-semibold">app</span>, that provide digital
              and non digital services that usually require displacement which
              consumes a lot of{" "}
              <span className="font-semibold">time and effort</span>.
              <br />
            </p>
            <p>
              Using <span className="font-normal">Buzz</span> enables you to
              accomplish your digital needs from the comfort of your home.
              <br />
            </p>
            <p>
              Our staff wil ensure the task to be done and the goods to be
              delivered if need be.
            </p>
          </div>

          <Link href={"/"} passHref>
            <CustomButton
              text="Learn more"
              variant="filled"
              padding="px-4 py-2"
              fontWeight="font-normal"
              textSize="text-base"
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
          </Link>
        </div>
      </div>
    </div>
  );
}
