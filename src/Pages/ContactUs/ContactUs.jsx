import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet default icon issue with webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [subscribeEmail, setSubscribeEmail] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message Sent:", formData);
    alert("Your message has been sent!");
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed Email:", subscribeEmail);
    alert("Thank you for subscribing!");
    setSubscribeEmail("");
  };

  return (
    <div className="bg-[#fdf8f4]">
      {/* Top section */}
      <div className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Text */}
        <div>
          <h2 className="text-4xl font-bold text-[#8b5e3c] text-brown-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Have any questions, feedback, or just want to say hello? Fill out
            the form and our coffee-loving team will get back to you soon.
          </p>
          <p className="text-gray-600">
            Whether you're here to explore our brews, discuss collaborations, or
            simply share your coffee story, we’d love to hear from you.
          </p>
        </div>

        {/* Right: Form */}
        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-6 space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            ></textarea>
            <button
              type="submit"
              className="bg-[#8b5e3c] hover:bg-[#6e4528] text-white font-semibold px-6 py-2 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map section */}
      <div className="bg-[#f0ded0] py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-4 text-[#8b5e3c] text-center text-brown-800">
            Our Locations in Dhaka
          </h3>
          <MapContainer
            center={[23.8103, 90.4125]}
            zoom={12}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            />
            {/* Markers */}
            <Marker position={[23.8103, 90.4125]}>
              <Popup>Central Dhaka Branch</Popup>
            </Marker>
            <Marker position={[23.7, 90.4]}>
              <Popup>Old Town Coffee Spot</Popup>
            </Marker>
            <Marker position={[23.85, 90.42]}>
              <Popup>North Dhaka Roastery</Popup>
            </Marker>
            <Marker position={[23.77, 90.38]}>
              <Popup>West End Cafe</Popup>
            </Marker>
            <Marker position={[23.7806, 90.407]}>
              <Popup>Banani Coffee Lounge</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      {/* Subscribe section */}
      <div className="bg-[#fdf8f4] py-12">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-[#8b5e3c] mb-4">Coffee</h2>
          <p className="text-gray-600 mb-6">
            Stay updated with our latest brews, special offers, and coffee
            stories. Join our coffee family and never miss a sip of goodness.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex items-center justify-center w-full max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={subscribeEmail}
              onChange={(e) => setSubscribeEmail(e.target.value)}
              required
              className="flex-1 border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#8b5e3c] hover:bg-[#6e4528] text-white font-semibold px-6 py-2 rounded-r-full"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
