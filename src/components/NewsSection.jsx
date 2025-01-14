// NewsSection.js
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NewsSection = () => {
    const allNewsItems = [
      {
        type: 'Article',
        date: '13/12/2024',
        title: 'KUYRCC participates in Climate and Youth Summit 2024',
        image: './climatesummit.jpeg', // Replace this placeholder with the actual path of the uploaded image
        link: '/news/climate-youth-summit-2024',
        description: 'The fourth Red Cross Red Crescent Youth and Climate Summit focused on youth-led innovations and solutions to tackle climate challenges. KUYRCC participation widened its global reach and enriched its experience in addressing climate issues.',
      },
      {
        type: 'Article',
        date: '23/08/2024',
        title: 'Healthcare Waste Management Training by KUYRCC',
        image: './healtcare.jpeg', // Replace this placeholder with the actual path of the uploaded image
        link: '/news/healthcare-waste-management',
        description: 'KUYRCC conducted a one-day Healthcare Waste Management Training on August 23 at NRCS National Training Center. The program provided professional training to healthcare workers around Banepa, emphasizing proper medical waste disposal techniques. Special thanks to HECAF 360 and NRCS Banepa for their guidance and support.',
      },
      {
        type: 'Article',
        date: '15/09/2024', // Adjust the date as needed
        title: 'KUYRCC Hosts Physical Fitness and Self-Depression Screening Program',
        image: './selftrain.jpeg', // Replace this placeholder with the actual path of the uploaded image
        link: '/news/fitness-and-depression-screening',
        description: 'KUYRCC organized a comprehensive program focusing on physical fitness and self-depression screening. The initiative aimed to promote mental and physical well-being among participants, providing valuable insights and resources for better health management. A heartfelt thanks to all participants and facilitators for making this event a success.',
      },
      
      {
        type: 'Article',
        date: '05/12/2024', // Adjust the date as needed
        title: 'KUYRCC Donates Warm Clothes to Clothing Bank Nepal',
        image: './warmclothes.jpeg', // Replace this placeholder with the actual path of the uploaded image
        link: '/news/warm-clothes-handover',
        description: 'KUYRCC successfully handed over warm clothes to Clothing Bank Nepal as part of our winter relief campaign. This initiative aims to support underprivileged communities during the harsh winter months, ensuring they stay warm and safe. We extend our gratitude to everyone who contributed and made this noble cause possible.',
      },
      
      {
        type: 'Press release',
        date: '17/12/2024',
        title: 'New blood donation app launched by KUYRCC',
        image: './warmclothes.jpeg',
        link: '/news/blood-donation-app'
      },
    ];
  
    const [visibleNewsCount, setVisibleNewsCount] = useState(4);
  
    const handleViewMore = () => {
      setVisibleNewsCount(allNewsItems.length);
    };
  
    const handleViewLess = () => {
      setVisibleNewsCount(4);
    };
  
    return (
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 px-4 py-2 bg-white inline-block mb-12">
            Latest news
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allNewsItems.slice(0, visibleNewsCount).map((item, index) => (
              <Link to={item.link} key={index} className="bg-white group hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-36 md:h-48 object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-blue-900 text-white px-3 py-1 text-sm">
                    {item.type}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-2">{item.date}</p>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
  
          <div className="text-center mt-12">
            {visibleNewsCount < allNewsItems.length ? (
              <button 
                onClick={handleViewMore}
                className="inline-block border-2 border-blue-900 text-blue-900 px-8 py-3 hover:bg-blue-900 hover:text-white transition-colors"
              >
                View More News, Press Releases & Speeches
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
  export default NewsSection;