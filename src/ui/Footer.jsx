// import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Ticker from "./Ticker";  

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-10 overflow-y-hidden">
      <div className="container mx-auto px-4 text-center">
        {/* Site Map Section */}
        <div className="mt-4">
          <h4 className="font-bold text-lg">Site Map</h4>
          <ul className="flex items-center justify-center space-x-4">
            <li>
              <a href="#Homepage">Home</a>
            </li>
            <li>
              <a href="#Styles">Styles</a>
            </li>
            <li>
              <a href="#Gallery">Gallery</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Feedback">Feedback</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
          <div className="flex items-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="text-sm">
          <p>© 2024 Scratchy Nib. All Rights Reserved.</p>
        </div>
        <div className="mt-6 lg:mt-0">
          <Ticker /> {/* Include the scrolling ticker component */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
