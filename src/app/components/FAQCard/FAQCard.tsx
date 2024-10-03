"use client";
import React, { useState } from "react";
import Image from "next/image"; // Adjust based on your setup
import { FAQ } from "@/app/interfaces";

interface FAQCardProps {
  faqData: FAQ;
}

const FAQCard: React.FC<FAQCardProps> = ({ faqData }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <div className="card-shadow-drop-down-effect flex flex-col gap-8 bg-body-bg-primary-light px-5 pb-5 pt-5 lg:px-10 lg:pb-10 lg:pt-10">
      <h2 className="text-sm font-semibold lg:text-2xl">{faqData.question}</h2>
      {faqData.answer ? (
        <div className="flex flex-row items-start gap-4">
          <div className="relative h-8 w-8 flex-shrink-0 overflow-clip rounded-full lg:h-12 lg:w-12">
            <Image
              src={faqData.answer.profilePic}
              alt={`profile image`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 96px"
            />
          </div>
          <div className="relative flex flex-grow flex-col items-start">
            <p className="text-sm font-semibold lg:text-xl">
              {faqData.answer.text}
            </p>

            <div className="flex flex-col">
              <p
                className={`text-xs  lg:text-xl ${
                  showDetails ? "line-clamp-none" : "line-clamp-1"
                }`}
              >
                {faqData.answer.details}
              </p>
              <div className="mt-2 flex justify-end">
                <button
                  className="text-[10px] text-primary-pink-500 lg:text-sm"
                  onClick={toggleDetails}
                >
                  {showDetails ? "Less" : "More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FAQCard;
