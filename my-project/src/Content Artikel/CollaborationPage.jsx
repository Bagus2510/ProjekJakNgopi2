import React from "react";
import CafeOutdoor from "../assets/img/Cafe Outdoor.jpg"
import DigitalActivation from "../assets/img/Digital Activation.jpeg"
import SpotManagement from "../assets/img/Spot Management.jpg"
const CollaborationPage = () => {
  return (
    <div className="bg-white min-h-screen p-8 pt-32 font-mono">
      {/* Section: Header */}
      <div className="text-center mb-12">
        <h1 className="text-lg font-semibold text-[#7A5130]">
          Kerja Sama Dengan Kami
        </h1>
        <p className="mt-4 text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Selamat datang di JakNgopi, panduan utama untuk para pecinta kopi yang
          ingin menjelajahi tempat ngopi terbaik di Jakarta. Kami hadir untuk
          menghubungkan Anda dengan berbagai kafe unik yang menawarkan pengalaman
          tak terlupakan—mulai dari suasana cozy, rooftop dengan pemandangan kota,
          hingga kafe outdoor dengan nuansa alam.
        </p>
      </div>

      {/* Section: Gambar dan Teks */}
      <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
        <img
          src={CafeOutdoor}
          alt="Coffee outdoor"
          className="rounded-lg shadow-lg w-full lg:w-1/2"
        />
        <div className="lg:w-1/2">
          <h2 className="text-lg font-bold text-[#7A5130] mb-4">Spot Management</h2>
          <p className="text-gray-700 leading-relaxed">
            Optimalkan operasional Coffee Shop dengan platform manajemen yang
            efisien dan canggih. Aplikasi yang dirancang khusus untuk meningkatkan
            efisiensi dalam mempromosikan Coffee Shop di Jakarta. Telah menjadi
            pilihan utama lebih dari 100+ Coffee Shop di Jakarta.
          </p>
        </div>
      </div>

      {/* Section: Digital Activation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-6 bg-gray-100 p-6 rounded-lg shadow-lg">
          <img
            src={DigitalActivation}
            alt="Digital Activation"
            className="rounded-lg shadow-lg w-full lg:w-1/3"
          />
          <div className="lg:w-2/3">
            <h3 className="text-[#7A5130] font-bold text-lg mb-2">
              Digital Activation
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Ambil peluang untuk tingkatkan jangkauan brand melalui aktivasi
              digital. Raih kesempatan untuk memerluas jangkauan brand Anda
              dengan aktivitas digital yang inovatif. Tingkatkan brand awareness
              dan engagement.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col lg:flex-row items-center gap-6 bg-gray-100 p-6 rounded-lg shadow-lg">
          <img
            src={SpotManagement}
            alt="Spot Management"
            className="rounded-lg shadow-lg w-full lg:w-1/3"
          />
          <div className="lg:w-2/3">
            <h3 className="text-[#7A5130] font-bold text-lg mb-2">
              Spot Management
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Aplikasi yang dirancang khusus untuk meningkatkan efisiensi dalam
              mempromosikan Coffee Shop di Jakarta. Telah menjadi pilihan utama
              lebih dari 100+ Coffee Shop di Jakarta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationPage;
