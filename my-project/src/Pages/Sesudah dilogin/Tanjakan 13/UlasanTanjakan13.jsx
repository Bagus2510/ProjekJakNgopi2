import { Footer } from "../../../Content Homepages/Footer";
import { NavbaR } from "../NavbaR";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Ulasan() {
    const [descReview, setDescReview] = useState('');
    const [msg, setMsg] = useState('');
    const [accessToken, setAccessToken] = useState('');

    useEffect(() => {
        const refreshToken = async () => {
            try {
                const response = await axios.get('http://localhost:5000/token');
                setAccessToken(response.data.accessToken);
                localStorage.setItem('accessToken', response.data.accessToken);
            } catch (error) {
                console.error("Error refreshing token:", error.response || error.message);
                setMsg("Error: Unable to refresh token. Please login again.");
            }
        };

        refreshToken();
    }, []);

    const submitUlasan = async (e) => {
        e.preventDefault();

        try {
            if (!accessToken) {
                setMsg("Error: No access token found. Please login again.");
                return;
            }

            const userName = localStorage.getItem('userName'); // Ambil nama pengguna dari localStorage

            await axios.post(
                'http://localhost:5000/ulasantanjakan13',
                { desc_review: descReview, name: userName }, // Kirim ulasan dan nama
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            setMsg("Ulasan berhasil dikirim!");
            setDescReview('');

            window.location.href = "/Tanjakan13"; // Refresh halaman
        } catch (error) {
            if (error.response?.status === 403) {
                setMsg("Session expired. Please login again.");
            } else {
                setMsg(error.response?.data?.msg || "Terjadi kesalahan");
            }
            console.error("Error submitting ulasan:", error.response || error.message);
        }
    };

    const images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUzd9TbuajPIpMEe8is3gf2KB9tjAN291zxA&s",
        "https://dzglkev4c34xb.cloudfront.net/horego.com/setia-budi/coffee-shop/satu-makna-tanjakan-13/other/af1qippgllrta1npbc_sprn0zuwdbvu-u3ui6_lm3rax.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS_bSVDqRWEsgQo2OKfkVDm67ysWlA34aClg&s",
        "https://blogger.googleusercontent.com/img/a/AVvXsEjhSkWqJiSAveawGKVP-fBGmbDuK6AQMF5-lC6Bp9YqK-x5y6FX6BmGSL7ln-C6LeDN6AiuA4j1UhGHjbc2iL6FF4lSfCVDrFJMXP-0ma_mBxQ3_pjN0QJTlM0mm_iMoYj_5GOA863OcxVn8DZqKBclnYb9U07XH4Umj1YnjtL1Qdg96smS42_5T0StBQ=w1600",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOUkvV1jNaJdnQJ-G85Wyu033owgVp58HbwLsWNl71KE3S8GEZEmGQBOZqN35xb-q5UBc&usqp=CAU"
    ];

    return (
        <html className="!scroll-smooth">
            <NavbaR />
            <div className="w-full mx-auto shadow-lg rounded-lg p-6 pt-24">
                <header className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Tanjakan 13</h1>
                </header>

                <div className="flex space-x-4 overflow-x-auto mb-6 scrollbar-none">
                    {images.map((url, index) => (
                        <img
                            key={index}
                            src={url}
                            alt={`Image ${index + 1}`}
                            className="w-96 h-64 object-cover rounded-lg shadow-md"
                        />
                    ))}
                </div>

                <form onSubmit={submitUlasan}>
                    <textarea
                        className="w-full h-24 border-gray-300 bg-gray-200 rounded-lg p-3 focus:ring focus:ring-[#A16C3C]"
                        placeholder="Ulasan"
                        value={descReview}
                        onChange={(e) => setDescReview(e.target.value)}
                    ></textarea>
                    <div className="mt-4 flex justify-end">
                        <button
                            type="submit"
                            className="bg-[#7A5130] hover:bg-[#A16C3C] text-white py-2 px-12 rounded-lg shadow-md text-xl"
                        >
                            Kirim
                        </button>
                    </div>
                    {msg && <p className="mt-2 text-center text-gray-600">{msg}</p>}
                </form>
            </div>
            <Footer />
        </html>
    );
}
