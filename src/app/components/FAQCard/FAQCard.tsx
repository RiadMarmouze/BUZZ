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
    <div className="card-shadow-drop-down-effect flex flex-col gap-8 px-10 pb-10 pt-10">
      <h2 className="text-xl font-semibold">{faqData.question}</h2>
      {faqData.answer ? (
        <div className="flex flex-row items-start gap-4">
          <div className="relative h-12 w-12 flex-shrink-0 overflow-clip rounded-full">
            <Image
              src={faqData.answer.profilePic}
              alt={`profile image`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 96px"
            />
          </div>
          <div className="relative flex flex-grow flex-col items-start">
            <p className="text-xl font-semibold">{faqData.answer.text}</p>

            <div className="flex flex-col">
              <p
                className={`text-lg ${
                  showDetails ? "line-clamp-none" : "line-clamp-1"
                }`}
              >
                {faqData.answer.details}
              </p>
              <div className="mt-2 flex justify-end">
                <button
                  className="text-sm text-primary-pink-500"
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
