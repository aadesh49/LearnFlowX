import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-10">
        {/* About Us */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4 text-sm leading-relaxed">
            LearnFlowX is a premier institution dedicated to teaching the art
            and science of music. We nurture talent, fostering a vibrant
            community of musicians.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="/courses" className="hover:text-white transition duration-300">
                Courses
              </a>
            </li>
            <li>
              <a href="/webinars" className="hover:text-white transition duration-300">
                Webinars
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="/" className="hover:text-white transition duration-300">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="/" className="hover:text-white transition duration-300">
              <FaTwitter className="text-xl" />
            </a>
            <a href="/" className="hover:text-white transition duration-300">
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p className="text-sm">📍 Pune, India</p>
          <p className="text-sm">📧 learnflowx@gmail.com</p>
          <p className="text-sm">📞 (123) 456-7890</p>
        </div>
      </div>

      <p className="text-center text-xs pt-8 border-t border-gray-700 mt-8">
        © 2025 LearnFlowX. All rights reserved.
      </p>
    </footer>
  );
}
