import React from "react";
import Image from 'next/image'
import microphone from "../public/images/microphone.png";
import stripe from "../public/images/stripe.png";
import arrows from "../public/images/arrows.png";
import arrow2 from "../public/images/arrow2.png";

import pople from "../public/images/pople.png";

const Form = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
    <div className="bg-white shadow-md rounded pt-6 pb-8 mb-4 md:px-12 px-5 mx-5 sm:w-1/2 md:w-1/3">
      <p className="pt-3 ">
            <Image width={400} height={300} src={stripe} alt="" className="pb-3" />
          </p>
          <h2 className="font-bold text-center"> Interact</h2>
          <p className="text-center">Copy
Soligen monologi. Mikroliga astroktiga. Homodölig. Liling sore.</p>
          <p className="pt-3 text-center mx-20 px-auto">
            <Image width={150} height={50} src={arrows} alt="" className="pb-3 px-auto self-center " />
          </p> 
<div className="flex justify-between my-10">

          <p className="text-[#138808] font-bold"> Skip</p>
          <p>
            <Image src={arrow2} width={30} height={20}/>
          </p>
</div>
      </div>
    </div>
  );
};

export default Form;
