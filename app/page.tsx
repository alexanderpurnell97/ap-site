"use client";

import Image from "next/image";
import aplogoImage from "/app/ap-logo.svg";
import aboutImage from "/app/about.svg";
import experienceImage from "/app/experience.svg";
import skillsImage from "/app/skills.svg";
import contactImage from "/app/contact.svg";
import cvImage from "/app/cv-download.svg"; 
import Footer from "./components/footer";
import { motion, AnimatePresence } from "framer-motion";





export default function Home() {
  return (
    <div className="min-h-screen sm:p-16 sm:pt-8">
      <main className="flex items-center">
        <div className="max-h-96 text-white text-center flex flex-col items-center">
          <div className="mb-4">
            <AnimatePresence>
            <motion.div
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             transition={{
               type: "spring",
               stiffness: 300,
               damping: 20,
               delay:1
             }}
             whileHover={{
              scale: 1.1,
              transition: {delay: 0},
              }}
              exit={{ transition: { duration: 0 }}}>

            <a href="/about">
              <Image src={aboutImage} alt="About Alexander Purnell" className="mb-1" />
              <p>About</p>
            </a>
            </motion.div>
            </AnimatePresence>
            
            
          </div>
          <div className="mb-4">
            <a href="/experience">
              <Image src={experienceImage} alt="Experience" className="mb-1 object-scale-down" />
              <p>Experience</p>
            </a>
          </div>
          <div className="mb-4">
            <a href="/skills">
              <Image src={skillsImage} alt="Skills" className="mb-1" />
              <p>Skills</p>
            </a>
          </div>
          <div className="mb-4">
            <a href="/contact">
              <Image src={contactImage} alt="Contact" className="mb-1" />
              <p>Contact</p>
            </a>
          </div>
          <div className="items-center flex flex-col">
            <Image src={cvImage} alt="CV Download" className="mb-1" />
            <p>CV-Download</p>
          </div>
        </div>
        <div className="m-auto text-center text-white text-lg">
          <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            >
            <Image src={aplogoImage} alt="Alexander Purnell Logo" width={844.94} height={280} className="mb-20" priority />
          </motion.div>
          </AnimatePresence>
          
          
        </div>
      </main>
      <footer className="fixed bottom-0 left-0 w-full h-12 bg-footer-blue p-0">
        <Footer />
      </footer>
    </div>
  );
}