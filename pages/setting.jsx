import React from "react";
import Image from 'next/image'
import microphone from "../public/images/microphone.png";
import apple from "../public/images/apple.png";
import google from "../public/images/google.png";
import line from "../public/images/line.png";

const Form = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="bg-white shadow-md rounded pt-6 pb-8 mb-4 md:px-12 px-5 mx-5 sm:w-1/2 md:w-1/3">
        <div className="mb-4">
          <h2 className="text-center font-bold mb-4">SIGN IN</h2>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <div className="relative flex justify-between border-b border-[-[
#6CB564]] ">
            <p>Profile</p>
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

      </div>
    </div>
  );
};

export default Form;
