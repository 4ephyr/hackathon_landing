"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
    "/hackathon_landing/assets/lazeez.png",
    "/hackathon_landing/assets/iedc.png",
    "/hackathon_landing/assets/spinx.png",
    "/hackathon_landing/assets/race_dark.png",
    "/hackathon_landing/assets/cloud.png",
];

const imageStyles: Record<string, string> = {
    "lazeez.png": "",
    "iedc.png": "grayscale h-[100px]",
    "spinx.png": "invert",
    "race_dark.png": "h-[70px]",
    "cloud.png": "invert",
};

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <div className="relative w-full h-full flex items-center overflow-hidden justify-center bg-transparent mb-8">
        <motion.div
          className="flex whitespace-nowrap gap-16 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          style={{ display: "flex" }}
        >
          {[...images, ...images].map((src, index) => {
            const fileName = src.split("/").pop() || "";
            const customStyle = imageStyles[fileName] || "";
            return (
              <Image
                key={index}
                src={src}
                alt="logo"
                width={150}
                height={150}
                className={`mb-4 object-contain ${customStyle}`}
              />
            );
          })}
        </motion.div>
      </div>
      <div className="bg-secondary pb-10 px-8">
          <div className="flex justify-between">
            <div className="p-10">
              <h1 className="text-primary font-secondary font-lighter text-xl italic">Follow Us On :</h1>
              <p className="text-primary font-secondary font-lighter text-lg italic">
                Instagram:-
              </p>
              <div className="flex gap-4 items-center">
              <a href="https://www.instagram.com/iedc.uec/" target="_blank">
                <Image src='/hackathon_landing/assets/iedc.png' width={100} height={100} alt="Iedc" className="invert object-contain"></Image>
              </a>
              <a href="https://www.instagram.com/race.cse/" target="_blank">
                <Image src='/hackathon_landing/assets/race_dark.png' width={50} height={100} alt="Iedc" className="invert object-contain"></Image>
              </a>
              </div>
            </div>
            <div className="p-10 flex flex-col items-center gap-8">
              <Image src='/hackathon_landing/assets/TDLogoDark.svg' width={300} height={300} alt="Logo"></Image>
              <a href="https://uec.ac.in" target="_blank"><Image src='/hackathon_landing/assets/uec_creamy.png' width={70} height={70} alt="Logo"></Image></a>
            </div>
            <div className="p-10 flex flex-col items-end content-end text-right">
              <h1 className="text-primary font-secondary font-lighter text-xl italic">Locate Us :</h1>
              <a href="https://maps.app.goo.gl/aBkBWGPAz3yUPyNj6" target="_blank" className="underline text-primary italic text-xl">View on Map</a>
            </div>
          </div>
          <div className="text-center">
            <p className="text-primary font-primary font-semibold">© {year} Take Down Hackathon | All Rights Reserved <br />  Powered by Universal Engineering College</p>
          </div>
      </div>
    </footer>
  );
}
