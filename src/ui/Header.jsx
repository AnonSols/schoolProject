import Nav from "./Nav";
import { motion } from "framer-motion";
import { RiScrollToBottomLine } from "react-icons/ri";
import VisitorsCount from "./VisitorsCount";

const Header = () => {
  const textVariants = {
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
    initial: {
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <div className="">
        <img
          src="/wallpaperTwo.jpg"
          alt="background"
          className="absolute z-[-99] w-full  h-full object-cover"
        />
      </div>
      <header className=" grid h-full w-full grid-rows-[auto_auto_1fr]">
        <Nav />
        <div className="flex items-center justify-end mx-4 mt-4 text-white">
          {/* <div>styles</div> */}

          <div className="self-end">
            <VisitorsCount />
          </div>
        </div>
        <section className="flex flex-col h-full mx-4">
          <motion.div
            variants={textVariants}
            className=" text-black text-2xl items-center bg-slate-100/50 backdrop-blur-lg   mx-10 flex justify-center font-bold mt-[35%] border border-white rounded-lg p-5"
          >
            Calligraphy the art of beautiful handwritting, has a rich and
            diverse history that spans centuries and cultures. Calligraphy is
            more than mere lettering; it&apos;s a visual expression of language
            that transforms words into an art form.
            <br /> <br />
            The origins of calligraphy can be traced back to the ancient
            civilizations of China, Egypt, and Mesopotamia. As early as 3000
            BCE, the Egyptians developed hieroglyphics, a complex system of
            pictorial writing that required great skill and precision.
          </motion.div>

          <motion.div
            initial="initial"
            variants={textVariants}
            animate="animate"
            className=" mt-[32%]"
          >
            {" "}
            <a href="#Styles">
              <motion.div
                variants={textVariants}
                animate="scrollButton"
                className="text-white text-[6rem] items-bottom justify-center flex cursor-pointer bottom-5"
                alt=""
              >
                <RiScrollToBottomLine />
              </motion.div>{" "}
            </a>
          </motion.div>
        </section>
      </header>
    </>
  );
};

export default Header;
