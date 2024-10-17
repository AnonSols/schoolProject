import { motion } from "framer-motion";
import { useStyles } from "../hooks/useStyles";

const Styles = () => {
  const { styles, isLoadingStyles } = useStyles();
  if (isLoadingStyles) {
    return <div>Loading...</div>; // Show a loading state
  }

  if (!styles.stylesData) {
    return <div>No styles available.</div>; // Show a message if no styles are available
  }
  return (
    <div className="container mx-auto px-4 py-8 text-black">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Calligraphy Styles
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {styles.stylesData.map((style, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={style.image}
              alt={style.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{style.name}</h2>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Styles;
