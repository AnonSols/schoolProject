import { motion } from "framer-motion";
import { useGallery } from "../hooks/useGallery.js";
import { useState } from "react";
import Nav from "../ui/Nav.jsx";

const Gallery = () => {
  const { galleries, isLoadingGalleries } = useGallery();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  if (isLoadingGalleries) {
    return <div>Loading...</div>; // Show a loading state
  }

  if (!galleries.galleryData) {
    return <div>No styles available.</div>; // Show a message if no styles are available
  }

  // Extract unique styles for filter options
  const uniqueStyles = [
    "All",
    ...new Set(galleries.galleryData.map((item) => item.style)),
  ];

  // Filter gallery items based on search term and selected filter
  const filteredGalleryData = galleries.galleryData.filter((galleryItem) => {
    const matchesSearch = galleryItem.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesFilter =
      selectedFilter === "All" || galleryItem.style === selectedFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <Nav />
      <div className="container mx-auto px-4 py-8">
        <h1 className="great-vibes-regular text-3xl font-bold mb-6 text-center">
          Calligraphy Gallery
        </h1>
        {/* Search Bar */}
        <div className="mb-4 flex justify-between">
          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded px-3 py-2 w-1/2"
          />
          {/* Filter Dropdown */}
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="border rounded px-3 py-2 ml-4"
          >
            {uniqueStyles.map((style, index) => (
              <option key={index} value={style}>
                {style}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGalleryData.map((galleryItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }} // Initial state before animation
              animate={{ opacity: 1, scale: 1 }} // Animate to these values
              transition={{ duration: 0.5 }} // Duration of the animation
              whileHover={{ scale: 1.05 }} // Scale effect on hover
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
    </>
  );
};

export default Gallery;
