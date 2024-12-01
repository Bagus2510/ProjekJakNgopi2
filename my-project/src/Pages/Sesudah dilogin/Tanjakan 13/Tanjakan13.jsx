import { Footer } from "../../../Content Homepages/Footer";
import { Cards2 } from "../../../Elements/Cards2";
import { NavbaR } from "../NavbaR";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Tanjakan13() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('http://localhost:5000/ulasantanjakan13'); // Ambil ulasan
                setReviews(response.data);
            } catch (error) {
                console.error("Error fetching reviews:", error.response || error.message);
            }
        };

        fetchReviews();
    }, []);

    const links = {
        UlasanTanjakan13: "/UlasanTanjakan13",
    }
    return (
        <html className="!scroll-smooth">
            {/* Navbar */}
            <NavbaR />

            {/* Konten Utama */}
            <div className="min-h-screen bg-[#f5f5f5] p-6">
                {/* Nama Tempat */}
                <h1 className="text-3xl font-bold mb-4 pt-20 flex items-center">
                    Tanjakan 13
                    <button className="ml-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="w-6 h-6 text-gray-500 fill-red-500 hover:fill-red-700 transition-colors duration-200"
                        >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 20.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                    </button>
                </h1>

                {/* Gambar */}
                <div className="w-full h-64 mb-6">
                    <img
                        src="https://omnispace.blob.core.windows.net/strapi-prod/2023-06-14/13_Hangout_di_Tanjakan_13_Menikmati_Panorama_Jakarta_dari_Ketinggian_d8a539dda7.jpg"
                        alt="Tanjakan 13"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* Deskripsi, Fasilitas, dan Lokasi */}
                <div className="mb-8">
                    {/* Deskripsi */}
                    <h2 className="text-xl font-semibold mb-2">Deskripsi</h2>
                    <p className="text-gray-700 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                        finibus ridiculus pretium mi duis finibus. Est integer urna curae
                        magna, consectetur facilisi magnis. Integer erat vivamus aliquet
                        sagittis primis senectus nostra facilisi sit. Id fermentum faucibus
                        nunc; donec turpis penatibus enim. Mattis auctor arcu pretium proin
                        quisque mauris ligula ex.
                    </p>

                    {/* Fasilitas */}
                    <h2 className="text-xl font-semibold mb-2">Fasilitas</h2>
                    <ul className="list-disc list-inside mb-4 text-gray-700">
                        <li>Mushola</li>
                        <li>Wifi</li>
                        <li>Toilet</li>
                        <li>AC</li>
                        <li>2 Ruangan Meeting</li>
                        <li>Area Smoking</li>
                    </ul>

                    {/* Lokasi */}
                    <h2 className="text-xl font-semibold mb-2">Lokasi</h2>
                    <p className="text-gray-700 mb-4">Jakarta Selatan</p>
                </div>

                {/* Peta */}
                <div className="w-full h-auto mb-6 rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15865.193299281213!2d106.8285043!3d-6.2243394!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3ff1f23ad69%3A0x705078300de74b35!2sTanjakan%2013%20-%20Kuningan%20City!5e0!3m2!1sen!2sid!4v1731930531848!5m2!1sen!2sid"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps Location"
                    ></iframe>
                </div>

                {/* Ulasan */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Ulasan</h2>
                    <div className="mt-3 space-x-4 flex overflow-x-auto scrollbar-none">
                        {reviews.map((review, index) => (
                            <Cards2 key={index} name={review.name || "Anonim"} deskripsi={review.desc_review} />
                        ))}
                    </div>
                    <div>
                        <a href={links.UlasanTanjakan13}>
                            <button className="mt-6 px-4 py-2 bg-[#8b6244] text-white rounded-md hover:bg-[#754d34]">
                                Tambahkan Ulasan
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </html>
    );
}
