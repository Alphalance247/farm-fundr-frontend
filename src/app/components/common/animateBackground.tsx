"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const AnimateBackground = () => {
  const images = [
    "/assets/LandingPage/images/hero.png",
    "/assets/LandingPage/images/hero1.png",
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={images[currentImage]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      ></motion.div>
    </AnimatePresence>
  );
};

export default AnimateBackground;
