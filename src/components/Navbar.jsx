// Navbar.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, X, Menu } from 'lucide-react';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setFormSubmitted(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const toggleNotificationSidebar = () => {
    setIsNotificationOpen(!isNotificationOpen);
    };
    
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    }

  return (
    <div>
          <nav className="w-full py-4 px-4 md:px-8 flex justify-between items-center bg-white fixed top-0 z-10 border-b border-gray-300">
            {/* Left side - Logo */}
            <Link to="/home" className="flex items-center">
                <img src="/logokuyrcc.png" alt="KUYRCC Logo" className="h-10 md:h-12 w-auto" />
            </Link>

            {/* Hamburger Menu (Mobile) */}
              <div className="md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 text-gray-800 focus:outline-none"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </div>


            {/* Center - Search Bar (Desktop) */}
            <div className="hidden md:flex flex-1 max-w-xl mx-4 md:mx-8">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                   className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:border-red-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </form>
            </div>


            {/* Right side - Icons and Donate (Desktop) */}
            <div className="hidden md:flex items-center">
              {/* Notification Bell */}
              <button
                onClick={toggleNotificationSidebar}
                className={`p-2 text-gray-800 focus:outline-none rounded-full relative ${
                  isNotificationOpen ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'
                }`}
              >
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
              </button>

              {/* Donate Button */}
              <button
                onClick={openModal}
                className="ml-4 md:ml-6 px-4 md:px-6 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-100 transition"
              >
                Donate
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div
              className={`fixed top-0 left-0 w-full h-full bg-white z-30 transform transition-transform duration-300 ${
                  isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
              }`}
          >
              <div className="p-4 flex justify-end border-b border-gray-300">
                  <button onClick={closeMobileMenu}>
                      <X className="h-6 w-6 text-gray-800" />
                  </button>
              </div>

              <div className="p-4">
                  {/* Search Bar (Mobile) */}
                  <div className="mb-4">
                       <form onSubmit={handleSearch} className="relative">
                         <input
                           type="text"
                           placeholder="Search..."
                           value={searchQuery}
                           onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:border-red-500"
                         />
                         <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                       </form>
                    </div>


                    <div className="flex flex-col">
                           <button
                              onClick={openModal}
                               className="mb-4 px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-100 transition"
                              >
                            Donate
                          </button>

                           <button
                                onClick={toggleNotificationSidebar}
                                  className={`p-2 mb-4  text-gray-800 focus:outline-none rounded-full relative ${
                                      isNotificationOpen ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'
                                  }`}
                              >
                                  <div className="flex items-center">
                                     <Bell className="h-6 w-6 mr-2" />
                                    Notifications
                                    <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
                                   </div>
                           </button>
                       </div>

              </div>

            </div>

      {/* Notification Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-20 transform ${
          isNotificationOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 w-full md:w-80`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-300">
          <h2 className="text-lg font-bold text-gray-800">Notifications</h2>
          <button onClick={toggleNotificationSidebar}>
            <X className="h-6 w-6 text-gray-800" />
          </button>
        </div>
        <div className="p-4">
          <ul className="space-y-4">
            <li className="border-b pb-2">
              <p className="font-medium text-gray-800">New donation received!</p>
              <p className="text-sm text-gray-600">5 minutes ago</p>
            </li>
            <li className="border-b pb-2">
              <p className="font-medium text-gray-800">Event: KUYRCC Annual Meeting</p>
              <p className="text-sm text-gray-600">1 hour ago</p>
            </li>
            <li className="border-b pb-2">
              <p className="font-medium text-gray-800">Website maintenance scheduled</p>
              <p className="text-sm text-gray-600">Yesterday</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Donation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-xl relative bg-cover bg-center"
            style={{
              backgroundImage: "url('/worldred.jpg')",
              backgroundBlendMode: 'overlay',
              backgroundColor: 'rgba(255, 255, 255, 0.8)'
            }}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-800 hover:text-black"
            >
              ×
            </button>
            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <h2 className="text-xl font-bold text-red-600 text-center">Make a Donation</h2>
                <div className="space-y-2">
                  <label className="block font-medium text-gray-700">Select Category:</label>
                  <select required className="w-full border border-gray-300 rounded px-3 py-2">
                    <option value="">Choose an option</option>
                    <option value="clothes">Clothes</option>
                    <option value="relief">Relief Material</option>
                    <option value="money">Money</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium text-gray-700">Name:</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700">Contact:</label>
                  <input
                    type="tel"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700">Email Address:</label>
                  <input
                    type="email"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700">Why do you want to donate?</label>
                  <textarea
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white rounded px-4 py-2 hover:bg-red-700"
                >
                  Submit
                </button>
              </form>
            ) : (
              <div className="text-center">
                <h2 className="text-xl font-bold text-green-600">Thank you!</h2>
                <p className="text-gray-700 mt-2">
                  We shall reach you soon regarding your generous contribution.
                </p>
                <button
                  onClick={closeModal}
                  className="mt-4 bg-red-600 text-white rounded px-4 py-2 hover:bg-red-700"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;