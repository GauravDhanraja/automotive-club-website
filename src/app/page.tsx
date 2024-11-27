"use client";

import Background from "./ui/background";
import { audiowide, caveat } from "./ui/fonts";
import Footer from "./ui/footer";
import Navbar from "./ui/navbar";
import react from "react";
import { motion, useTransform, useScroll } from "motion/react";

export default function Home() {
  const targetRef = react.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-81%"]);

  return (
    <div className="grid font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Background />
      <main className="relative h-[600vh]">
        <div className="sticky top-0 h-screen flex overflow-hidden snap-x">
          <motion.div style={{ x }} className="flex">
            <div className="flex">
              <div className="grid-cols-1 relative min-w-screen h-fit mt-48 mx-auto p-16 snap-mandatory">
                <h1
                  className={`text-8xl text-gray-50 whitespace-nowrap font-extrabold drop-shadow-lg m-3 ${audiowide.className} antialiased`}
                >
                  Automotive Club Nitte
                </h1>
                <a className={`text-6xl text-red-600 ${caveat.className}`}>
                  Unite .Drive .Thrive
                </a>
              </div>
              <div className="min-w-full text-gray-100 py-44 px-10 snap-mandatory">
                <div className="max-w-5xl mx-auto mt-32 text-center">
                  <h2 className="text-4xl font-bold my-6">
                    About the Automotive Club
                  </h2>
                  <p className="text-lg leading-relaxed mb-8">
                    At the Automotive Club Nitte, we are passionate about cars,
                    bikes, and everything in between. From workshops to road
                    trips, we bring together automotive enthusiasts to learn,
                    share, and grow.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-black/80 border border-slate-50 p-6 rounded-lg shadow-lg">
                      <h3 className="text-2xl font-semibold mb-4">Workshops</h3>
                      <p>
                        Attend hands-on workshops on automotive maintenance,
                        modifications, and driving techniques.
                      </p>
                    </div>
                    <div className="bg-black/80 border border-slate-50 p-6 rounded-lg shadow-lg">
                      <h3 className="text-2xl font-semibold mb-4">
                        Road Trips
                      </h3>
                      <p>
                        Join us for exciting road trips and explore scenic
                        routes while sharing your passion for automobiles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
