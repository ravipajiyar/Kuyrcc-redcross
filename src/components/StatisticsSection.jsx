import { FaSchool, FaHandsHelping } from "react-icons/fa";
import { useState } from 'react';

const StatisticsSection = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isMembershipDialogOpen, setIsMembershipDialogOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
  
    const handleDialogOpen = () => {
        setIsDialogOpen(true);
    };
  
    const handleDialogClose = () => {
        setIsDialogOpen(false);
    };

    const handleMembershipDialogOpen = () => {
        setIsMembershipDialogOpen(true);
    };

    const handleMembershipDialogClose = () => {
        setIsMembershipDialogOpen(false);
    };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
  
    const availablePositions = [
        { name: "Media Head", link: "https://sample-google-form-link.com/media-head" },
        { name: "Developer Head", link: "https://sample-google-form-link.com/developer-head" },
        { name: "Sub Developer Head", link: "https://sample-google-form-link.com/sub-developer-head" },
    ];

    const membershipLinks = {
        new: "https://sample-google-form-link.com/new-membership",
        renew: "https://sample-google-form-link.com/renew-membership"
    };
  
    return (
        <div className="container mx-auto py-16 px-8 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h2 className="text-2xl font-bold mb-4">
                    The Kathmandu University Youth Red Cross Circle (KUYRCC) is one of the most active youth humanitarian networks in Nepal.
                </h2>
                <p className="text-gray-700 mb-8">
                    Our circle supports humanitarian activities across all 6+ schools of Kathmandu University, bringing together more than 500 dedicated student volunteers for the service of humanity.
                </p>
                {isExpanded && (
                    <p className="text-gray-700 mb-4">
                        We organize various programs, including blood donation camps, awareness campaigns, and disaster relief activities. Our mission is to inspire young minds to contribute to society meaningfully and compassionately.
                    </p>
                )}
                <button
                    onClick={toggleExpand}
                    className="border-2 border-blue-900 text-blue-900 px-6 py-2 hover:bg-blue-900 hover:text-white transition-colors"
                >
                    {isExpanded ? "Show Less" : "Learn More"}
                </button>
            </div>
            <div className="lg:w-1/2 flex flex-col items-center lg:items-end space-y-6">
                <div className="flex space-x-12">
                    <div className="flex flex-col items-center">
                        <span className="text-5xl font-bold text-blue-900">7+</span>
                        <div className="flex items-center mt-2">
                            <FaSchool className="w-8 h-8 text-gray-600" />
                            <span className="ml-2 text-gray-600">KU Schools</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-5xl font-bold text-red-600">2000+</span>
                        <div className="flex items-center mt-2">
                            <FaHandsHelping className="w-8 h-8 text-gray-600" />
                            <span className="ml-2 text-gray-600">Volunteers</span>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-4 mt-10">
                    <button
                        onClick={handleMembershipDialogOpen}
                        className="border-2 border-blue-900 text-blue-900 px-6 py-2 hover:bg-blue-900 hover:text-white transition-colors"
                    >
                        Get Membership
                    </button>
                    <button
                        onClick={handleDialogOpen}
                        className="border-2 border-red-600 text-red-600 px-6 py-2 hover:bg-red-600 hover:text-white transition-colors"
                    >
                        Apply for Positions
                    </button>
                </div>
            </div>
  
            {isDialogOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
                        <h3 className="text-xl font-bold mb-4">Available Positions</h3>
                        <ul className="space-y-2">
                            {availablePositions.map((position, index) => (
                                <li key={index}>
                                    <a
                                        href={position.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block border border-gray-300 p-3 rounded hover:bg-gray-100 transition"
                                    >
                                        {position.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={handleDialogClose}
                            className="mt-4 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {isMembershipDialogOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
                        <h3 className="text-xl font-bold mb-4">Membership Options</h3>
                        <div className="space-y-4">
                            <button
                                onClick={() => window.open(membershipLinks.new, "_blank")}
                                className="block w-full border-2 border-blue-900 text-blue-900 p-3 rounded hover:bg-blue-900 hover:text-white transition-colors"
                            >
                                Get New Membership
                            </button>
                            <button
                                onClick={() => window.open(membershipLinks.renew, "_blank")}
                                className="block w-full border-2 border-green-600 text-green-600 p-3 rounded hover:bg-green-600 hover:text-white transition-colors"
                            >
                                Renew Membership
                            </button>
                        </div>
                        <button
                            onClick={handleMembershipDialogClose}
                            className="mt-4 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StatisticsSection;
