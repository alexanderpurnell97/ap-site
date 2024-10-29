import React from "react";
import Image from  "next/image";

import aplogoImage from "/app/ap-logo.svg";



export default function Footer() {
    return (
      <footer className="lg:flex-row flex-col text-center lg:text-left flex justify-between items-center p-4 bg-header-green px-20">
        <div className="flex items-center">
          <Image className="w-32" src={aplogoImage} alt="Alex Purnell Logo"></Image>
        </div>
        <div className="text-white text-sm">
          <p>Email: <a href="mailto:alexanderpurnell97@gmail.com" className="underline">alexanderpurnell97@gmail.com</a></p>

          <p>Website designed and created by Alex Purnell</p>
        </div>
      </footer>
    );
  }