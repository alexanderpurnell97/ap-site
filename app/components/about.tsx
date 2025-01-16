// "use client";
import aboutMeImage from "../aboutme-img.png"
import githubLogo from "../logos/github-logo.svg"
import linkedInLogo from "../linkedin-icon.png"
import mailIcon from "../mail-icon.png"

import Image from  "next/image";

import React, { useState } from 'react'
import arrow from "../arrow.png";
// import Exit from "../exit.svg";
// import Modal from "../components/modal";
import { motion } from "framer-motion";

export default function AboutMe() {

    const [show, setShow] = useState(false);

    return (
        <div>
            <div
                className="flex content-center justify-evenly mb-4">
                <motion.div
                    whileHover={{scale: 1.1}}
                    transition={{
                        type: "spring"
                    }}
                >
                    <a target="_blank" href="https://www.linkedin.com/in/alexander-purnell-97a2b5ba">
                        <Image src={linkedInLogo} alt="LinkedIn" className="mb-1  object-scale-down max-w-8"/>
                    </a>
                </motion.div>
                <motion.div
                    whileHover={{scale: 1.1}}
                    transition={{
                        type: "spring"
                    }}
                >
                    <a target="_blank" href="https://github.com/alexanderpurnell97">
                        <Image src={githubLogo} alt="GitHub" className="mb-1    object-scale-down max-w-8"/>
                    </a>
                </motion.div>
                <motion.div
                    whileHover={{scale: 1.1}}
                    transition={{
                        type: "spring"
                    }}
                >
                    <a target="_blank" href="mailto:alexanderpurnell97@gmail.com">
                        <Image src={mailIcon} alt="Mail Icon" className="mb-1 object-scale-down max-w-8"/>
                    </a>
                </motion.div>

            </div>
            <div className="bg-cyan-600 text-white p-2 rounded-xl w-full mb-4">
                <h2 className="font-extrabold text-center backdrop-blur-3xl bg-opacity-30">Available for Hire!</h2>
            </div>

            <div className="flex items-center mb-2">
                <div className="lg:flex lg:flex-col w-[60%]">

                    <h2 className="text-2xl font-bold mb-2 font-mono">About</h2>
                    <p>Web Developer and Designer in Basingstoke, UK. Knowledgeable in HTML, SCSS, JS, React, and Figma.
                        Open to work opportunities.</p>
                </div>
                <div className="w-[40%]">
                    <motion.div
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                        transition={{
                            type: "spring",
                            bounce: .4,
                            delay: .2,
                            velocity: 2
                        }}
                    >
                        <div>
                            <Image className="ml-5 rounded-3xl bg-opacity-60 w-960" src={aboutMeImage} alt="Picture of me"/>
                            <div className="p-2 z-0 flex flex-col items-center">
                                <motion.div
                                    className="w-2/3 flex justify-center"
                                    initial={{y: -10, opacity: 0}}
                                    animate={{y: 0, opacity: 1}}
                                    transition={{
                                        type: "spring",
                                        bounce: .4,
                                        delay: 1,
                                        velocity: 2
                                    }}
                                >

                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="flex items-center">
                <button onClick={() => setShow(!show)} className="text-l font-bold font-mono underline">Favourites
                </button>
                <Image className={`w-4 h-4 ml-1 ${show ? 'rotate' : 'rotate-reverse'}`} src={arrow}
                       alt="Picture of me"/>
            </div>


            {show && (
                <div className="mb-2 flex flex-col">
                    <p><span className="font-bold">Food:</span> Tacos 🌮</p>
                    <p><span className="font-bold">Book:</span> 11/22/63 - Stephen King 📖</p>
                    <p><span className="font-bold">Activity:</span> Badminton 🏸</p>
                    <p><span className="font-bold">Film:</span> In Bruges 🎬</p>
                    <p><span className="font-bold">Album:</span> Ants from up there - BC,NR ✈️</p>
                    <p><span className="font-bold">Video Game:</span> Undertale 🎮</p>
                    <p><span className="font-bold">TV Show:</span> Better Call Saul ⚖️</p>
                </div>
            )}

            <iframe className="mt-4"
                    src="https://open.spotify.com/embed/playlist/0RdEtCb5OIl9pD673BCE5p?utm_source=generator&theme=0"
                    width="100%" height="370px"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"></iframe>
        </div>

    );
}