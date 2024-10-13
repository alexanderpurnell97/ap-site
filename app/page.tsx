import Image from "next/image";
import aplogo from "/workspaces/ap-site/app/images/ap-logo.svg";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          src={aplogo}
          alt="Alexander Purnell Logo"
          width={844.94}
          height={280}
          priority
        />
        {/* <h1 className="ap-header">
          Web Designer & Developer
        </h1> */}
      </main>
      
    </div>
  );
}
