import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

// Define the transition variants
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

// Define item variants for animation
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

// eslint-disable-next-line react/prop-types
const Links = ({ setOpen }) => {
  // Define the items for navigation
  const items = [
    { name: "Homepage", link: "/" },
    { name: "Styles", link: "#" },
    { name: "About", link: "/about" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact", link: "#" },
    { name: "Feedbacks", link: "#" },
  ];

  return (
    <motion.div
      className="d-flex flex-column flex-md-row align-items-center justify-content-center w-100 h-100"
      variants={variants}
    >
      {items.map(({ name, link }) => (
        <motion.a
          href={link}
          key={name}
          onClick={() => setOpen(false)}
          className="text-decoration-none text-dark mb-3 mx-3 fs-4"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {name}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
