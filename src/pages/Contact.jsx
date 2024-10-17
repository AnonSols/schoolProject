 import { motion } from "framer-motion";
 import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

 const Contact = () => {
   return (
     <motion.section
       id="Contact"
       className="bg-gray-100 py-10"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1, transition: { duration: 1 } }}
     >
       <div className="container mx-auto px-4 text-center">
         <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
         <div className="flex flex-col md:flex-row justify-around items-center mb-6">
           <div className="flex items-center mb-4">
             <FaPhoneAlt className="text-xl mr-4" />
             <span>+1 123 456 789</span>
           </div>
           <div className="flex items-center mb-4">
             <FaEnvelope className="text-xl mr-4" />
             <span>info@scratchynib.com</span>
           </div>
           <div className="flex items-center mb-4">
             <FaMapMarkerAlt className="text-xl mr-4" />
             <span>123 Calligraphy St, Art Town</span>
           </div>
         </div>
         <form className="mx-auto max-w-lg">
           <input
             type="text"
             className="w-full mb-4 p-3 rounded-lg shadow-sm"
             placeholder="Your Name"
           />
           <input
             type="email"
             className="w-full mb-4 p-3 rounded-lg shadow-sm"
             placeholder="Your Email"
           />
           <textarea
             className="w-full mb-4 p-3 rounded-lg shadow-sm"
             rows="5"
             placeholder="Your Message"
           ></textarea>
           <motion.button
             whileHover={{ scale: 1.05 }}
             className="bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-600"
           >
             Send Message
           </motion.button>
         </form>
       </div>
     </motion.section>
   );
 };

 export default Contact;
