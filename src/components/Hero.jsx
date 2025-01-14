// HeroSection.js
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HeroSection = () => {
    const events = [
      {
        title: "KU Blood Donation Drive: Be a Hero, Save Lives",
        description:
          "Join us for the upcoming blood donation camp at Kathmandu University Central Campus. Your single donation can save up to three lives. Together, we can make a difference in our community.",
        image: "/blooddonationnew.jpg",
        buttonText: "Register Now",
      },
      {
        title: "Warm Clothes Donation Drive - Dolakha",
        description:
          "Join KUYRCC in spreading warmth and awareness! Our successful donation drive in Doramba, Ramechhap, brought smiles and comfort to the local community. Together, let’s continue making a difference.",
        image: "/awareness.jpeg",
        buttonText: "Learn More",
      },
      
      {
        title: "Flood Relief Program - Kavre Region",
        description:
          "In response to the recent severe flooding in the Kavre districts region, KUYRCC volunteers are providing emergency assistance, temporary shelter, and essential supplies to support affected communities. Join us in making an impact.",
        image: "./flood2.jpg",
        classNames: "w-full h-auto",
        buttonText: "Support Now",
      }
      
    ];
  
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
       arrows: false,
    };
  
    return (
      <div className="relative h-[400px] md:h-[600px] w-full">
        <Slider {...sliderSettings}>
          {events.map((event, index) => (
            <div key={index} className="relative h-[400px] md:h-[600px] w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/50 to-blue-900/50">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover mix-blend-overlay"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-900/90">
                <div className="container mx-auto h-full flex items-center justify-end px-8">
                  <div className="max-w-lg text-white">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{event.title}</h1>
                    <p className="text-lg mb-6">{event.description}</p>
                    <button className="bg-transparent border-2 border-white text-white px-6 py-2 hover:bg-white hover:text-blue-900 transition-colors">
                      {event.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  export default HeroSection;