import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Ticker = () => {
  const [dateTime, setDateTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="overflow-hidden whitespace-nowrap bg-gray-800 text-white p-2"
      animate={{ x: ["100%", "-100%"] }}
      transition={{ duration: 20, ease: "linear", repeat: Infinity }}
    >
      <span>{`Current Date and Time: ${dateTime} | `}</span>
      <span>{`Visitor Count: ${
        localStorage.getItem("visitorCount") || 0
      }`}</span>
    </motion.div>
  );
};

export default Ticker;
