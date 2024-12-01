import { Footer } from "../../Content Homepages/Footer";
import { NavbaR } from "./NavbaR";

export default function Pengembangan() {
    return (
        <html className="!scroll-smooth">
            <NavbaR />
            <div className="relative w-full min-h-screen font-mono">
                <div className="absolute inset-0 bg-white bg-cover bg-center opacity-65"></div>
                <div className="relative pt-64">
                    <h1 className="text-center font-bold text-4xl">Mohon Maaf</h1>
                    <p className="text-center text-2xl px-44 pb-44 mt-5 font-semibold">
                        Halaman ini sedang dalam proses pengembangan.
                    </p>
                </div>
            </div>
            <Footer />
        </html>
    )
}