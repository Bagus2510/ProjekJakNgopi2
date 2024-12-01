export const Cards2 = (props) => {
    const { name = "Bagus Rahmadani", deskripsi = "Lorem, ipsum dolor sit amet consectetur adipisicing elit." } = props;
  
    return (
      <div className="w-72 rounded-lg bg-[#74512D] shadow-lg p-6 flex flex-col items-center">
        {/* Foto Profil */}
        <div className="bg-white w-24 h-24 rounded-full shadow-md mb-6 flex items-center justify-center">
          <span className="text-gray-400 font-bold">Foto</span>
        </div>
  
        {/* Nama */}
        <h1 className="font-semibold text-lg text-white text-center mb-4">{name}</h1>
  
        {/* Deskripsi */}
        <p className="text-white text-center leading-relaxed">{deskripsi}</p>
      </div>
    );
  };
  