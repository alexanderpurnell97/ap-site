import Image from "next/image";
import aplogo from "/app/ap-logo.svg";
// import about from "/app/about.svg";
// import experience from "/app/experience.svg";
// import skills from "/app/skills.svg";
// import contact from "/app/contact.svg";
// import cv from "/app/cv-download.svg"; 
// import Footer from "./components/footer";


export default function Home() {
  return (
    <div className="min-h-screen sm:p-16 sm:pt-8">
      
      <main className="flex items-center">
      <div className="max-h-96 text-white text-center flex flex-col items-center">
        {/* <div className="mb-4">
      <div className="max-h-96 text-white text-center flex flex-col items-center">
        {/* <div className="mb-4">
          <a href="/about">
            <Image
                src={about}
                alt="About image"
                className="mb-1"
            />
            <p>
              About
            </p>
          </a>
          
        </div>
        <div className="mb-4">
        <a href="/experience">
        <a href="/experience">
          <Image
              className="mb-1 object-scale-down"
              src={experience}
              alt="About image"
          />
          <p>
            Experience
          </p>
        </a>
        </a>
        </div>
        <div className="mb-4"> 
        <a href="/skills">
        <a href="/skills">
          <Image
              className="mb-1"
              src={skills}
              alt="About image"
          />
          <p>
            Skills
          </p>
        </a>
        </a>
        </div>
        <div className="mb-4">
        <a href="/contact">
        <a href="/contact">
          <Image
              className="mb-1"
              src={contact}
              alt="About image"
          />
          <p>
            Contact
          </p>
        </a>
        </a>
        </div>
        <div className="items-center flex flex-col">
          <Image
              className="mb-1"
              src={cv}
              alt="About image"
          />
          <p>
            CV-Download
          </p>
        </div> */}
      </div>


      <div className="m-auto text-center text-white text-lg">
        <Image
            src={aplogo}
            alt="Alexander Purnell Logo"
            width={844.94}
            height={280}
            className="mb-20"
            priority
          />
      </div>

      
        
      </main>
      {/* <footer className="fixed bottom-0 left-0 w-full h-12 bg-footer-blue p-0">
      <Footer />
      </footer> */}
    </div>
    
  );
}
