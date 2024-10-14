import exit from "/app/exit.svg";
import Image from 'next/image';

export default function About() {
    return (
        <div className="min-h-screen sm:p-16 sm:pt-8 bg-white">

            <header className="fixed top-0 left-0 w-full h-16 bg-gray-300 p-0 flex place-content-end place-items-center bg-header-green shadow-md">
                <a href="/" className="p-1 px-6 rounded-3xl mr-4 hover:shadow-lg hover:bg-gray-200 hover:transition hover:duration-200">
                    <Image
                        className="object-scale-down h-10 "
                        src={exit}
                        alt="Exit logo"
                        height={30}
                    />
                </a>
            </header>
            <footer className="fixed bottom-0 left-0 w-full h-12 bg-footer-blue p-0">
                <button className="text-3xl ffont-['Jersey25'] bg-footer-green h-full w-36 text-white rounded-tr-[10px] rounded-br-[10px] shadow">start</button>
            </footer>
        </div>

        
    )
}