'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import figmaLogo from "../logos/figma-logo.svg"
import githubLogo from "../logos/github-logo.svg"
import htmlLogo from "../logos/html5-logo.svg"
import nextjsLogo from "../logos/nextjs-logo.svg"
import sassLogo from "../logos/sass-logo.svg"
import typescriptLogo from "../logos/typescript-logo.png"
import tailwindLogo from "../logos/tailwind-logo.svg"
import photoshopLogo from "../logos/photoshop-logo.svg"
import illustratorLogo from "../logos/illustrator-logo.png"
import aftereffectsLogo from "../logos/aftereffects-logo.svg"


export default function Tools() {
    return (
        <div className="p-1 flex flex-wrap justify-around content-center items-center">
            <div className="lg:w-1/4 w-1/2 p-3">
                <motion.div
                    initial={{ scale: 0, x: -100, opacity: 0 }}
                    animate={{ scale: 1, x: 0, opacity: 1}}
                    transition={{
                      type: "spring",
                      bounce: .4,
                      delay:.2,
                      velocity: 2
                    }}
                    >
                    <Image src={nextjsLogo} alt="next.js" className="mb-1 object-scale-down" />
                </motion.div>
            </div>
            <div className="lg:w-1/4 w-1/2 p-3">
                <motion.div
                    initial={{ scale: 0, x: -100, opacity: 0 }}
                    animate={{ scale: 1, x: 0, opacity: 1}}
                    transition={{
                      type: "spring",
                      bounce: .4,
                      delay:.4,
                      velocity: 2
                    }}
                    >
                        <Image src={githubLogo} alt="Experience" className="max-h-24 mb-1 object-scale-down" />
                </motion.div>
            </div>
            <div className="lg:w-1/4 w-1/2 p-3">
            <motion.div
                    initial={{ scale: 0, x: -100, opacity: 0 }}
                    animate={{ scale: 1, x: 0, opacity: 1}}
                    transition={{
                      type: "spring",
                      bounce: .4,
                      delay:.6,
                      velocity: 2
                    }}
                    >
                <Image src={tailwindLogo} alt="tailwind" className="mb-1 object-scale-down" />
            </motion.div>
            </div>
            <div className="lg:w-1/4 w-1/2 p-3 ">
                <motion.div
                        initial={{ scale: 0, x: -100, opacity: 0 }}
                        animate={{ scale: 1, x: 0, opacity: 1}}
                        transition={{
                          type: "spring",
                          bounce: .4,
                          delay:.8,
                          velocity: 2
                        }}
                        >
                            <Image src={figmaLogo} alt="figma" className="max-h-24 object-scale-down" />
                </motion.div>
            </div>
            <div className="lg:w-1/4 w-1/2 p-3">
            <motion.div
                        initial={{ scale: 0, x: -100, opacity: 0 }}
                        animate={{ scale: 1, x: 0, opacity: 1}}
                        transition={{
                          type: "spring",
                          bounce: .4,
                          delay:1,
                          velocity: 2
                        }}
                        >
                            <Image src={htmlLogo} alt="html logo" className="mb-1 object-scale-down" />
            </motion.div>
            </div>
            <div className="lg:w-1/4 w-1/2 p-3">
            <motion.div
                        initial={{ scale: 0, x: -100, opacity: 0 }}
                        animate={{ scale: 1, x: 0, opacity: 1}}
                        transition={{
                          type: "spring",
                          bounce: .4,
                          delay:1.2,
                          velocity: 2
                        }}
                        >
                            <Image src={typescriptLogo} alt="typescript" className="mb-1 object-scale-down" />
            </motion.div>
            </div>
            <div className="lg:w-1/4 w-1/2 p-3">
            <motion.div
                        initial={{ scale: 0, x: -100, opacity: 0 }}
                        animate={{ scale: 1, x: 0, opacity: 1}}
                        transition={{
                          type: "spring",
                          bounce: .4,
                          delay:1.4,
                          velocity: 2
                        }}
                        >
                           <Image src={sassLogo} alt="sass" className="mb-1 object-scale-down" />
            </motion.div>
            </div>
            <div className="lg:w-1/4 w-1/2 p-3">
            <motion.div
                        initial={{ scale: 0, x: -100, opacity: 0 }}
                        animate={{ scale: 1, x: 0, opacity: 1}}
                        transition={{
                          type: "spring",
                          bounce: .4,
                          delay:1.6,
                          velocity: 2
                        }}
                        >
                           <Image src={photoshopLogo} alt="photoshop" className="mb-1 object-scale-down" />
            </motion.div>
                
            </div>
            <div className="lg:w-1/4 w-1/2 p-3">
            <motion.div
                        initial={{ scale: 0, x: -100, opacity: 0 }}
                        animate={{ scale: 1, x: 0, opacity: 1}}
                        transition={{
                          type: "spring",
                          bounce: .4,
                          delay:1.8,
                          velocity: 2
                        }}
                        >
                           <Image src={aftereffectsLogo} alt="aftereffects" className="mb-1 object-scale-down" />
            </motion.div>
                
            </div>
            <div className="lg:w-1/4 w-1/2 p-12 lg:p-2">
            <motion.div
                        initial={{ scale: 0, x: -100, opacity: 0 }}
                        animate={{ scale: 1, x: 0, opacity: 1}}
                        transition={{
                          type: "spring",
                          bounce: .4,
                          delay:2,
                          velocity: 2
                        }}
                        >
                           <Image src={illustratorLogo} alt="illustrator" className="mb-1 object-scale-down" />
            </motion.div>
                
            </div>
        </div>


    )
}