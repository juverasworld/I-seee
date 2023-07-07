import React from "react";
import Image from 'next/image'
import microphone from "../public/images/microphone.png";
import apple from "../public/images/apple.png";
import google from "../public/images/google.png";
import line from "../public/images/line.png";
import avatar from "../public/images/avatar.png"

const Form = () => {
  return (
    <div className="flex items-center justify-center  ">
      <div className="bg-white shadow-md rounded pt-6 pb-8 mb-4 md:px-12 px-5 mx-5 sm:w-1/2 md:w-1/3">
        <div className="mb-4">
          <h2 className=" font-bold mb-4">Profile</h2>
          <p className=" justify-center text-center mx-24 my-4">
        <Image src={avatar} width={70} height={50}   />
          </p>
          <label className="block text-gray-700 text-sm font-bold mb-2">
           First Name
          </label>
          <div className="relative flex items-center">
            <input
              className="appearance-none border-b-2 rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Jane"
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
           Last name
          </label>
          <div className="relative flex items-center">
            <input
              className="appearance-none border-b-2 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              placeholder="Age"
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
          Email
          </label>
          <div className="relative flex items-center">
            <input
              className="appearance-none border-b-2 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="password"
              placeholder="jane1234@gmail.com"
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
           Country
          </label>
          <div className="relative flex items-center">
            <input
              className="appearance-none border-b-2 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              placeholder="Nigeria"
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
            Phone Number
          </label>
          <div className="relative flex items-center">
            <input
              className="appearance-none border-b-2 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="number"
              placeholder="+234 903 224 3456"
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
           Delivery Address 
          </label>
          <div className="relative flex items-center">
            <input
              className="appearance-none border-b-2 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              placeholder="No 45 cresent rd.abkpa, ogun state "
            />
            <Image width={200} height={150}
              src={microphone}
              alt=""
              className="h-5 w-5 text-gray-400 ml-2"
            />
          </div>
        </div>
        <div className="state">
        hellow qrfnnfnfnfnffffff
        </div>
      </div>
    </div>
  );
};

export default Form;
