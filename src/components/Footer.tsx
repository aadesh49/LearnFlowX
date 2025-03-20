import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-10">
        {/* About Us */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4 text-sm leading-relaxed">
            LearnFlowX is a modern learning platform dedicated to sharing knowledge in technology and beyond. We foster a vibrant community of learners, empowering them with cutting-edge courses and resources to enhance their skills. 
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition duration-300">
                Home
              </Link>
            </li>
            <li>
            <Link href="/courses" className="hover:text-white transition duration-300">
            Courses
              </Link>
              
            </li>
            <li>
              <Link href="/webinars" className="hover:text-white transition duration-300">
                Webinars
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-white transition duration-300">
              <FaFacebookF className="text-xl" />
            </Link>
            <Link href="/" className="hover:text-white transition duration-300">
              <FaTwitter className="text-xl" />
            </Link>
            <Link href="/" className="hover:text-white transition duration-300">
              <FaInstagram className="text-xl" />
            </Link>
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
