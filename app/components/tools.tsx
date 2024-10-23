'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import figmaLogo from "../logos/figma-logo.svg"
import githubLogo from "../logos/github-logo.svg"
import htmlLogo from "../logos/html5-logo.svg"
import nextjsLogo from "../logos/nextjs-logo.svg"
import sassLogo from "../logos/sass-logo.svg"
import typescriptLogo from "../logos/typescript-logo.svg"
import tailwindLogo from "../logos/tailwind-logo.svg"
import photoshopLogo from "../logos/photoshop-logo.svg"


export default function Tools() {
    return (
        <div className="flex flex-wrap justify-around content-center items-center">
            <div className="w-1/4 p-3">
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
                    <Image src={nextjsLogo} alt="Experience" className="mb-1 object-scale-down" />
                </motion.div>
            </div>
            <div className="w-1/4 p-3">
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
            <div className="w-1/4 p-3">
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
                <Image src={tailwindLogo} alt="Experience" className="mb-1 object-scale-down" />
            </motion.div>
            </div>
            <div className="w-1/4 p-3 ">
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
                            <Image src={figmaLogo} alt="Experience" className="max-h-24 object-scale-down" />
                </motion.div>
            </div>
            <div className="w-1/4 p-3">
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
                            <Image src={htmlLogo} alt="Experience" className="mb-1 object-scale-down" />
            </motion.div>
            </div>
            <div className="w-1/4 p-3">
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
                            <Image src={typescriptLogo} alt="Experience" className="mb-1 object-scale-down" />
            </motion.div>
            </div>
            <div className="w-1/4 p-3">
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
                           <Image src={sassLogo} alt="Experience" className="mb-1 object-scale-down" />
            </motion.div>
                
            </div>
            <div className="w-1/4 p-3">
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
                           <Image src={photoshopLogo} alt="Experience" className="mb-1 object-scale-down" />
            </motion.div>
                
            </div>
        </div>


    )
}