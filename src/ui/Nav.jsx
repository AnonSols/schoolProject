import Sidebar from "./SideBar";
import Links from "./Links";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const Nav = () => {
  return (
    <nav className="bg-light d-flex justify-content-between align-items-center z-3 gap-4 pt-3 px-3">
      <span className="d-md-none">
        <Sidebar />
      </span>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/logo.png"
          className="img-fluid"
          style={{ width: "80px", height: "80px" }}
          alt="scratchy lib"
        />
      </motion.div>
      {/* Show Links component on medium and larger screens */}
      <div className="d-none d-md-block">
        <Links />
      </div>
    </nav>
  );
};

export default Nav;
