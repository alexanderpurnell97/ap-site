"use client";


import Image from  "next/image";
import React, { useState, useRef } from 'react'
import arrow from "../arrow.png";
import Exit from "../exit.svg";
import Modal from "../components/modal";



export default function Experience() {

    const [show, setShow] = useState(false);
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    return (
        <div className="max-h-[425px] overflow-y-scroll pr-[.7rem]">
            <div className="bg-blue-950 bg-opacity-40 p-4 rounded-xl shadow-lg mb-3">
            <h3 className="text-2xl font-bold mb-2 font-mono">CV-Library - Website</h3>
            <div className="mb-2">
                <p>Over three years, I was tasked with updating and maintaining web pages for the CV-Library site. The site has approximately 4.3 unique monthly visitors. My main area of focus was on user facing pages.</p>
            </div>
            <h4 className="text-xl font-bold mb-2 font-mono">The technologies I worked with</h4>
                <div className="mb-2">
                    <p>HTML, SASS, JavaScript (jQuery), Perl (TemplateToolkit), Jira, Gerrit, Figma, Adobe XD, Photoshop, Git.</p>
                </div>
                <div className="flex items-center">
                    <button onClick={() => setShow(!show)} className="text-xl font-bold font-mono underline">Examples</button> 
                    <Image className={`w-4 h-4 ml-1 ${show ? 'rotate' : 'rotate-reverse'}`} src={arrow} alt="Picture of me" />              
                </div>

            {show && (
                <div className="mb-2 flex flex-col underline">
                    <a target="_blank" href="https://www.cv-library.co.uk/about">About</a>
                    <a target="_blank" href="https://www.cv-library.co.uk/work-for-us">Work for us</a>
                    <a target="_blank" href="https://www.cv-library.co.uk">Homepage hero and search section</a>
                    <a target="_blank" href="https://www.cv-library.co.uk/awards">Awards</a>
                    <a target="_blank" href="https://www.cv-library.co.uk/address">Address</a>
                </div>
            )}
        </div>
        <div className="bg-blue-950 bg-opacity-40 p-4 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-2 font-mono">CV-Library - Products</h3>
            <div className="mb-2">
                <p>During my time at CV-Library, I designed, prototyped and developed products for variaous clients. These included bespoke branding on job adverts and company profiles, as well as targeted advertisements for the CV-Library site.</p>
            </div>
            <h4 className="text-xl font-bold mb-2 font-mono">The technologies I worked with</h4>
                <div className="mb-2">
                    <p>Figma, Adobe Photoshop, Adobe XD, HTML, CSS, JavaScript, phpMyAdmin, Perl (TemplateToolkit). </p>
                </div>
            <button onClick={() => dialogRef.current?.showModal()} className="text-xl font-bold mb-2 font-mono underline">Examples</button>
            <div className="mb-2">
                <dialog className="h-5/6 w-5/6 bg-slate-300 backdrop-blur-2xl bg-opacity-30 rounded-xl shadow-lg p-5" ref={dialogRef}>
                    <span className="sr-only">Close</span>
                    <button>
                        <Image className="w-4 h-4 ml-1" src={Exit} alt="Exit" onClick={() => dialogRef.current?.close()} />
                    </button>
                    <Modal />
                </dialog>
            </div>
        </div>
        </div>
        
        );
  }