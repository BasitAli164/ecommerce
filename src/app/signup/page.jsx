import React, { useState } from 'react'

export default function SignUp() {
  const [userData,setUserData]=useState({
    fullName:"",
    email:"",
    password:"",

  })
  return (
    <div>
      <div></div>
      <div>
        <h1>Create an account</h1>
        <p>Enter your details below</p>
        
      </div>
      
    </div>
  )
}
