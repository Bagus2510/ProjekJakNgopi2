import NavbarButton from "../Elements/NavbarButton"
import LoginandSignup from "../Elements/LogindanSignup"
import JakNgopiLogo from "../assets/img/Screenshot 2024-11-17 135320.png"
export const Navbar = () => {
    const links = {
      Beranda: "/",
      Tempat: "/Tempatnongkrong",
      Artikel: "/Artikel",
      About: "/About",
      Login: "/Login",
      Signup: "/Daftar"
    }
    return (
      <nav className="fixed w-full bg-[#AD9384] text-white p-4 flex justify-start z-10 font-mono">
        <div className="mr-8">
          <a href={links.Beranda}><img src={JakNgopiLogo} alt="JakNgopi.png" className="w-32 shadow-2xl bg-white rounded-md" /></a>
        </div>
        <div className="flex ml-64 space-x-4">
          <NavbarButton><a href={links.Beranda}>Beranda</a></NavbarButton>
          <NavbarButton><a href={links.Login}>Tempat</a></NavbarButton>
          <NavbarButton><a href={links.Login}>Artikel</a></NavbarButton>
          <NavbarButton><a href={links.Login}>Tentang Kami</a></NavbarButton>
        </div>
        <div className="flex ml-auto space-x-2">
          <LoginandSignup><a className="text-[#74512D] hover:text-white delay-150 duration-300" href={links.Login}>Masuk</a></LoginandSignup>
          <LoginandSignup><a className="text-[#74512D] hover:text-white delay-150 duration-300" href={links.Signup}>Daftar</a></LoginandSignup>
        </div>
      </nav>
    )
  }