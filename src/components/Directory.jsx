// Directory.js
import { useState } from "react";
import Modal from "react-modal";

// Custom modal styling
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "800px",
    maxHeight: "80%",
    overflow: "auto",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

const bloodBanks = [
  { id: 1, name: "Tribhuvan Hospital", location: "Maharajgunj", phone: "01-4412303, 01-4410911" },
  { id: 2, name: "Bal Maitri Hospital", location: "Maharajgunj", phone: "01-4418344, 01-4418468" },
  { id: 3, name: "Nepal Police Hospital", location: "Maharajgunj", phone: "01-4412303" },
  { id: 4, name: "Metro Hospital", location: "Maharajgunj", phone: "01-4740852, 01-2301023" },
  { id: 5, name: "Gangalal Hospital", location: "Bansbari", phone: "01-4371322" },
  { id: 6, name: "Paropakar Maternity Hospital", location: "Thapathali", phone: "01-4223365" },
  { id: 7, name: "Bir Hospital", location: "New Road Gate", phone: "01-4221119, 01-4221988" },
  { id: 8, name: "Civil Service Hospital", location: "Minbhawan", phone: "01-4107000" },
  { id: 9, name: "Nepal Medical College", location: "Jorpati", phone: "01-4911008" },
  { id: 10, name: "KIST Medical College & Teaching Hospital", location: "Gwarko", phone: "01-5201687, 01-5201689" },
  { id: 11, name: "Grande Hospital", location: "Tokha", phone: "01-5159266, 01-5159267" },
  { id: 12, name: "HAMS Hospital", location: "Dhumbarahi", phone: "01-4516400" },
  { id: 13, name: "Frontline Hospital", location: "Old Baneshwor", phone: "01-4476223" },
  { id: 14, name: "Pulchowk Blood Bank", location: "Pulchowk", phone: "01-5521043" },
  { id: 15, name: "Nepal Mediciti Hospital", location: "Nakkhu", phone: "01-4217766" },
  { id: 16, name: "Patan Hospital", location: "Patan", phone: "01-5522266" },
  { id: 17, name: "Bhaktapur Blood Bank", location: "Bhaktapur", phone: "01-6612266, 01-6613133" },
  { id: 18, name: "Nobel Hospital", location: "Sinamangal", phone: "01-4110842" },
  { id: 19, name: "Nepal Red Cross Society Central Office", location: "Sital Marga", phone: "01-4288485, 01-4288486" },
  { id: 20, name: "Lalitpur Red Cross Society", location: "Pulchowk", phone: "01-5521033" },
  { id: 21, name: "Home Center Blood Bank", location: "Mahalaxmi", phone: "01-4221322" },
  { id: 22, name: "Birendra Army Hospital Blood Bank", location: "Chhauni", phone: "01-4271943" },
  { id: 23, name: "Dhulikhel Hospital", location: "Dhulikhel", phone: "01-4904974" },
];

const Directory = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="py-20">
      <div className="container mx-auto px-8">
        <div className="bg-gray-100 p-6 md:p-10 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 text-center">Directory</h2>
          <p className="text-gray-700 mb-8 text-center">
            Explore blood banks near you with contact details for emergencies.
          </p>
          <div className="text-center">
            <button
              onClick={openModal}
              className="bg-red-700 hover:bg-red-600 text-white font-bold py-3 px-6 rounded"
            >
              View Blood Bank Directory
            </button>
          </div>
        </div>
      </div>

      {/* Modal for displaying blood bank details */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Blood Bank Directory"
        ariaHideApp={false}
      >
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600 font-bold text-xl"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">Blood Bank Directory</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-300 px-2 py-2 md:px-4">No.</th>
                <th className="border border-gray-300 px-2 py-2 md:px-4">Name</th>
                <th className="border border-gray-300 px-2 py-2 md:px-4">Location</th>
                <th className="border border-gray-300 px-2 py-2 md:px-4">Contact</th>
              </tr>
            </thead>
            <tbody>
              {bloodBanks.map((bank) => (
                <tr key={bank.id}>
                  <td className="border border-gray-300 px-2 py-2 md:px-4 text-center">{bank.id}</td>
                  <td className="border border-gray-300 px-2 py-2 md:px-4">{bank.name}</td>
                  <td className="border border-gray-300 px-2 py-2 md:px-4">{bank.location}</td>
                  <td className="border border-gray-300 px-2 py-2 md:px-4">{bank.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Modal>
    </div>
  );
};

export default Directory;