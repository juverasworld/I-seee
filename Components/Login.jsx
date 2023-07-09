import React from "react";
import Image from 'next/image'
import microphone from "../public/images/microphone.png";
import apple from "../public/images/apple.png";
import google from "../public/images/google.png";
import line from "../public/images/line.png";
import Link from "next/link";
const Form = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="bg-white shadow-md rounded pt-6 pb-8 mb-4 md:px-12 px-5 mx-5 sm:w-1/2 md:w-1/3">
        <div className="mb-4">
          <h2 className="text-center font-bold mb-4">SIGN IN</h2>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <div className="relative flex items-center">
            <input
              className="appearance-none border-b-2 rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
            <Image width={200} height={150}
              src={microphone}
              alt=""
              className="h-5 w-5 text-gray-400 ml-2"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <div className="relative flex items-center">
            <input
              className="appearance-none border-b-2 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
            <Image width={200} height={150}
              src={microphone}
              alt=""
              className="h-5 w-5 text-gray-400 ml-2"
            />
          </div>
        </div>
        <div className="flex-end text-right text-red-700 mt-1">
          Forgot Password
        </div>
        <div className="flex items-center justify-center my-5">
          <button className="bg-[#138808] text-white font-bold py-2 px-24 rounded focus:outline-none focus:shadow-outline" type="button">
            LOGIN
          </button>
        </div>
        <div className="flex justify-evenly mt-5 mb-3">
          <p className="pt-3">
            <Image width={200} height={150} src={line} alt="" className="pb-3" />
          </p>
          <p className="font-bold px-3  leading-8 ">OR</p>
          <p className="pt-3" >
            <Image width={200} height={150} src={line} alt="" />
          </p>
        </div>
        <div className="flex justify-evenly">
          <p className="">
            <Image width={50} height={50} src={apple} alt="" className="pb-3" />
          </p>
          <p>
            <Image width={50} height={50} src={google} alt="" />
          </p>
        </div>
        <div><p>Don't have an account? <span className="text-[#138808] font-bold text-[16px]">
          <Link href="/sign-up"> Sign Up</Link>
         </span> </p></div>
      </div>
    </div>
  );
};

export default Form;
