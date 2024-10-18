import { motion } from "framer-motion";
import { useGallery } from "../hooks/useGallery.js";

const Gallery = () => {
  const { galleries, isLoadingGalleries } = useGallery();

  if (isLoadingGalleries) {
    return <div>Loading...</div>; // Show a loading state
  }

  if (!galleries.galleryData) {
    return <div>No styles available.</div>; // Show a message if no styles are available
  }

  // Limit the gallery to the first 2 items
  const limitedGalleryData = galleries.galleryData.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="great-vibes-regular text-3xl font-bold mb-6 text-center">
        Calligraphy Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {limitedGalleryData.map((galleryItem, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={galleryItem.imageUrl}
              alt={galleryItem.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{galleryItem.title}</h2>
              <p className="text-gray-600">{galleryItem.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
