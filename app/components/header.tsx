import React from "react";
import Image from  "next/image";
import exit from "/app/exit.svg";

export default function Header() {

    return (
        <header className="fixed top-0 left-0 w-full h-16 bg-gray-300 p-0 flex place-content-end place-items-center bg-header-green shadow-md">
                <a href="/" className="p-1 px-6 rounded-3xl mr-4 hover:shadow-lg hover:bg-gray-200 hover:transition hover:duration-200">
                    <Image
                        className="object-scale-down h-10 "
                        src={exit}
                        alt="Exit logo"
                        height={30}
                    />
                </a>
    </header>
    )

    


}