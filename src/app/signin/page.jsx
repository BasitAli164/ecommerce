"use client";

import Button from "@/components/Button/Button";
import InputField from "@/components/input/InputField";
import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function SignUp() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="w-screen min-h-screen grid grid-cols-1 sm:grid-cols-2 bg-gray-50">
      {/* Left Image Section */}
      <div className="hidden sm:flex h-full items-center justify-center bg-gray-100">
        <img
          src="/signUp/signUp.jpg"
          alt="Sign up"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Form Section */}
      <div className="flex h-full items-center justify-center">
        <div className="w-full max-w-md  p-8 sm:p-10">
          {/* Heading */}
          <div className="mb-6 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Log in to Exclusive
            </h1>
            <p className="text-gray-500 text-sm mt-2">
              Enter your details below
            </p>
          </div>

          {/* Input Fields */}
          <div className="flex flex-col gap-4">
           

            <InputField
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />

            <InputField
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-4 mt-8">
            <Button
              btnLink={""}
              btnPx={24}
              btnPy={9}
              btnText="Log in"
              bgColor="#DB4444"
              textColor="#fafafa"
            />

            

            {/* Redirect to login */}
            <div className="text-center mt-4 text-sm">
              
                <Link
                  href={""}
                  className="text-[#DB4444] font-medium hover:underline"
                >
                  Forget Password?
                </Link>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
