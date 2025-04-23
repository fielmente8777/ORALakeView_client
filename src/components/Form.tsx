"use client";

import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { countries } from "@/data/countryCode";

const Form = () => {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91"); // Default country code
  const [formRes, setFormRes] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length <= 10) {
      setUserPhone(value);
      setErrorMessage(value.length < 10 ? "Please enter a valid number" : "");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserEmail(value);
    setEmailErrorMessage(
      !emailRegex.test(value) ? "Please enter a valid email address" : ""
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormRes(true);

    if (userPhone.length !== 10) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      return;
    }

    if (!emailRegex.test(userEmail)) {
      setEmailErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          // Domain: 'abhijeet',
          Domain: "sumitTest", // Replace with your actual domain value
          email: userEmail,
          Name: userName,
          Contact: `${countryCode} ${userPhone}`, // Combine country code and phone number
          Description: userMessage,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.Status) {
        setFormRes(true);
        setUserName("");
        setUserEmail("");
        setUserMessage("");
        setUserPhone("");
        setCountryCode("+91"); // Reset country code
        setFormRes(false);
        router.push("/thank-you/");
      } else {
        setFormRes(false);
        alert("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formData = [
    {
      tag: "input",
      type: "text",
      name: "name",
      placeholder: "Enter your name",
      required: true,
      value: userName,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
      },
    },
    {
      tag: "input",
      type: "email",
      name: "email",
      placeholder: "Enter your Email",
      required: true,
      value: userEmail,
      onChange: handleEmailChange,
    },
    {
      tag: "div", // Use div to wrap select and input for phone number
      name: "contact",
      // placeholder: "Enter your phone number",
      // required: true,
      content: (
        <div className="flex gap-2 text-sm border-b p-2 border-[#B4B4B4]">
          <select
            id="countryCode"
            name="countryCode"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="bg-transparent rounded-lg text-[#333333] focus:outline-none"
            style={{ width: `${countryCode.length + 2}ch` }}
          >
            {countries.map((country, index) => (
              <option
                key={index}
                value={country.code}
                className="text-[#b4b4b4]  bg-gray-100"
              >
                {` ${country.code}`}
              </option>
            ))}
          </select>
          <input
            type="number"
            id="phone"
            name="contact"
            placeholder="Enter your phone number"
            value={userPhone}
            onChange={handlePhoneChange}
            className="w-full bg-transparent no-spinner text-clr5 placeholder:uppercase text-sm  placeholder:text-[#B4B4B4] focus:outline-none"
          />
        </div>
      ),
    },
    {
      tag: "textarea",
      type: "text",
      name: "enter your message",
      placeholder: "type here",
      required: true,
      value: userMessage,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserMessage(e.target.value);
      },
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 h-full max-md:mt-6 text-base w-full"
      id="contact"
    >
      {formData.map((data, index) => (
        <div key={index} className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 bg-white">
            <label
              htmlFor={data.name}
              className={`${data.tag === "textarea" && ""} uppercase heading4 text-[#333333]`}
            >
              {data.name}
            </label>
            {data.tag === "div"
              ? data.content
              : React.createElement(data.tag, {
                id: data.name,
                type: data.type,
                name: data.name,
                value: data.value,
                onChange: data.onChange,
                placeholder: data.placeholder,
                required: data.required,
                autoComplete: "off",
                spellCheck: "false",
                rows: "5",
                className:
                  "w-full bg-transparent no-spinner text-clr5 py-2 placeholder:uppercase border-b border-[#B4B4B4] text-sm  placeholder:text-[#B4B4B4] focus:outline-none",
              })}
          </div>
          {data.name === "phone" && errorMessage && (
            <p className="text-sm text-red-500 mt-2 ">{errorMessage}</p>
          )}
          {data.name === "email" && emailErrorMessage && (
            <p className="text-sm text-red-500 mt-2">{emailErrorMessage}</p>
          )}
        </div>
      ))}

      <button className="w-full text-center text-white bg-quaternary ease-in-out transition-all justify-center self-center text-md px-8 py-3 font-semibold duration-300 active:scale-75 hover:scale-105">
        {formRes ? "Loading...." : "Submit"}
      </button>
    </form>
  );
};

export default Form;
