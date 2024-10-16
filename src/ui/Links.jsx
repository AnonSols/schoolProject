import { motion } from "framer-motion";

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
  const items = ["Homepage", "Styles", "About", "Contact", "Feedbacks"];

  return (
    <motion.div
      className="  absolute w-full h-full flex flex-col items-center justify-center gap-[20px]"
      variants={variants}
    >
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          onClick={() => setOpen((state) => !state)}
          className="text-[20px] sm:text-[40px]"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
