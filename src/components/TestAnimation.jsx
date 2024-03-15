import React from "react";

import { motion } from "framer-motion";


const cardVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

function Card({ emoji}) {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.1 }}
    >
      <motion.div className="card" variants={cardVariants}>
        {/* {emoji} */}
        <p>Thilina</p>
      </motion.div>
    </motion.div>
  );
}

const food = [
  ["🍅", 100, 10],
  ["🍊", 10, 40],
  ["🍋", 10, 90],
  ["🍐", 10, 120],
  ["🍏", 10, 140],
  ["🫐", 10, 245],
  ["🍆", 10, 290],
  ["🍇", 10, 320]
];

const TestAnimation = () => {
    return food.map(([emoji, hueA, hueB]) => (
        <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
      ));
}

export default TestAnimation;