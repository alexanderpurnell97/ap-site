"use client";

import React from "react";
import { motion } from "framer-motion";

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
                <div className="w-full bg-slate-300 backdrop-blur-3xl bg-opacity-30 rounded-3xl p-[1rem] mb-2 shadow-lg">
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
                <div className="w-full bg-slate-300 backdrop-blur-3xl bg-opacity-30 rounded-3xl p-[1rem] mb-2 shadow-lg">
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
                <div className="w-full bg-slate-300 backdrop-blur-3xl bg-opacity-30 rounded-3xl p-[1rem] mb-2 shadow-lg">
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