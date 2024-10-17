import Sidebar from "./SideBar";
// import VisitorsCount from "./VisitorsCount";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <nav className="bg-slate-100  flex justify-between items-center z-[999] gap-4 pt-4 px-4">
      <Sidebar />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/logo.png"
          className="w-[80px] z-[30] h-[80px]"
          alt="scratchy lib"
        />
      </motion.div>
      {/* <VisitorsCount /> */}
    </nav>
  );
};

export default Nav;
