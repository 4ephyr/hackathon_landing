'use client'
import { useState, useEffect } from "react";
import "./Loader.css";

interface LoaderProps {
  onLoaded?: () => void;
}

export default function Loader({ onLoaded }: LoaderProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onLoaded) onLoaded();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-white z-50 flex items-center justify-center transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div id="preloader">
        <div className="inner">
          <div className="clock">
            <div className="minute"></div>
            <div className="house"></div>
          </div>
          <span>Loading</span>
        </div>
      </div>
    </div>
  );
}
