// EmergencySection.js
import { useState } from 'react';
import { Link } from 'react-router-dom';

const EmergencySection = () => {
    const allEmergencies = [
      {
        title: "Flood Relief: Dhulikhel Region",
        description:
          "Recent heavy rainfall has caused severe flooding in the Dhulikhel region, affecting local communities. KUYRCC volunteers are actively providing emergency assistance, temporary shelter, and essential supplies...",
        date: "23/12/2024",
        type: "Emergency Appeal",
        imageUrl: "./floodkavre.jpeg",
        fundingNeeded: "1,000,000",
        fundingReceived: "250,000",
        downloadLink: "/appeals/dhulikhel-flood",
      },
      // Additional dummy data
    ];
  
    const [visibleEmergenciesCount, setVisibleEmergenciesCount] = useState(2);
  
    const handleViewMore = () => {
      setVisibleEmergenciesCount(allEmergencies.length);
    };
  
    const handleViewLess = () => {
      setVisibleEmergenciesCount(2);
    };
  
    return (
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 px-4 py-2 bg-white inline-block mb-12">
            Latest Emergencies
          </h2>
  
          <div className="grid grid-cols-1 gap-8">
            {allEmergencies.slice(0, visibleEmergenciesCount).map((emergency, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/3 relative">
                    <img
                      src={emergency.imageUrl}
                      alt={emergency.title}
                      className="w-full h-[300px] md:h-[400px] object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1">
                      {emergency.type}
                    </div>
                  </div>
  
                  <div className="md:w-1/3 p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">{emergency.title}</h3>
                    <p className="text-gray-600 mb-4">{emergency.description}</p>
                    <Link
                      to="/read-more"
                      className="text-red-600 hover:text-red-700 font-medium"
                    >
                      Read more
                    </Link>
  
                    <div className="mt-8">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <img
                            src="/api/placeholder/24/24"
                            alt="Fund icon"
                            className="w-6 h-6 mr-2"
                          />
                          <span className="text-xl md:text-2xl font-bold">NPR {emergency.fundingNeeded}</span>
                        </div>
                        <div className="text-sm text-gray-500">Needed to help</div>
                      </div>
  
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <img
                            src="/api/placeholder/24/24"
                            alt="Fund received icon"
                            className="w-6 h-6 mr-2"
                          />
                          <span className="text-xl md:text-2xl font-bold">NPR {emergency.fundingReceived}</span>
                        </div>
                        <div className="text-sm text-gray-500">Currently funded</div>
                      </div>
  
                      <div className="space-y-4">
                        <Link
                          to={emergency.downloadLink}
                          className="block text-center bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                        >
                          Download Appeal
                        </Link>
                        <Link
                          to="/donate"
                          className="block text-center border-2 border-red-600 text-red-600 py-2 px-4 rounded hover:bg-red-50"
                        >
                          Donate Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          <div className="text-center mt-12">
            {visibleEmergenciesCount < allEmergencies.length ? (
              <button
                onClick={handleViewMore}
                className="inline-block border-2 border-blue-900 text-blue-900 px-8 py-3 hover:bg-blue-900 hover:text-white transition-colors"
              >
                View More Emergencies
              </button>
            ) : (
              <button
                onClick={handleViewLess}
                className="inline-block border-2 border-blue-900 text-blue-900 px-8 py-3 hover:bg-blue-900 hover:text-white transition-colors"
              >
                View Less
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };
  export default EmergencySection;