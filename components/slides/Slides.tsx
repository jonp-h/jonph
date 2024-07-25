"use client";
import "./slide.scss";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

type SlideProps = {
  item: {
    title: string;
    image: string;
    description: string;
  };
};

const items = [
  {
    title: "Teacher",
    image: "/teacher_spaceman.svg",
    description: "Media and Information Technology",
  },
  {
    title: "Developer",
    image: "/developer_spaceman.svg",
    description: "Full-stack web development and software engineering",
  },
  {
    title: "Graphical Designer",
    image: "/graphical_spaceman.svg",
    description: "Marketing for festivals and conferences",
  },
  {
    title: "Journalist",
    image: "/journalist_spaceman.svg",
    description: "Local newspaper in Norway",
  },
];

const Slide = ({ item }: SlideProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="image-container" ref={ref}>
            <Image src={item.image} alt={item.title} height={300} width={300} />
          </div>
          <motion.div className="text-container" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Slides = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="slide" ref={ref}>
      <div className="progress">
        <h1>About</h1>
        <motion.div style={{ scaleX }} className="progress-bar"></motion.div>
      </div>
      {items.map((item) => (
        <Slide item={item} key={item.title} />
      ))}
    </div>
  );
};

export default Slides;
