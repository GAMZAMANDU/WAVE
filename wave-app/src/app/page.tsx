import Image from "next/image";
import './globals.css';

export default function Home() {
  return (
      <>
        <header className="flex gap-5">
          <Image src={"/images/logo.svg"} alt='logo' width={74} height={22}/>
        </header>
        <main>
          <h1 className="font-threat text-4xl text-titleColor">Hello, World</h1>
        </main>
      </>
  );
}
