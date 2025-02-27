import Link from "next/link";
import React from "react";

import AppleAppStore from "@public/assets/Images/Common/apple-app-store.svg";
import GooglePlayStore from "@public/assets/Images/Common/google-play-store.svg";

export default function GetAppFrom() {
  return (
    <>
      <Link
        href={"https://play.google.com/store/"}
        passHref
        className="flex w-full flex-1 items-center gap-2 rounded-md border border-gray-500 bg-black px-3 py-2 hover:border-gray-600 hover:bg-gray-900 lg:w-[300px] lg:gap-4 lg:rounded-xl lg:border-2 lg:px-5 lg:py-3"
      >
        <GooglePlayStore className="h-6 lg:h-12" />
        <div className="flex flex-col text-body-bg-primary-light">
          <span className="text-[10px] font-light leading-tight lg:text-base">
            GET IT ON
          </span>
          <span className="text-nowrap text-xs font-semibold leading-tight lg:text-2xl">
            Google Play
          </span>
        </div>
      </Link>
      <Link
        href={"https://www.apple.com/app-store/"}
        passHref
        className="flex w-full flex-1 items-center gap-2 rounded-md border border-gray-500 bg-black px-3 py-2 hover:border-gray-600 hover:bg-gray-900 lg:w-[300px] lg:gap-4 lg:rounded-xl lg:border-2 lg:px-5 lg:py-3"
      >
        <AppleAppStore className="h-6 lg:h-12" />
        <div className="flex flex-col text-body-bg-primary-light">
          <span className="text-[10px] font-light leading-tight lg:text-base">
            GET IT ON
          </span>
          <span className="text-nowrap text-xs font-semibold leading-tight lg:text-2xl">
            App Store
          </span>
        </div>
      </Link>
    </>
  );
}
