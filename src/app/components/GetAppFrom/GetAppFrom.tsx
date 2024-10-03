import Link from "next/link";
import React from "react";

import AppleAppStore from "@public/assets/Images/Common/apple-app-store.svg";
import GooglePlayStore from "@public/assets/Images/Common/google-play-store.svg";

export default function GetAppFrom() {
  return (
    <div className="flex w-fit flex-row gap-8">
      <Link
        href={"https://play.google.com/store/"}
        passHref
        className="flex flex-1 items-center gap-4 rounded-xl border-2 border-gray-500 bg-black px-5 py-3 hover:border-gray-600 hover:bg-gray-900"
      >
        <GooglePlayStore className="h-12" />
        <div className="flex flex-col text-body-bg-primary-light">
          <span className="text-base font-thin leading-tight">GET IT ON</span>
          <span className="text-nowrap text-2xl font-semibold leading-tight">
            Google Play
          </span>
        </div>
      </Link>
      <Link
        href={"https://www.apple.com/app-store/"}
        passHref
        className="flex flex-1 flex-row items-center gap-4 rounded-xl border-2 border-gray-500 bg-black px-5 py-3 hover:border-gray-600 hover:bg-gray-900"
      >
        <AppleAppStore className="h-12" />
        <div className="flex flex-col text-body-bg-primary-light">
          <span className="text-base font-thin leading-tight">GET IT ON</span>
          <span className="text-nowrap text-2xl font-semibold leading-tight">
            App Store
          </span>
        </div>
      </Link>
    </div>
  );
}
