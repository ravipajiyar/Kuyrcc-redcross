// GetInvolvedSection.js
import { Link } from 'react-router-dom';

const GetInvolvedSection = () => {
    const involvementOptions = [
        {
            icon: (
                <img 
                    src="/volt.jpeg" // Replace with the actual path to your volunteer logo
                    alt="Volunteer Icon" 
                    className="w-16 h-16"
                />
            ),
            title: "Volunteer with us",
            description: "Want to save lives and change minds? Join our KUYRCC family!",
            link: "/volunteer",
            bgColor: "bg-red-50" // Light red background for volunteering
        },
        {
            icon: (
                <img 
                    src="/learn.jpeg" // Replace with the actual path to your learn logo
                    alt="Learn Icon" 
                    className="w-16 h-16"
                />
            ),
            title: "Learn with us",
            description: "Discover our wide range of humanitarian learning and training opportunities at KU.",
            link: "/learn",
            bgColor: "bg-blue-50" // Light blue background for learning
        },
        {
            icon: (
                <img 
                    src="/partner.jpeg" // Replace with the actual path to your partner logo
                    alt="Partner Icon" 
                    className="w-16 h-16"
                />
            ),
            title: "Partner with us",
            description: "Find out how your organization can support KUYRCC and its humanitarian initiatives.",
            link: "/partner",
            bgColor: "bg-green-50" // Light green background for partnership
        },
    ];

    return (
        <div className="bg-gray-100 py-20">
            <div className="container mx-auto px-8">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-12 text-center">Get Involved with KUYRCC</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {involvementOptions.map((option, index) => (
                        <div 
                            key={index} 
                            className={`${option.bgColor} bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300`} // Dynamic background color
                        >
                            <div className="mb-6 bg-gray-100 w-24 h-24 mx-auto flex items-center justify-center rounded-full">
                                {option.icon}
                            </div> {/* Uniform background for icon */}
                            <h3 className="text-xl font-semibold text-blue-900 mb-4">{option.title}</h3>
                            <p className="text-gray-700 mb-6">{option.description}</p>
                            <Link
                                to={option.link}
                                className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                            >
                                {option.title.startsWith("Learn") ? "View our learning" : 
                                 option.title.startsWith("Partner") ? "Learn more" : "Become a volunteer"}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GetInvolvedSection;