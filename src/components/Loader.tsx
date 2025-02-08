'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image'

export default function Loader() {
  const [loadDelay, setLoadDelay] = useState(false);
  setTimeout(() => {
    setLoadDelay(true);
  }, 1000)
  return (
    <div>
      <div className="fixed z-[1000] top-0 pointer-events-none select-none w-full h-screen overflow-hidden">
        <motion.div
          initial={{ y: 0 }}
          animate={ loadDelay && { y: "-110%" }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-full h-1/2 bg-secondary bg-[url('/hackathon_landing/natural-paper.png')] bg-repeat text-gray-900 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle,rgba(0,0,0,0.15)_10%,transparent_50%),radial-gradient(circle_at_20%_80%,rgba(0,0,0,0.1)_10%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(0,0,0,0.1)_10%,transparent_50%)] before:pointer-events-none before:z-10 shadow-loader_top"
        >
        <div className="absolute bottom-0 flex right-1/2 transform translate-x-1/2">
          <Image className="rotate-45 bottom-0" src="/hackathon_landing/assets/curvy5.svg" alt="Loader" height={100} width={100} />
          <Image className="-rotate-[135deg] bottom-0" src="/hackathon_landing/assets/curvy5.svg" alt="Loader" height={100} width={100} />
        </div>
        </motion.div>
        <motion.div
          initial={{ y: 0 }}
          animate={ loadDelay && { y: "110%" }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/2 left-0 w-full h-1/2 bg-secondary bg-[url('/hackathon_landing/natural-paper.png')] bg-repeat text-gray-900 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle,rgba(0,0,0,0.15)_10%,transparent_50%),radial-gradient(circle_at_20%_80%,rgba(0,0,0,0.1)_10%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(0,0,0,0.1)_10%,transparent_50%)] before:pointer-events-none before:z-10 shadow-loader_bot"
        >
          <div className="absolute top-0 flex right-1/2 transform translate-x-1/2">
            <Image className="rotate-45 top-0" src="/hackathon_landing/assets/curvy5.svg" alt="Loader" height={100} width={100} />
            <Image className="-rotate-[135deg] bottom-0" src="/hackathon_landing/assets/curvy5.svg" alt="Loader" height={100} width={100} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
