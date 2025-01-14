// FeaturedPhotos.js
import React, { useState, useEffect } from "react";

const FeaturedPhotos = () => {
  const photos = [
    "./pic1.jpeg",
    "/pic2.jpeg",
    "/bbis.jpeg",
    "/pashupati.jpeg",
    "/newpicfeature.jpeg",
    "/voluntereer.jpeg",
    "/blooddonationnew.jpg",
    "/group.jpeg",
    // Add more image URLs if needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const photosPerSlide = 1; // Number of photos per slide

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(photos.length / photosPerSlide) - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(photos.length / photosPerSlide) - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Automatic sliding every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center">Featured Photos</h2>
        <div className="relative overflow-hidden w-full md:w-[1500px] mx-auto">
          <div
            className="flex transition-transform ease-in-out duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(photos.length / photosPerSlide) }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="flex-shrink-0 w-full grid md:grid-cols-3 gap-4"
                style={{ width: "100%", maxWidth: "1500px" }}
              >
                {photos
                  .slice(slideIndex * photosPerSlide, (slideIndex + 1) * photosPerSlide)
                  .map((photo, photoIndex) => (
                    <div key={photoIndex} className="relative">
                      <img
                        src={photo}
                         alt={`Featured Photo ${photoIndex + 1}`}
                        className="w-full h-[200px] md:h-[300px] object-cover rounded-lg"
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-500 text-white p-3 rounded-full hover:bg-blue-700"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-500 text-white p-3 rounded-full hover:bg-blue-700"
          >
            →
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-4">
          <a href="#" className="text-gray-500 hover:text-blue-500">
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-500">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-500">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPhotos;