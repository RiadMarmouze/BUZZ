import MockUp1 from "@public/assets/Images/Common/mock-up1.svg";
import MockUp2 from "@public/assets/Images/Common/mock-up2.svg";
import MockUp3 from "@public/assets/Images/Common/mock-up3.svg";
import MockUp4 from "@public/assets/Images/Common/mock-up4.svg";
import Facebook from "@public/assets/Icons/Media/facebook.svg";
import Instagram from "@public/assets/Icons/Media/instagram.svg";
import X from "@public/assets/Icons/Media/x.svg";
import LinkedIn from "@public/assets/Icons/Media/linkedin.svg";
import IconEnvelope from "@public/assets/Icons/Common/Icon-Envelope.svg";

import Link from "next/link";
import CustomButton from "./components/CustomButton/CustomButton";
import { FAQ, Testimonial } from "./interfaces";
import GetAppFrom from "./components/GetAppFrom/GetAppFrom";
import FAQCard from "./components/FAQCard/FAQCard";
import TestimonialCard from "./components/TestimonialCard/TestimonialCard";
export default function Home() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content:
        "This app is a game-changer! I booked a cleaning service for my apartment, and the process was seamless. The cleaners arrived on time and did a fantastic job. Highly recommend!",
      imageUrl: "/assets/Images/Testimonials/Pic1.jpg",
      name: "Oussama Aba",
      role: "Business owner",
    },
    {
      id: 2,
      content:
        "I used this app to schedule car maintenance, and I couldn't be happier with the service. The mechanic was professional, and my car has never run better. I’ll definitely be using this app again!",
      imageUrl: "/assets/Images/Testimonials/Pic2.jpg",
      name: "John Carter",
      role: "Business owner",
    },
    {
      id: 3,
      content:
        "I hired an event planner through the app for my birthday party, and they exceeded all my expectations! Everything was perfectly organized, and the whole experience was stress-free.",
      imageUrl: "/assets/Images/Testimonials/Pic3.jpg",
      name: "Sarah Thompson",
      role: "Business owner",
    },
    {
      id: 4,
      content:
        "I scheduled a grooming appointment for my dog using the app, and the experience was fantastic. The groomer was friendly, and my dog looks better than ever! Such a convenient service.",
      imageUrl: "/assets/Images/Testimonials/Pic4.jpg",
      name: "David Kim",
      role: "Business owner",
    },
  ];

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "How do I book a service through the app?",
    },
    {
      id: 2,
      question: "Can I change or cancel my booking after it's been made?",
      answer: {
        profilePic: "/assets/Images/FAQ/Pic1.jpg",
        text: "Yes, you can cancel or reschedule your booking without any hassle",
        details:
          "As long as it’s done up to 24 hours before the scheduled service time. To make changes, simply log in to your account, navigate to the “My Bookings” section in the app, and select the specific booking you’d like to modify. From there, you’ll have the option to either reschedule for a new time or cancel the service entirely. If you need further assistance, our customer support team is available to help guide you through the process.",
      },
    },
    {
      id: 3,
      question: "What payment methods do you accept?",
    },
    {
      id: 4,
      question: "Are the professionals on your platform verified?",
    },
  ];

  return (
    <div className="relative flex w-full flex-col items-center gap-20 overflow-hidden py-20">
      <div className="absolute top-0 h-[800px] w-full bg-primary-pink-500">
        <div className="absolute bottom-0 z-20 flex flex-col gap-5 p-10">
          <Link
            href="https://www.facebook.com/share/ZjsHnDd8kC6fD99v/?mibextid=qi2Omg"
            passHref
          >
            <Facebook className="fill-white hover:fill-primary-pink-100" />
          </Link>
          <Link href="https://www.instagram.com/buzz.apex/" passHref>
            <Instagram className="fill-white hover:fill-primary-pink-100" />
          </Link>
          <Link href="/" passHref>
            <X className="fill-white hover:fill-primary-pink-100" />
          </Link>
          <Link href="https://www.linkedin.com/company/buzz-by-apex/" passHref>
            <LinkedIn className="fill-white hover:fill-primary-pink-100" />
          </Link>
        </div>
      </div>

      <section
        id="home"
        className="z-10 flex flex-col items-center gap-10 text-body-bg-primary-light"
      >
        <h1 className="text-hero">
          The Future of Online
          <br />
          Services in Algeria.
        </h1>

        <h2 className="text-description">
          First remote digital services provider in Algeria, with
          <br />
          <span className="font-semibold">top 10%</span> of digital services
          providers all in <span className="font-semibold">one place.</span>
        </h2>

        <div className="z-10 flex w-full flex-row items-center justify-center gap-16">
          <MockUp1 className="hidden lg:block" />
          <MockUp2 className="block" />
          <MockUp3 className="hidden lg:block" />
        </div>

        <GetAppFrom />
      </section>

      <h1 id="about" className="text-section-title">
        ABOUT US
      </h1>
      <section className="px-[15%]">
        <div className="flex flex-row justify-center">
          <div className="flex flex-shrink-0 flex-grow flex-row justify-end pr-60">
            <MockUp1 />
          </div>
          <div className="flex w-[50%] flex-col justify-evenly">
            <h2 className="text-4xl font-semibold">
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
      </section>

      <div
        id="testimonials"
        className="relative flex w-full flex-col justify-center gap-6"
      >
        <span className="shape-decoration-round-left" />
        <h1 className="text-section-title">TESTIMONIALS</h1>
        <h2 className="text-description">
          Using <span className="font-semibold">Buzz</span> enables you to
          accomplish your digital needs from <br /> the comfort of your home.
        </h2>
      </div>

      <section className="px-[15%]">
        <div className="grid grid-cols-2 gap-20">
          {testimonials.map((testimonialData) => (
            <TestimonialCard
              key={testimonialData.id}
              testimonialData={testimonialData}
            />
          ))}
        </div>
      </section>

      <h1 id="faq" className="text-section-title">
        FAQ’s
      </h1>

      <section className="relative flex flex-col gap-10 px-[25%]">
        {faqs.map((faqData) => (
          <FAQCard key={faqData.id} faqData={faqData} />
        ))}
        <span className="shape-decoration-round-bottom-right" />
      </section>

      <section className="px-[20%]">
        <div className="flex flex-row">
          <div className="flex w-[50%] flex-col justify-evenly">
            <h2 className="text-6xl font-semibold leading-none">
              Download <br /> the app
            </h2>
            <p className="text-xl">
              Our app is available both on the play store and the app store,
              latest update is here.
            </p>

            <GetAppFrom />
          </div>
          <div className="flex flex-shrink-0 flex-grow flex-row justify-end">
            <MockUp4 />
          </div>
        </div>
      </section>

      <section id="contact" className="px-[20%]">
        <div className="flex flex-col gap-8 rounded-2xl bg-primary-pink-500 px-20 py-10 text-white">
          <h2 className="text-4xl font-bold">
            Subscribe to our newsletter to get updated
          </h2>
          <p className="text-xl">
            We write weekly personalized newsletters in which we share our
            updates and the lessons we learned from making and maitaining our
            app.
          </p>
          <div className="flex flex-row justify-between gap-8">
            <div className="relative flex-grow">
              <div className="flex h-full flex-row items-center gap-6 rounded-lg border-2 border-white bg-primary-pink-500 p-4 focus-within:border-primary-pink-100 focus-within:ring-1 focus-within:ring-primary-pink-100">
                <IconEnvelope className="w-8 fill-white" />
                <input
                  type="email"
                  id="email"
                  className="h-full flex-grow rounded-r-lg bg-transparent pb-1 placeholder-white focus:outline-none"
                  placeholder="Your email address"
                  required
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                />
              </div>
            </div>

            <CustomButton
              text="Get Started"
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
      </section>
    </div>
  );
}
