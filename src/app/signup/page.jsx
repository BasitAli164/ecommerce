"use client";
import Button from "@/components/Button/Button";
import InputField from "@/components/input/InputField";
import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function SignUp() {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  return (
    <div className="w-screen h-screen grid grid-cols-1 sm:grid-cols-2  justify-center items-center  gap-20">
      <div>
        <img src="/signUp/signUp.jpg" alt="Sign up" />
      </div>
      <div className="w-[300px]">
        <div>
          <h1>Create an account</h1>
          <p>Enter your details below</p>
        </div>
        <div>
          <InputField
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            value={userData.fullName}
            onChange={(e) => setUserData(e.target.value)}
          />
          <InputField
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={userData.email}
            onChange={(e) => setUserData(e.target.value)}
          />
          <InputField
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={userData.password}
            onChange={(e) => setUserData(e.target.value)}
          />
        </div>
        <div className="flex flex-col  gap-4 mt-5">
          <Button
            btnLink={""}
            btnPx={60}
            btnPy={12}
            btnText="Create Account"
            bgColor="#DB4444"
            textColor="#fafafa"
          />

          <Button
            btnLink={""}
            btnPx={60}
            btnPy={12}
            btnText="Sign up with Google"
            bgColor="transparent"
            btnBorder={1}
            icon={FcGoogle}
          />

          <div>
            <p>Already have account?</p> <Link href={"/signin"}>Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
