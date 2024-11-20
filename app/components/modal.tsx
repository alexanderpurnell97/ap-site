import Image from "next/image"
import React from "react";

const Modal = () => { 

    const imageNames = ['barchester-healthcare-ltd.png', 'british-gas.png', 'centrica.png'];

    
    return (
        <div>
        {imageNames.map((imageName) => (
          <Image src={`/products/${imageName}`} alt={imageName} key={imageName} width={200} height={200} />
        ))}
      </div>
    )
}


export default Modal;
