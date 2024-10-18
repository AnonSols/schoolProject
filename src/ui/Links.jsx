import { motion } from "framer-motion";

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
    { name: "About", link: "/about" }, // About links to another page
    { name: "Gallery", link: "/gallery" }, // About links to another page
    { name: "Contact", link: "#" },
    { name: "Feedbacks", link: "#" },
  ];

  return (
    <motion.div
      className="absolute w-full h-full flex flex-col items-center justify-center gap-[20px]"
      variants={variants}
    >
      {items.map(({ name, link }) => (
        <motion.a
          href={link}
          key={name}
          onClick={() => setOpen(false)}
          className="text-[20px] sm:text-[40px]"
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
