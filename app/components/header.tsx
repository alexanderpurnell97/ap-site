import React from "react";
import Image from  "next/image";
import aplogoImage from "/app/ap-logo.svg";


export default function Header() {

    return (
        <header className="lg:fixed top-0 left-0 w-full h-16 p-0 flex place-content-center place-items-center bg-header-green shadow-md">
                <div className="flex justify-center">
                    <Image className="w-32" src={aplogoImage} alt="Alex Purnell Logo"></Image>
                </div>
         </header>
    )

    


}  