import Image from "next/image"
import React from "react";

const Modal = () => { 

    const imageNames = [
        {
            imgName: 'barchester-healthcare-ltd.png',
            imgWidth: 200,
            imgHeight: 400 
        },
        {
            imgName: 'british-gas.png',
            imgWidth: 700,
            imgHeight: 400 
        },
        {
            imgName: 'centrica.png',
            imgWidth: 100,
            imgHeight: 400 
        },
        {
            imgName: 'ee.png',
            imgWidth: 100,
            imgHeight: 400 
        },
        {
            imgName: 'hain-celestial.png',
            imgWidth: 100,
            imgHeight: 400 
        },
        {
            imgName: 'youfibre.png',
            imgWidth: 100,
            imgHeight: 400 
        }

        ];

    return (
        <div className="flex flex-wrap justify-center items-start">
        {imageNames.map((imageName) => (
          <Image src={`/products/${imageName.imgName}`} alt={imageName.imgName} key={imageName.imgName} width={200} height={imageName.imgHeight} className="lg:w-1/2 lg:p-4 p-5 w-full" />
        ))}
      </div>
    )
}

export default Modal;
