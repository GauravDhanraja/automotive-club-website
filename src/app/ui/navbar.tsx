import Image from "next/image";
import { jaro } from "./fonts";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed flex w-full py-4 px-8 z-50 backdrop-blur-md border-b border-slate-50">
      <div className="flex w-full items-center">
        <div className="inset-0 w-full h-full">
          <Image
            src="/Automotive-white.svg"
            alt=""
            width={50}
            height={50}
            className="object-cover"
          />
        </div>
        <div>
          <ul
            className={`flex min-w-full justify-center gap-10 ${jaro.className} antialiased`}
          >
            <Link href="/" className="text-2xl">
              Home
            </Link>
            <Link href="/" className="text-2xl">
              Events
            </Link>
            <Link href="/" className="text-2xl">
              Faculty
            </Link>
            <Link href="/" className="text-2xl">
              About
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
