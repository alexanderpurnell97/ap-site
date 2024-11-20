"use client";

import React from "react";
import Footer from "../app/components/footer";
import Header from "../app/components/header";
import Image from "next/image";
import aboutMeImage from "../app/aboutme-img.png"
import Tools from "../app/components/tools"
import Experience from "../app/components/experience"
import { motion } from "framer-motion";
import githubLogo from "../app/logos/github-logo.svg"
import linkedInLogo from "../app/linkedin-icon.png"
import mailIcon from "../app/mail-icon.png"

export default function About() {
    return (
<div>


<div className="min-h-screen sm:p-16 sm:pt-8 text-white lg:max-w-[90rem] mx-auto">
    <Header />
    <div className="bg-slate-300 backdrop-blur-3xl bg-opacity-30 m-4 lg:mt-[4rem] mb-[.2rem] p-5 lg:p-10 rounded-xl shadow-lg">
        <div className="lg:flex lg:flex-auto lg:justify-between items-center">
            <div className="lg:w-3/4 lg:pr-20 mb-2">
                <h1 className="text-2xl font-bold lg:mb-3 mb-2 font-mono">Alex Purnell - Front End Developer &amp; Designer</h1>
                <p className="mb-2 font-semibold">My name is Alex Purnell and I am a Front End Developer &amp; Designer located in Basingstoke, England. </p>
                <p className="mb-2 font-semibold">For the past three years, I have been working at the job board website CV-Library, where I design, create, and maintain webpages. In my role, I use SASS, HTML, Git, and jQuery, while for personal projects, I work with React, Tailwind CSS, TypeScript, and Git with GitHub. For design work, I primarily use Figma and Photoshop, and I am also skilled in Adobe Illustrator, After Effects, and Premiere Pro.</p>
                <p className="font-semibold">In my spare time I  enjoy reading, drinking coffee, playing badminton, hiking and I&apos;m a big music and film nerd.</p>
            </div>
            <div className="p-2 z-0 flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      bounce: .4,
                      delay:.2,
                      velocity: 2
                    }}
                    >
                    <Image className="lg:w-[300px]  rounded-3xl bg-opacity-60 shadow-2xl" src={aboutMeImage} alt="Picture of me"/>
                </motion.div>
                <motion.div
                    className="w-2/3 flex justify-center"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      bounce: .4,
                      delay: 1,
                      velocity: 2
                    }}
                    >

                <div className="flex w-full bg-slate-300 backdrop-blur-3xl bg-opacity-30 rounded-xl p-1 shadow-lg content-center justify-evenly mt-2">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{
                        type: "spring"
                    }}
                    >
                    <a target="_blank" href="https://www.linkedin.com/in/alexander-purnell-97a2b5ba">
                    <Image src={linkedInLogo} alt="LinkedIn" className="mb-1  object-scale-down max-w-8" />
                    </a> 
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{
                        type: "spring"
                    }}
                    >
                    <a target="_blank" href="https://github.com/alexanderpurnell97">
                        <Image src={githubLogo} alt="GitHub" className="mb-1    object-scale-down max-w-8" />
                    </a>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{
                        type: "spring"
                    }}
                    >
                        <a target="_blank" href="mailto:alexanderpurnell97@gmail.com">
                        <Image src={mailIcon} alt="Mail Icon" className="mb-1 object-scale-down max-w-8" />
                    </a>
                    </motion.div>
                    
                    
                </div>
                </motion.div>


            </div>
        </div> 
    </div>
    
    <div className="lg:flex lg:flex-auto lg:justify-between">
            <div className="m-4 bg-slate-300 backdrop-blur-3xl bg-opacity-30 rounded-xl lg:my-[2rem] p-5 lg:p-10 shadow-lg lg:w-[49%] max-h-[570px]">
                <div>
                    <h2 className="text-3xl font-bold font-mono mb-4">Experience</h2>
                    <Experience />
                </div>
            </div>
            <div className="m-4 bg-slate-300 rounded-xl backdrop-blur-3xl bg-opacity-30 lg:my-[2rem] p-5 lg:p-10 shadow-lg lg:w-[49%] lg:max-h-[570px]">
            <div>
                    <h2 className="text-3xl font-bold font-mono">Tech/Software</h2>
                    <Tools />
                </div>
            </div>
        </div>
        <div className="text-center text-2xl">
          <p>This site is a work in progress, check back soon...</p>
        </div>
</div>
<Footer />
</div>
        
    )
}