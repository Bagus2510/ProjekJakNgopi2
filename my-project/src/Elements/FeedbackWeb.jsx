export const FeedbackWeb = (props) => {
    const { children, ulasan, halaman } = props
  return (
    <div className="bg-white flex items-center justify-center min-h-screen font-mono">
        <div className="relative bg-[#7A5130] w-[800px] h-[400px] rounded-l-lg rounded-r-full shadow-lg p-8">
            <div className="text-white text-2xl pt-32">
                <h1 className="font-bold">JakNgopi Menurut</h1>
                <h1 className="font-bold">Mereka</h1>
            </div>
            <div className="absolute bottom-20 right-[-96px] bg-[#D4B8A5] w-[400px] h-[220px] rounded-t-full rounded-r-full shadow-lg flex items-center p-6">
                <div className="ml-4">
                    <h2 className="text-black font-bold text-lg">{children}</h2>
                    <p className="text-gray-600 text-sm">Mahasiswa</p>
                    <p className="text-gray-800 text-xs mt-2 leading-relaxed">
                        {ulasan}
                    </p>
                    <div className="absolute bottom-4 right-16 text-sm text-black">
                        <span>{halaman}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
