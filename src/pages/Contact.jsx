import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure Bootstrap is imported

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
      className="mt-5 bg-light py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <div className="container text-center">
        <h2 className="mb-5 display-4">Contact Us</h2>

        <div className="row">
          <div className="col-lg-6 mx-auto">
            <form className="mb-4">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="btn btn-dark btn-block"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-around align-items-center mb-5">
          <div className="d-flex align-items-center mb-3 mb-md-0">
            <FaPhoneAlt className="me-3 h4" />
            <span>+1 123 456 789</span>
          </div>
          <div className="d-flex align-items-center mb-3 mb-md-0">
            <FaEnvelope className="me-3 h4" />
            <span>info@scratchynib.com</span>
          </div>
          <div className="d-flex align-items-center mb-3 mb-md-0">
            <FaMapMarkerAlt className="me-3 h4" />
            <span>123 Calligraphy St, Art Town</span>
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
