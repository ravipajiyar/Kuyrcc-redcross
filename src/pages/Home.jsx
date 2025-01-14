// Homepage.js
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar";
import NavigationMenu from "../components/NavigationMenu";
import SocialMediaBar from "../components/SocialMediaBar";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import StatisticsSection from "../components/StatisticsSection";
import NewsSection from "../components/NewsSection";
import EmergencySection from "../components/EmergencySection";
import FeaturedReport from "../components/FeaturedReport";
import Directory from "../components/Directory";
import GetInvolvedSection from "../components/GetInvolvedSection";
import FeaturedPhotos from "../components/FeaturedPhotos";
import UpcomingPrograms from "../components/UpcomingPrograms";

const Modal = ({ isVisible, onClose, currentNotice }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-white rounded-lg shadow-lg w-11/12 max-w-2xl p-6 relative"
        style={{ maxHeight: "85vh" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none text-2xl"
        >
          × {/* Cross Mark */}
        </button>
        {/* Modal Content */}
        <h2 className="text-xl font-bold text-blue-900 mb-4 text-center">
          Important Notice
        </h2>
        <img
          src={currentNotice}
          alt={`Notice`}
          className="w-full rounded-lg object-contain max-h-[75vh]"
        />
      </div>
    </div>
  );
};

const Homepage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);

  const notices = [
    "/notice1.jpeg", // Replace with the actual path to the first notice
    "/notice2.jpeg", // Replace with the actual path to the second notice
  ];

  useEffect(() => {
    // Show the modal when the homepage loads or reloads
    setIsModalVisible(true);
  }, []);

  const handleCloseModal = () => {
    setIsModalVisible(false);

    // Show the next notice after closing the current one
    if (currentNoticeIndex + 1 < notices.length) {
      setTimeout(() => {
        setCurrentNoticeIndex((prevIndex) => prevIndex + 1);
        setIsModalVisible(true);
      }, 300); // Delay for smoother transition
    }
  };

  return (
    <div className="min-h-screen">
      {/* Social Media Bar */}
      <SocialMediaBar />

      {/* Navbar */}
      <Navbar />

      {/* Navigation Menu */}
      <NavigationMenu />

      {/* Popup Modal */}
      <Modal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        currentNotice={notices[currentNoticeIndex]}
      />

      {/* Main Content */}
      <main>
        <HeroSection />
        <StatisticsSection />
        <NewsSection />
        <EmergencySection />
        <UpcomingPrograms />
        <FeaturedReport />
        <Directory />
        <GetInvolvedSection />
        <FeaturedPhotos />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;