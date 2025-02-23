// components/SlideInSection.js
"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const SlideInSection = ({ children }: { children: ReactNode }) => {
  const variants = {
    hidden: { opacity: 0, y: 50 }, // Start off slightly below and transparent
    visible: {
      opacity: 1,
      y: 0, // Move to the original position
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger the animation when 20% of the section is in view
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default SlideInSection;
