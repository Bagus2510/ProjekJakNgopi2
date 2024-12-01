import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const LoginPages = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email: email,
        password: password
      });
      const { accessToken } = response.data;

      // Simpan data pengguna
      const decoded = jwtDecode(accessToken);
      localStorage.setItem("userData", JSON.stringify(decoded)); // Simpan di localStorage

      navigate("/LoginHomepages");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };


  const links = {
    Beranda: "/",
    Tempat: "/Tempatnongkrong",
    Artikel: "/Artikel",
    About: "/About",
    Login: "/Login",
    Signup: "/Daftar"
  }
  return (
    <div className="relative w-full font-mono h-screen bg-cover bg-center bg-[url('https://asset.kompas.com/crops/eGwrrOu4bPI1mxkaMO5TaDhcffM=/0x156:1000x823/1200x800/data/photo/2022/07/15/62d11e5e3f94a.png')]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>
      {/* Login Card */}
      <div className="flex items-center justify-center h-full">
        <div className="relative bg-[#D6C0B3] shadow-black shadow rounded-lg px-10 py-8 w-[350px]">
          <h1 className="text-center text-2xl font-bold mb-6 text-gray-800">LOGIN</h1>
          <form onSubmit={Auth}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                value={password} onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="text-center font-medium text-sm text-gray-700 mb-6">{msg}</p>
            <button
              type="submit"
              className="w-full py-2 bg-[#a47551] text-white rounded-md hover:bg-[#8b6244]"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-700">
            Belum punya akun?{" "}
            <a href={links.Signup} className="text-[#a47551] font-medium hover:underline">
              Daftar
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPages;
