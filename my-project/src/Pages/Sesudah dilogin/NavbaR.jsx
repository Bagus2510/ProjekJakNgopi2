import NavbarButton from "../../Elements/NavbarButton"
import JakNgopiLogo from "../../assets/img/Screenshot 2024-11-17 135320.png"
export const NavbaR = () => {
    const links = {
        Beranda: "/LoginHomepages",
        Tempatnongkrong: "/Tempatnongkrong",
        Artikel: "/Artikel",
        TentangKami: "/About",
        Profil: "/Profil"
    }
    return (
        <html>
            <nav className="fixed w-full bg-[#AD9384] text-white p-4 flex justify-between items-center z-10 font-mono">
                {/* Logo dan navigasi kiri */}
                <div className="flex items-center">
                    <div className="mr-8">
                        <a href={links.Beranda}>
                            <img
                                src={JakNgopiLogo}
                                alt="JakNgopi.png"
                                className="w-32 shadow-2xl bg-white rounded-md"
                            />
                        </a>
                    </div>
                    <div className="flex space-x-4 ml-40">
                        <NavbarButton>
                            <a href={links.Beranda}>Beranda</a>
                        </NavbarButton>
                        <NavbarButton>
                            <a href={links.Tempatnongkrong}>Tempat</a>
                        </NavbarButton>
                        <NavbarButton>
                            <a href={links.Artikel}>Artikel</a>
                        </NavbarButton>
                        <NavbarButton>
                            <a href={links.TentangKami}>Tentang Kami</a>
                        </NavbarButton>
                    </div>
                </div>

                {/* Logo profil SVG di kanan */}
                <div className="flex items-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-white">
                        <a href={links.Profil}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-8 h-8 text-[#AD9384]"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.866 0-7 2.239-7 5v1h14v-1c0-2.761-3.134-5-7-5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </nav>
        </html>
    )
}
