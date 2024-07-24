"use client";
import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yUpper = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yMiddle = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const ySpaceman = useTransform(scrollYProgress, [0, 1], ["0%", "700%"]);
  const rotateSpaceman = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="parallax">
      <motion.h1 style={{ y: ySpaceman }}>Jon Pape Hallem</motion.h1>
      <div className="sky"></div>
      <motion.div style={{ y: yUpper }} className="upper-clouds"></motion.div>
      <motion.div style={{ y: yMiddle }} className="middle-clouds"></motion.div>
      <motion.div className="lower-clouds"></motion.div>
      <motion.div
        style={{ y: ySpaceman, rotate: rotateSpaceman }}
        className="computer-spaceman"
      ></motion.div>
    </div>
  );
}
