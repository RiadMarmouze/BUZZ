// import Image from "next/image";
import MockUp1 from "@public/assets/Images/Common/mock-up1.svg";
import MockUp2 from "@public/assets/Images/Common/mock-up2.svg";
import MockUp3 from "@public/assets/Images/Common/mock-up3.svg";

export default function Home() {
  return (
    <div className="relative flex flex-col gap-10">
      <div className="absolute top-0 h-[80dvh] w-full bg-primary-pink-500"></div>
      <div className="z-10 mx-auto flex max-w-7xl flex-col gap-10 pt-14">
        <h1 className="text-center text-[82px] font-[600] leading-none text-body-bg-primary-light">
          The Future of Online
          <br />
          Services in Algeria.
        </h1>

        <h2 className="text-center text-xl font-thin text-body-bg-primary-light">
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
        {/* <Image
          src="/assets/Images/Common/mock-up1.png" // Place your SVG file in the public folder
          alt="Mock up"
          width={200}
          height={200}
        />
        <Image
          src="/assets/Images/Common/mock-up2.png" // Place your SVG file in the public folder
          alt="Mock up"
          width={200}
          height={200}
        />
        <Image
          src="/assets/Images/Common/mock-up3.png" // Place your SVG file in the public folder
          alt="Mock up"
          width={200}
          height={200}
        /> */}
      </div>
    </div>
  );
}
