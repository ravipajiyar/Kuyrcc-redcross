// UpcomingPrograms.js
import { useState } from 'react';

const UpcomingPrograms = () => {
  const allPrograms = [
    {
      title: "Mental Health Awareness Program",
      description:
        "Join us for a comprehensive session on mental health awareness to better understand and address mental health challenges in our community.",
      date: "27/01/2025",
      type: "Awareness Event",
      imageUrl: "./training.jpg",
      registrationLink: "/programs/mental-health-awareness",
    },
    {
        "title": "Physical Fitness Test and Self Depression Analysis",
        "description": "Participate in a fitness test and mental health assessment to enhance your well-being, organized by the NER-GEOM '23 team.",
        "date": "02/20/2023",
        "type": "Event",
        "imageUrl": "./selftrain.jpeg",
        "registrationLink": "/programs/physical-fitness-self-depression-analysis"
      },
      
    {
      title: "Menstrual Day: Pad Making & Distribution",
      description:
        "An initiative to promote menstrual hygiene through community-driven workshops on sanitary pad making and distribution.",
      date: "28/05/2025",
      type: "Community Event",
      imageUrl: "./menstural.jpg",
      registrationLink: "/programs/menstrual-day",
    },
  ];

  const [visibleProgramsCount, setVisibleProgramsCount] = useState(2);

  const handleViewMore = () => {
    setVisibleProgramsCount(allPrograms.length);
  };

  const handleViewLess = () => {
    setVisibleProgramsCount(2);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 px-4 py-2 bg-white inline-block mb-12">
          Upcoming Programs
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {allPrograms.slice(0, visibleProgramsCount).map((program, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/3 relative">
                  <img
                    src={program.imageUrl}
                    alt={program.title}
                    className="w-full h-[300px] md:h-[400px] object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1">
                    {program.type}
                  </div>
                </div>

                <div className="md:w-1/3 p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="mt-8">
                    <div className="mb-6 text-gray-500">Date: {program.date}</div>
                    <a
                      href={program.registrationLink}
                      className="block text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {visibleProgramsCount < allPrograms.length ? (
            <button
              onClick={handleViewMore}
              className="inline-block border-2 border-blue-900 text-blue-900 px-8 py-3 hover:bg-blue-900 hover:text-white transition-colors"
            >
              View More Programs
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

export default UpcomingPrograms;