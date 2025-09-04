"use client";
import Button from "@/components/Button/Button";
import InputField from "@/components/input/InputField";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function SignUp() {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  return (
    <div className="w-screen h-screen">
      <div></div>
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
          onChange={(e) => e.target.value}
        />
        <InputField
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={userData.email}
          onChange={(e) => e.target.value}
        />
        <InputField
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={userData.password}
          onChange={(e) => e.target.value}
        />
      </div>
      <div>
                <Button btnLink={""} btnPx={60} btnPy={15} btnText="Create Account" bgColor="#DB4444" textColor="#fafafa"/>
              
                <Button btnLink={""} btnPx={60} btnPy={15} btnText="Sign up with Google" bgColor="transparent" btnBorder={1} icon={FcGoogle}/>


      </div>
    </div>
  );
}
