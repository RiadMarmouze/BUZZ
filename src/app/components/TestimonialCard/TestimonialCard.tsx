"use client";
import React, { useState } from "react";
import Image from "next/image"; // Adjust based on your setup
import { Testimonial } from "@/app/interfaces";

interface TestimonialItemProps {
  testimonialData: Testimonial;
}

const TestimonialCard: React.FC<TestimonialItemProps> = ({
  testimonialData,
}) => {
  const { id, content, imageUrl, name, role } = testimonialData;

  return (
    <div className="card-shadow-drop-down-effect flex flex-col gap-8 px-10 pb-10 pt-10">
      <p className="flex-grow text-xl">{content}</p>
      <div className="flex flex-row items-center gap-4">
        <div className="relative h-12 w-12 overflow-clip rounded-full">
          <Image
            src={imageUrl}
            alt={`${name} image`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 96px"
          />
        </div>
        <div>
          <h2 className="font-bold leading-tight">{name}</h2>
          <h3 className="text-sm leading-tight">{role}</h3>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
