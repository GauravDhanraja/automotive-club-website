import Link from "next/link";
import { audiowide } from "./fonts";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-50">
      <div className="p-6 bg-black/80 border-t border-slate-50">
        <div className="grid grid-cols-2 relative mx-auto">
          <div className="flex flex-col items-start p-4 gap-4">
            <p className={`text-2xl ${audiowide.className}`}>Automotive Club</p>
            <div>
              <p className="text-sm">NMAM Institute of Technology</p>
              <p className="text-sm">Nitte, Karkala</p>
            </div>
          </div>

          <div className="flex flex-col items-end justify-center p-6 gap-4">
            <ul className="flex justify-center gap-4">
              <li>
                <Link href="https://www.instagram.com/automotiveclub_nitte">
                  <Image
                    src="/instagram.svg"
                    alt="Instagram logo"
                    width={30}
                    height={30}
                  />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Image
                    src="/linkedin.svg"
                    alt="Instagram logo"
                    width={30}
                    height={30}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-500" />
      </div>
    </footer>
  );
}
