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
    <div className="card-shadow-drop-down-effect flex h-full flex-col gap-8 bg-body-bg-primary-light px-10 pb-10 pt-10">
      <p className="flex-grow text-sm lg:text-xl">{content}</p>
      <div className="flex flex-row items-center gap-4">
        <div className="relative h-8 w-8 overflow-clip rounded-full lg:h-12 lg:w-12">
          <Image
            src={imageUrl}
            alt={`${name} image`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 96px"
          />
        </div>
        <div>
          <h2 className="text-xs font-bold leading-tight lg:text-base">{name}</h2>
          <h3 className="text-[10px] leading-tight lg:text-sm">{role}</h3>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
