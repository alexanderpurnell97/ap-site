import Image from "next/image"
import React from "react";

const Modal = () => { 

    const imageNames = [
        {
            imgName: 'https://i.imgur.com/tQutNNz.png',
            imgWidth: 200,
            imgHeight: 400 
        },
        {
            imgName: 'https://i.imgur.com/8KsOWNx.png',
            imgWidth: 700,
            imgHeight: 400 
        },
        {
            imgName: 'https://i.imgur.com/OCr8qEp.png',
            imgWidth: 100,
            imgHeight: 400 
        },
        {
            imgName: 'https://i.imgur.com/YEqTm7K.png',
            imgWidth: 100,
            imgHeight: 400 
        },
        {
            imgName: 'https://i.imgur.com/ttXCDBU.png',
            imgWidth: 100,
            imgHeight: 400 
        },
        {
            imgName: 'https://i.imgur.com/g9GaR3d.png',
            imgWidth: 100,
            imgHeight: 400 
        }

        ];

    return (
        <div className="flex flex-wrap justify-center items-start">
        {imageNames.map((imageName) => (
          <Image src={`${imageName.imgName}`} alt={imageName.imgName} key={imageName.imgName} width={200} height={imageName.imgHeight} className="lg:w-1/2 lg:p-4 p-5 w-full" unoptimized/>
        ))}
      </div>
    )
}

export default Modal;
