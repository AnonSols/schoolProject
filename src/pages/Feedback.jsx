import { motion } from "framer-motion";

const Feedback = () => {
  return (
    <motion.section
      id="Feedback"
      className="bg-slate-100 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">We Value Your Feedback</h2>
        <p className="mb-8">
          Please provide us with your feedback so we can improve our services.
        </p>
        <form className="mx-auto max-w-lg">
          <textarea
            className="w-full mb-4 p-3 rounded-lg shadow-sm"
            rows="5"
            placeholder="Share your thoughts..."
          ></textarea>
          <input
            type="email"
            className="w-full mb-4 p-3 rounded-lg shadow-sm"
            placeholder="Your Email"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-600"
          >
            Submit Feedback
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
};

export default Feedback;
