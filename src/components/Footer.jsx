// Footer.js
import { FaFacebookF, FaInstagram, FaYoutube, FaChevronDown, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

const DropdownSection = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div className="relative">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="flex items-center justify-between w-full text-lg font-semibold text-blue-900 mb-2"
        >
          {title}
          <FaChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        <hr className="border-gray-300 mb-2" />
        {isOpen && (
          <div className="bg-white shadow-lg rounded-md p-4 absolute z-10 w-full">
            {items.map((item, index) => (
              <a 
                key={index}
                href={item.link} 
                className="block py-2 text-gray-700 hover:text-blue-900"
              >
                {item.text}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  };
const Footer = () => {
    const staffLinks = [
      { text: "Staff Portal", link: "#" },
      { text: "Resources", link: "#" },
      { text: "Training", link: "#" }
    ];
  
    const journalistLinks = [
      { text: "Press Releases", link: "#" },
      { text: "Media Kit", link: "#" },
      { text: "Contact PR", link: "#" }
    ];
  
    const donorLinks = [
      { text: "Make a Donation", link: "#" },
      { text: "Impact Reports", link: "#" },
      { text: "Financial Statements", link: "#" }
    ];
  
    return (
      <footer className="bg-gray-100 py-16">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-xl font-bold text-blue-900 mb-4">About the KUYRCC</h2>
              <p className="text-gray-700">
                The KUYRCC is Nepal's leading youth-led humanitarian network, working to build resilient communities, strengthen disaster preparedness, and promote sustainable development through local initiatives and community engagement.
              </p>
            </div>
  
            <div className="space-y-6">
              <DropdownSection title="For staff" items={staffLinks} />
              <DropdownSection title="For journalists" items={journalistLinks} />
              <DropdownSection title="For donors" items={donorLinks} />
            </div>
  
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Follow us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-900 text-white p-2 rounded-full hover:bg-blue-700">
                    <FaFacebookF size={20} />
                  </a>
                  <a href="#" className="bg-blue-900 text-white p-2 rounded-full hover:bg-blue-700">
                    <FaInstagram size={20} />
                  </a>
                  <a href="#" className="bg-blue-900 text-white p-2 rounded-full hover:bg-blue-700">
                    <FaYoutube size={20} />
                  </a>
                 <a href="#" className="bg-blue-900 text-white p-2 rounded-full hover:bg-blue-700">
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
              <button className="border-2 border-blue-900 text-blue-900 px-6 py-2 font-semibold hover:bg-blue-900 hover:text-white transition-colors rounded-md">
                Donate
              </button>
            </div>
          </div>
  
          <div className="mt-12 pt-6 border-t border-gray-300">
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span>© 2024 - KUYRCC</span>
              <a href="#" className="hover:text-blue-900">Accessibility statement</a>
              <span>|</span>
              <a href="#" className="hover:text-blue-900">Sitemap</a>
              <span>|</span>
              <a href="#" className="hover:text-blue-900">Disclaimer</a>
              <span>|</span>
              <a href="#" className="hover:text-blue-900">Fraud notice</a>
              <span>|</span>
              <a href="#" className="hover:text-blue-900">Contact us</a>
              <span>|</span>
              <a href="#" className="hover:text-blue-900">Report a concern</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  export default Footer;