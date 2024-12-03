import Image from "next/image";
import './globals.css';

export default function Home() {
  return (
      <>
        <header className="flex gap-5 mb-6">
          <Image src={"/images/logo.svg"} alt='logo' width={74} height={22}/>
        </header>
        <main>
          <h1 className="font-threat text-4xl text-titleColor mb-4">Hello, World</h1>
          <section className="flex gap-2">
            <Image src={"/images/button/start-btn.svg"} className="cursor-pointer" alt='start-button' width={50} height={50}/>
            <Image src={"/images/button/setting-btn.svg"} className="cursor-pointer" alt='start-button' width={50} height={50}/>
          </section>
        </main>
      </>
  );
}
