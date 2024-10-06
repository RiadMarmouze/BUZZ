"use client";
import { saveEmail, checkIfEmailExists } from "@/app/api/firebase/newsletter";
import CustomButton from "@/app/components/CustomButton/CustomButton";

import IconEnvelope from "@public/assets/Icons/Common/Icon-Envelope.svg";
import { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError(null);
    setSuccess(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const emailExists = await checkIfEmailExists(email);

      if (emailExists) {
        setError("Email is already subscribed.");
      } else {
        await saveEmail(email);
        setSuccess("You have been subscribed to the newsletter successfully!");
        setEmail(""); // Clear the input after success
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Basic email validation
  const validateEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full"
    >
      <div className="relative flex flex-grow flex-col gap-4 lg:flex-row lg:gap-8">
        <div className="flex flex-grow flex-col">
          <div className="flex h-full flex-grow flex-row items-center rounded-lg border-2 border-white bg-primary-pink-500 focus-within:border-primary-pink-100 focus-within:ring-1 focus-within:ring-primary-pink-100">
            <div className="p-3 lg:p-4">
              <IconEnvelope className="w-6 fill-white lg:w-8" />
            </div>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="h-full flex-grow rounded-r-lg bg-transparent text-xs placeholder-white focus:outline-none lg:text-base"
              placeholder="Your email address"
              required
            />
          </div>
          {error && (
            <p className="absolute top-full mt-2 w-full text-center text-xs text-white lg:text-start lg:text-base">
              {error}
            </p>
          )}
          {success && (
            <p className="absolute top-full mt-2 w-full text-center text-xs text-white lg:text-start lg:text-base">
              {success}
            </p>
          )}
        </div>
        <CustomButton
          text="Get Started"
          variant="filled"
          theme="light"
          padding="px-10 py-3 lg:py-4"
          raduis="rounded-md lg:rounded-xl"
          textSize="text-sm lg:text-base"
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
          disabled={loading}
        />
      </div>
    </form>
  );
};

export default NewsletterForm;
