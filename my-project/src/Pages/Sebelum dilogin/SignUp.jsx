import { useState } from "react";
import { Footer } from "../../Content Homepages/Footer";
import { Navbar } from "../../Content Homepages/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Register = async(e) =>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users',{
                username: username,
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            })
            navigate("/Login");
        } catch (error) {
            if(error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    const links = {
        Beranda: "/",
        Tempat: "/Tempatnongkrong",
        Artikel: "/Artikel",
        About: "/About",
        Login: "/Masuk",
        Signup: "/Daftar",
    };

    return (
        <html className="!scroll-smooth">
            <Navbar />
            {/* Register Page Content */}
            <div className="relative font-mono w-full min-h-screen bg-cover bg-center bg-[url('https://asset.kompas.com/crops/eGwrrOu4bPI1mxkaMO5TaDhcffM=/0x156:1000x823/1200x800/data/photo/2022/07/15/62d11e5e3f94a.png')]">
                {/* Overlay */}
                <div className="absolute inset-0 bg-white bg-opacity-50"></div>
                {/* Register Card */}
                <div className="flex items-center justify-center h-full pt-[120px] pb-[55px]">
                    {/* Tambahkan padding-top sesuai tinggi navbar */}
                    <div className="relative bg-[#D6C0B3] shadow-black shadow rounded-lg px-8 py-6 w-[320px]">
                        <h1 className="text-center text-2xl font-bold mb-6 text-gray-800">Daftar</h1>
                        <form onSubmit={ Register }>
                            <div className="mb-4">
                                <label
                                    htmlFor="username"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                                    value={username} onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Nama
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                                    value={name} onChange={(e) => setName(e.target.value)}
                                />
                            </div>
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
                            <div className="mb-4">
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
                            <div className="mb-6">
                                <label
                                    htmlFor="confirmPassword"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Konfirmasi Password
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                                    value={confPassword} onChange={(e) => setConfPassword(e.target.value)}
                                />
                            </div>
                            <p className="text-center text-sm text-gray-700 font-medium mb-6">{msg}</p>
                            <button
                                type="submit"
                                className="w-full py-2 bg-[#a47551] text-white rounded-md hover:bg-[#8b6244]"
                            >
                                Daftar
                            </button>
                        </form>
                        <p className="mt-4 text-center text-sm text-gray-700">
                            Sudah punya akun?{" "}
                            <a href={links.Login} className="text-[#a47551] font-medium hover:underline">
                                Login
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </html>
    );
}
