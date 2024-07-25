"use client";
import "./footer.scss";
import { delay, easeInOut, easeOut, motion } from "framer-motion";

const spacemanVariants = {
  //   transition: {
  //     duration: 3,
  //     ease: easeOut,
  //   },
  animate: {
    y: [-30, 30],
  },
};

const upperText = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [0, 100],
    y: [-30, 0],
  },
};
const lowerText = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [0, 100],
    y: [-20, 0],
  },
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="textbox">
        <motion.p
          variants={upperText}
          initial="initial"
          transition={{ delay: 1, duration: 2 }}
          whileInView="animate"
        >
          Made with ❤️ by{" "}
          <a href="https://github.com/jonp-h" target="_blank">
            Jon
          </a>
        </motion.p>
        <motion.p
          variants={lowerText}
          initial="initial"
          transition={{ delay: 2, duration: 2 }}
          whileInView="animate"
        >
          Astronauts by the wonderful{" "}
          <a
            href="https://www.freepik.com/author/catalyststuff"
            target="_blank"
          >
            catalyststuff
          </a>
        </motion.p>
      </div>
      <p id="year">2024</p>
      <motion.div
        variants={spacemanVariants}
        transition={{ duration: 3, ease: easeOut }}
        whileInView="animate"
        className="heart-spaceman"
      ></motion.div>
    </div>
  );
};

export default Footer;
