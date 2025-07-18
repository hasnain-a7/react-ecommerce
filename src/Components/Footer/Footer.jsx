import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  Pinterest,
} from "@mui/icons-material"; // Import social media icons

const Footer = () => {
  const [letter, setletter] = useState("");
  const handleChange = () => {
    alert("You will get our latest news");
    setletter(""); // Assuming setletter is a state setter function
  };

  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold  text-lg mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-gray-300">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <p className="text-sm mb-2">Email: example459@gmail.com</p>
            <p className="text-sm mb-2">Phone: +9230144785789</p>
            <p className="text-sm">
              Address: Housing Colony Ecommerce St., Nankana Sahib, Pakistan
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <YouTube size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Pinterest size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 text-gray-700 rounded-md"
              value={letter}
              onChange={(e) => setletter(e.target.value)}
            />
            <button
              onClick={handleChange}
              className="w-full mt-2 p-2 bg-slate-400 text-black rounded-md "
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 border-t pt-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Made by Hasnain.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
