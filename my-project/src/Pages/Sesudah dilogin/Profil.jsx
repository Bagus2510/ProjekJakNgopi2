import JakNgopiLogo from "../../assets/img/Screenshot 2024-11-17 135320.png";
import { NavbaR } from "./NavbaR";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Profil() {
  const [user, setUser] = useState({
    username: "",
    name: "",
    email: ""
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (storedUser) {
      setUser({
        username: storedUser.name, // atau `username` jika tersedia
        name: storedUser.name,
        email: storedUser.email
      });
    }
  }, []);

  const navigate = useNavigate();

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      navigate("/Login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <html className="!scroll-smooth">
      {/* Navbar */}
      <NavbaR />

      {/* Profil Page */}
      <div className="min-h-screen bg-[#f5ede4] flex items-center justify-center pt-[140px] pb-10 ">
        <div className="bg-[#d1b4a2] w-[350px] p-6 rounded-lg shadow-lg relative">
          {/* Foto Profil */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white w-24 h-24 rounded-full shadow-md"></div>

          {/* Form Profil */}
          <form className="mt-14">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full px-3 py-2 rounded-md bg-[#e3d9ce] text-gray-700"
                value={user.username}
                readOnly
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Nama"
                className="w-full px-3 py-2 rounded-md bg-[#e3d9ce] text-gray-700"
                value={user.name}
                readOnly
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 rounded-md bg-[#e3d9ce] text-gray-700"
                value={user.email}
                readOnly
              />
            </div>
            {/* Buttons */}
            <div className="flex justify-between items-center">
              <button
                type="button"
                className="px-4 py-2 bg-[#8b6244] text-white rounded-md hover:bg-[#754d34]"
              >
                Edit Profile
              </button>
              <button
                onClick={Logout}
                type="button"
                className="px-4 py-2 text-[#8b6244] rounded-md hover:underline"
              >
                Logout
              </button>
            </div>
          </form>
        </div>
      </div>
      <footer className="bg-[#AD9384] font-mono">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          <div className="p-10 space-y-4 pr-0 md:pr-20 lg:pr-40">
            <img src={JakNgopiLogo} alt="JakNgopi.png" className="w-32 shadow-2xl bg-white rounded-md" />
            <p className="text-[#74512D]">Temukan Tempat Nongkrong di Jakarta Dengan Mudah.</p>
          </div>
          <div className="flex flex-col pt-16">
            <h1 className="text-[#74512D] text-2xl text-right">@JakNgopi.id</h1>
          </div>
        </div>
      </footer>
    </html>
  );
}
