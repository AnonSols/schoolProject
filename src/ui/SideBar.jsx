import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./Links";
import ToggleButton from "./ToggleBtn";
import "bootstrap/dist/css/bootstrap.min.css";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 35px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="d-md-none d-flex flex-column align-items-center justify-content-center bg-white"
      animate={open ? "open" : "closed"}
    >
      <motion.div
        className="z-3 position-fixed top-0 start-0 bottom-0 bg-white"
        style={{ width: "200px" }}
        variants={variants}
      >
        <Links setOpen={setOpen} />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
