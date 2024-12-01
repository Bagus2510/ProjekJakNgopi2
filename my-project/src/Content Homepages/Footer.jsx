import JakNgopiLogo from "../assets/img/Screenshot 2024-11-17 135320.png"

export const Footer = () => {
  return (
    <footer className="bg-[#AD9384] font-mono">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            <div className="p-10 space-y-4 pr-0 md:pr-20 lg:pr-40">
                <img src={JakNgopiLogo} alt="JakNgopi.png" className="w-32 shadow-2xl bg-white rounded-md" />
                <p className="text-[#74512D]">Tempukan Tempat Nongkrong di Jakarta Dengan Mudah.</p>
            </div>
            <div className="flex flex-col pt-16">
                <h1 className="text-[#74512D] text-2xl text-right">@JakNgopi.id</h1>
            </div>
        </div>
    </footer>
  )
}
