"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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

export default function Skills() {

    return (
        <div className="mt-5 font-semibold font-mono">
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                className="origin-left"
                transition={{
                  type: "spring",
                  bounce: .2,
                  delay:.2,
                  velocity: 2
                }}
            >
            <div className="items-center w-full bg-slate-300 backdrop-blur-3xl bg-opacity-30 rounded-3xl p-[1rem] mb-2 shadow-lg flex-row flex flex-nowrap">
                <Image src={htmlLogo} alt="html logo" className="w-8 mr-2" />
                <p>HTML 5</p>
            </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                className="origin-left"
                transition={{
                  type: "spring",
                  bounce: .2,
                  delay:.4,
                  velocity: 2
                }}
            >
                <div className="items-center w-full bg-slate-300 backdrop-blur-3xl bg-opacity-30 rounded-3xl p-[1rem] mb-2 shadow-lg flex-row flex flex-nowrap">
                    <Image src={sassLogo} alt="sass" className="w-8 mr-2" />
                    <p>CSS/SASS</p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                className="origin-left"
                transition={{
                  type: "spring",
                  bounce: .2,
                  delay:.6,
                  velocity: 2
                }}
            >
                <div className="items-center w-full bg-slate-300 backdrop-blur-3xl bg-opacity-30 rounded-3xl p-[1rem] mb-2 shadow-lg flex-row flex flex-nowrap">
                    <Image src={figmaLogo} alt="sass" className="w-4 mr-2" />
                    <p>Figma</p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                className="origin-left"
                transition={{
                  type: "spring",
                  bounce: .2,
                  delay:.8,
                  velocity: 2
                }}
            >
                <div className="w-2/3 bg-slate-300 backdrop-blur-3xl bg-opacity-30 rounded-3xl p-[1rem] mb-2 shadow-lg">
                    <p>Photoshop</p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                className="origin-left"
                transition={{
                  type: "spring",
                  bounce: .2,
                  delay:1,
                  velocity: 2
                }}
            >
            <div className="w-1/2 bg-slate-300 backdrop-blur-3xl bg-opacity-30 rounded-3xl p-[1rem] mb-2 shadow-lg">
                <p>Next.js</p>
            </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                className="origin-left"
                transition={{
                  type: "spring",
                  bounce: .2,
                  delay:1,
                  velocity: 2
                }}
            >
            <div className="w-1/2 bg-slate-300 backdrop-blur-3xl bg-opacity-30 rounded-3xl p-[1rem] mb-2 shadow-lg">
                <p>React</p>
            </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                className="origin-left"
                transition={{
                  type: "spring",
                  bounce: .2,
                  delay:1.2,
                  velocity: 2
                }}
            >
            <div className="lg:w-1/3 w-[40%] bg-slate-300 backdrop-blur-3xl bg-opacity-30 rounded-3xl p-[1rem] mb-2 shadow-lg">
                <p>Typescript</p>
            </div>
                </motion.div>

        </div>
        
        
        
    )

    


}  