// FeaturedReport.js
import { useState } from 'react';

const FeaturedReport = () => {
  const reports = [
    {
      title: "KUYRCC Annual Report 2023",
      description:
        "The KUYRCC Annual Report 2023 highlights our milestones, challenges, and achievements in building resilient communities through youth-led initiatives and strategic partnerships.",
      image: "/annualrept.png",
      file: "/annualreport.pdf", // Replace with actual file URL
    },
    {
      title: "Disaster Preparedness Initiatives",
      description:
        "This report delves into KUYRCC's disaster preparedness initiatives, detailing efforts to train youth and local communities for emergency response and recovery operations.",
      image: "/disaster.jpg",
      file: "/path/to/disaster-report.pdf", // Replace with actual file URL
    },
    {
      title: "Youth-Led Environmental Actions",
      description:
        "Explore KUYRCC’s impactful youth-led environmental actions, focusing on sustainable practices and advocacy for climate change mitigation in Nepal.",
      image: "/youth.jpeg",
      file: "/path/to/environment-report.pdf", // Replace with actual file URL
    },
    {
      title: "Community Development Projects",
      description:
        "A comprehensive overview of KUYRCC's community development projects aimed at empowering marginalized communities through education and resources.",
      image: "/community.jpg",
      file: "/path/to/community-development.pdf", // Replace with actual file URL
    },
    {
      title: "Emergency Relief Efforts",
      description:
        "This report highlights the emergency relief efforts led by KUYRCC during recent natural disasters, providing immediate support to affected communities.",
      image: "/emergencyrelief.jpg",
      file: "/path/to/emergency-relief.pdf", // Replace with actual file URL
    },
    {
      title: "Sustainable Energy Projects",
      description:
        "Detailed insights into KUYRCC's efforts to promote renewable energy solutions and sustainable practices for energy-efficient communities.",
      image: "/sustainable.jpg",
      file: "/path/to/energy-projects.pdf", // Replace with actual file URL
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + 3 < reports.length) {
      setStartIndex(startIndex + 3);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 3);
    }
  };

  return (
    <section className="py-16 bg-gray-200 relative">
      <div className="container mx-auto px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8">Featured Reports</h2>
        <div className="relative flex items-center">
          {/* Left Button */}
          <button
            onClick={handlePrev}
             className={`absolute left-0 transform -translate-x-1/2 bg-blue-900 text-white rounded-full p-4 ${
              startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={startIndex === 0}
          >
            ‹ {/* Left Arrow */}
          </button>

          {/* Reports Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-1">
            {reports.slice(startIndex, startIndex + 3).map((report, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
                  <img
                    src={report.image}
                    alt={report.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{report.title}</h3>
                <p className="text-gray-700 mb-4">{report.description}</p>
                <a
                  href={report.file}
                  download
                  className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                >
                  Download Now
                </a>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={handleNext}
            className={`absolute right-0 transform translate-x-1/2 bg-blue-900 text-white rounded-full p-4 ${
              startIndex + 3 >= reports.length
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={startIndex + 3 >= reports.length}
          >
            › {/* Right Arrow */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedReport;