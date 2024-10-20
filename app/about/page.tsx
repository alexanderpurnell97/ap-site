import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Image from "next/image";
import aboutMeImage from "../aboutme-img.png"
export default function About() {
    return (
<div className="min-h-screen sm:p-16 sm:pt-8">
    <Header />
    <div className="bg-white my-[4rem] p-10 rounded-3xl shadow-lg ">
        <div className="lg:flex lg:flex-auto lg:justify-between">
            <div className="lg:w-3/4 pr-20">
                <h1 className="text-5xl font-bold mb-6">About me</h1>
                <p className="mb-2">My name is Alex Purnell and I am a Web Designer and Developer located in Basingstoke, England. Welcome to my website! </p>
                <p className="mb-2">For the last 3 years, I have been working at the job board website CV-Library, designing and creating and maintainng webpages. For my job, I use SCSS, HTML, Git and jQuery, and for my personal work I use next.js, Tailwind CSS, Typescript and Git with Github. As for designing, I use Figma and Photoshop, and I am also skilled in Adobe Illustrator, After Effects and Premier Pro.</p>
                <p >In my spare time I  enjoy reading, drinking coffee, playing badminton, hiking and I&apos;m a big music and film nerd.</p>
            </div>
            <div>
                <Image className="lg:w-[300px] lg:rounded-2xl shadow-2xl animate-imgAnimation"  src={aboutMeImage} alt="Picture of me"/>
            </div>
        </div> 

        <div>
            

        </div>
        
    </div>
    <footer className="fixed bottom-0 left-0 w-full h-12 bg-footer-blue p-0">
        <Footer />
    </footer>
</div>
    
        
    )
}