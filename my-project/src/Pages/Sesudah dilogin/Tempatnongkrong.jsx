import React, { useState } from "react";
import { Footer } from "../../Content Homepages/Footer";
import { NavbaR } from "./NavbaR";

export default function Tempatnongkrong() {
  const coffeeShops = [
    {
      id: 1,
      name: "Tanjakan 13",
      city: "Jakarta Selatan",
      image: "https://th.bing.com/th/id/OIP.nsEpmMr9b8t3xq9MVFKo6wHaFj?rs=1&pid=ImgDetMain",
    },
    {
      id: 2,
      name: "Sehela Kopi",
      city: "Jakarta Selatan",
      image: "https://assets-pergikuliner.com/RGIa4aybEyoYl26y5og9CBr216s=/312x0/smart/https://assets-pergikuliner.com/uploads/image/picture/2613062/picture-1661787058.JPG",
    },
    {
      id: 3,
      name: "Shophaus",
      city: "Jakarta Pusat",
      image: "https://femina.co.id/images/images/ShopHaus%203.jpg",
    },
    {
      id: 4,
      name: "Otw Food Street",
      city: "Jakarta Utara",
      image: "https://asset.kompas.com/data/photo/2015/06/11/2026520OTW-1780x390.jpg",
    },
    {
      id: 5,
      name: "Coverage Coffee & Eatery",
      city: "Jakarta Timur",
      image: "https://assets-pergikuliner.com/3q8k-81apXlD6q8W5sY-_lywjIw=/312x0/smart/https://assets-pergikuliner.com/uploads/image/picture/3128684/picture-1702568275.JPG",
    },
    {
      id: 6,
      name: "Bagi Kopi Kayuputih",
      city: "Jakarta Timur",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfbr5R6lo5K7iTxap3nKIHSG0dZQv88GYuNA&s",
    },
    {
      id: 7,
      name: "Kedai Lante Satu",
      city: "Jakarta Barat",
      image: "https://cove-blog-id.sgp1.cdn.digitaloceanspaces.com/cove-blog-id/2023/09/Kedai-Lante-Satu.webp",
    },
    {
      id: 8,
      name: "Toko Kopi TUKU",
      city: "Jakarta Selatan",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3A8B9AcYNvXjwGRjzKp2hQeGlAhCpgHgMog&s",
    },
    {
      id: 9,
      name: "Goedkoop",
      city: "Jakarta Pusat",
      image: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1369/https://www.flokq.com/blog/wp-content/uploads/2021/01/goedkoop.jpg",
    },
  ];

  const [selectedCity, setSelectedCity] = useState("");
  const [filteredShops, setFilteredShops] = useState(coffeeShops);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSearch = () => {
    if (selectedCity) {
      setFilteredShops(
        coffeeShops.filter((shop) => shop.city === selectedCity)
      );
    } else {
      setFilteredShops(coffeeShops);
    }
  };

  const links = {
    Tanjakan13: "/Tanjakan13",
    SenjaCoffeeShop: "/Pengembangan",
    FarceCoffeeShop: "/Pengembangan",
    ForeCoffeeShop: "/Pengembangan",
    TreeCoffeeShop: "/Pengembangan",
    PeakCoffeeShop: "/Pengembangan",
    RoseCoffeeShop: "/Pengembangan",
    EarthyCoffeeShop: "/Pengembangan",
    CentralCoffeeShop: "/Pengembangan",
  };

  return (
    <html className="!scroll-smooth">
      <NavbaR />
      <div className="bg-white min-h-screen flex flex-col items-center p-6 pt-24">
        <div className="flex items-center gap-4 mb-6">
          <select
            value={selectedCity}
            onChange={handleCityChange}
            className="px-4 py-2 border rounded-lg text-gray-600 focus:ring-2 focus:ring-[#7A5130]"
          >
            <option value="">Kota</option>
            <option value="Jakarta Barat">Jakarta Barat</option>
            <option value="Jakarta Selatan">Jakarta Selatan</option>
            <option value="Jakarta Pusat">Jakarta Pusat</option>
            <option value="Jakarta Utara">Jakarta Utara</option>
            <option value="Jakarta Timur">Jakarta Timur</option>
          </select>
          <button
            onClick={handleSearch}
            className="px-6 py-2 bg-[#7A5130] text-white rounded-lg hover:bg-[#5A3722]"
          >
            Cari
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {filteredShops.map((shop) => (
            <div
              key={shop.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={shop.image}
                alt={shop.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#5A3722]">{shop.name}</h3>
                <p className="text-sm text-gray-500">{shop.city}</p>
                <a
                  href={links[shop.name.replace(/\s+/g, '').replace(/[^a-zA-Z0-9]/g, '')]}
                  className="mt-4 inline-block px-4 py-2 bg-[#7A5130] text-white rounded-lg text-sm hover:bg-[#5A3722]"
                >
                  Lihat Coffee Shop
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </html>
  );
}
