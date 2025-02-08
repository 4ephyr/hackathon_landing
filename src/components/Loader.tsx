'use client'
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div>
      <div className="fixed z-[1000] top-0 pointer-events-none select-none w-full h-screen overflow-hidden">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-110%" }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-full h-1/2 bg-secondary bg-[url('/natural-paper.png')] bg-repeat text-gray-900 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle,rgba(0,0,0,0.15)_10%,transparent_50%),radial-gradient(circle_at_20%_80%,rgba(0,0,0,0.1)_10%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(0,0,0,0.1)_10%,transparent_50%)] before:pointer-events-none before:z-10 shadow-loader_top"
        >
        </motion.div>

        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "110%" }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/2 left-0 w-full h-1/2 bg-secondary bg-[url('/natural-paper.png')] bg-repeat text-gray-900 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle,rgba(0,0,0,0.15)_10%,transparent_50%),radial-gradient(circle_at_20%_80%,rgba(0,0,0,0.1)_10%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(0,0,0,0.1)_10%,transparent_50%)] before:pointer-events-none before:z-10 shadow-loader_bot"
        >
        </motion.div>
      </div>
    </div>
  );
}
