"use client";

import React from "react";
import Footer from "../app/components/footer";
import Header from "../app/components/header";
import Tools from "../app/components/tools"
import AboutMe from "../app/components/about"
import Experience from "../app/components/experience"
import EmblaCarousel from "../app/components/experience-carousel";
import {EmblaOptionsType} from "embla-carousel";


const OPTIONS: EmblaOptionsType = { loop: true }


export default function About() {
    return (
<div>

<div className="min-h-screen sm:p-16 sm:pt-8 text-white lg:max-w-[90rem] mx-auto">
    <Header />
        <div className="m-4">
            <h1 className="text-4xl font-bold lg:mb-3 mb-2 font-mono mt-20">Alex Purnell</h1>
            <h2 className="text-3xl font-bold font-mono">Front End Developer &amp; Designer</h2>
        </div>
    <div className="lg:flex lg:flex-auto lg:justify-between">
        <div
            className="bg-slate-300 backdrop-blur-3xl bg-opacity-30 m-4 mb-[.2rem] p-5 lg:p-10 rounded-xl shadow-lg lg:w-[33%]">

            <div className="lg:flex lg:flex-auto lg:justify-between items-center">
                <div>
                    <AboutMe/>
                </div>
            </div>
        </div>
        <div
            className="bg-slate-300 backdrop-blur-3xl bg-opacity-30 m-4 mb-[.2rem] p-5 lg:p-10 rounded-xl shadow-lg lg:w-[66%]">
            <div className="lg:justify-between items-center">
                <div>
                    <EmblaCarousel options={OPTIONS} />
                </div>
            </div>
        </div>
    </div>
    <div className="lg:flex lg:flex-auto lg:justify-between">

        <div
            className="m-4 bg-slate-300 rounded-xl backdrop-blur-3xl bg-opacity-30 lg:my-[2rem] p-5 lg:p-10 shadow-lg  lg:max-h-[570px]">
            <div>
                <h2 className="text-3xl font-bold font-mono">Tech/Software</h2>
                <Tools />
                </div>
            </div>
        </div>
</div>
<Footer />
</div>
        
    )
}