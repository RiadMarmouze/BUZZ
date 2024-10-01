"use client";
import React, { useState } from "react";
import Image from "next/image"; // Adjust based on your setup
import { FAQ } from "@/app/interfaces";

interface FAQItemProps {
  item: FAQ;
}

const FAQItem: React.FC<FAQItemProps> = ({ item }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <div className="shadow-lg  border border-gray-100 hover:shadow-inner-custom hover:border-gray-200 flex flex-col gap-8 pt-10 pb-10 px-10">
      <h2 className="text-xl font-semibold">{item.question}</h2>
      {item.answer ? (
        <div className="flex flex-row items-start gap-4">
          <div className="relative flex-shrink-0 rounded-full overflow-clip  w-12 h-12">
            <Image
              src={item.answer.profilePic}
              alt={`profile image`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 96px"
            />
          </div>
          <div className="flex flex-grow relative items-start flex-col">
            <p className="text-xl font-semibold ">{item.answer.text}</p>

            <div className="flex flex-col">
              <p
                className={`text-lg ${
                  showDetails ? "line-clamp-none" : "line-clamp-1"
                }`}
              >
                {item.answer.details}
              </p>
              <div className="flex justify-end mt-2">
                <button
                  className="text-primary-pink-500 text-sm"
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

export default FAQItem;
