
import { FaFacebookF, FaInstagram, FaYoutube, FaChevronDown, FaLinkedinIn } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

const SocialMediaBar = () => {
    return (
      <div className="fixed right-2 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-4">
        <a
          href="https://www.facebook.com/kuyrccofficial"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
          aria-label="Facebook"
        >
          <FaFacebookF className="text-white" />
        </a>
        <a
          href="https://www.instagram.com/kuyrcc_official/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 text-white p-3 rounded-full shadow-md hover:bg-pink-600 transition duration-300 ease-in-out"
          aria-label="Instagram"
        >
          <FaInstagram className="text-white" />
        </a>
        <a
          href="https://www.youtube.com/@KUYRCC"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white p-3 rounded-full shadow-md hover:bg-red-700 transition duration-300 ease-in-out"
          aria-label="YouTube"
        >
          <FaYoutube className="text-white" />
        </a>
        <a
          href="https://www.linkedin.com/company/kathmandu-university-youth-red-cross-circle-kuyrcc/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 text-white p-3 rounded-full shadow-md hover:bg-blue-800 transition duration-300 ease-in-out"
          aria-label="YouTube"
        >
          <FaLinkedin className="text-white" />
        </a>
      </div>
    );
  };
  export default SocialMediaBar;