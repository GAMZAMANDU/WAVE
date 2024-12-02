import Image from "next/image";

export default function Home() {
  return (
      <>
        <div className="flex gap-5">
          <Image src={"/images/logo.svg"} alt='logo' width={74} height={22}/>
          
        </div>
      </>
  );
}
