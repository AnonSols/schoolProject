import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Import marker images
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fixing marker icon issue with Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Contact = () => {
  const position = [40.712776, -74.005974]; // Replace with your desired coordinates

  return (
    <motion.section
      id="Contact"
      className="mt-5 bg-gray-100 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <div className="container mx-auto px-4 d-flex text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

        <div className="wrapper">
          <form className="mx-auto my-5 max-w-lg">
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
        </div>

        <div id="map" style={{ height: "400px", width: "100%" }}>
          <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                123 Calligraphy St, Art Town <br /> Contact us for more info!
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
