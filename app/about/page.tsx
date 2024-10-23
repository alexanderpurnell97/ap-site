"use client";

import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Image from "next/image";
import aboutMeImage from "../aboutme-img.png"
import Tools from "../components/tools"
import { motion } from "framer-motion";
export default function About() {
    return (
<div className="min-h-screen sm:p-16 sm:pt-8">
    <Header />
    <div className="bg-white bg-opacity-60 my-[4rem] mb-[.2rem] p-10 rounded-xl shadow-lg border-gray-900 border-2">
        <div className="lg:flex lg:flex-auto lg:justify-between items-center">
            <div className="lg:w-3/4 pr-20">
                <h1 className="text-5xl font-bold mb-6">About me</h1>
                <p className="mb-2">My name is Alex Purnell and I am a Web Designer and Developer located in Basingstoke, England. Welcome to my website! </p>
                <p className="mb-2">For the last 3 years, I have been working at the job board website CV-Library, designing and creating and maintainng webpages. For my job, I use SCSS, HTML, Git and jQuery, and for my personal work I use next.js, Tailwind CSS, Typescript and Git with Github. As for designing, I use Figma and Photoshop, and I am also skilled in Adobe Illustrator, After Effects and Premier Pro.</p>
                <p >In my spare time I  enjoy reading, drinking coffee, playing badminton, hiking and I&apos;m a big music and film nerd.</p>
            </div>
            <div className="p-2 z-0">
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
                <Image className="lg:w-[300px] lg:rounded-2xl shadow-2xl" src={aboutMeImage} alt="Picture of me"/>
            </motion.div>
            </div>
        </div> 
    </div>
    
    <div className="lg:flex lg:flex-auto lg:justify-between">
            <div className="bg-white my-[2rem] p-10 shadow-lg lg:w-[49%]">
                <div>
                    <h2 className="text-3xl font-bold mb-6">Contact</h2>
                </div>
            </div>
            <div className="bg-white my-[2rem] p-10 shadow-lg lg:w-[49%]">
            <div>
                    <h2 className="text-3xl font-bold mb-6">Favourite tools</h2>
                    <Tools />
                </div>
            </div>
        </div>
    <footer className="fixed bottom-0 left-0 w-full h-12 bg-footer-blue p-0">
        <Footer />
    </footer>
</div>
    
        
    )
}