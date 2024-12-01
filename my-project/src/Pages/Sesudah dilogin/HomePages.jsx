import { Footer } from "../../Content Homepages/Footer";
import { NavbaR } from "./NavbaR";
import { Button } from "../../Elements/Button";
import { Cards1 } from "../../Elements/Cards1";
import { FeedbackWeb } from "../../Elements/FeedbackWeb";
import Cafe1 from "../../assets/img/Cafe.png";


export default function HomePages() {
    const links = {
        Tempatnongkrong: "/Tempatnongkrong",
        Tanjakan13: "/Tanjakan13",
        UlasanTanjakan13: "UlasanTanjakan13",
        Pengembangan: "/Pengembangan"
    }
    const feedbackData = [
        { name: "Bagus Rahmadani", ulasan: "Ulasan pertama tentang JakNgopi.", halaman: "1/3" },
        { name: "Dina Ayu", ulasan: "Tempat ngopi yang cozy dan nyaman.", halaman: "2/3" },
        { name: "Rizki Ahmad", ulasan: "Sangat direkomendasikan untuk para pecinta kopi!", halaman: "3/3" },
    ];
    return (
        <html className="!scroll-smooth">
            <NavbaR />
            <div className="font-mono">
                {/* Content 1 */}
                <div className="bg-[#D6C0B3] w-full pt-52">
                    <div className="pl-20 pb-40">
                        <h1 className="text-3xl font-semibold">Temukan tempat ngopi</h1>
                        <h1 className="text-3xl font-semibold">Terbaik di Jakarta</h1>
                        <p className="pr-96 mt-1">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt fugiat sint
                            assumenda delectus quibusdam laborum repudiandae placeat voluptas, cumque quasi
                            recusandae nihil, a pariatur rem dignissimos aut? Odit, quas. Consectetur rem eius,
                            natus totam, earum labore quaerat quae neque exercitationem laborum, necessitatibus
                            voluptas inventore provident voluptatum hic assumenda laboriosam pariatur repellendus
                            molestias numquam odio. Sapiente itaque explicabo recusandae tempore?.
                        </p>
                        <div className="mt-5">
                            <Button>
                                <a
                                    href={links.Tempatnongkrong}
                                    className="hover:text-white delay-150 duration-300"
                                >
                                    Temukan Tongkronganmu
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Content 2 */}
                <div className="bg-white w-full">
                    <div className="pl-20">
                        <h1 className="text-2xl font-semibold pt-10">Tempat Nongkrong Terbaik</h1>
                        <div className="mt-3 overflow-x-auto scrollbar-none">
                            <div className="flex space-x-4">
                                <div className="flex-none w-64">
                                    <Cards1
                                        GambarCafe="https://casaindonesia.com/lkgallery/images/qo0duq_289608960_1433462347076025_1638138754553933727_n.jpg"
                                        children="Tanjakan 13"
                                        url={links.Tanjakan13}
                                    />
                                </div>
                                <div className="flex-none w-64">
                                    <Cards1
                                        GambarCafe="https://assets-pergikuliner.com/3q8k-81apXlD6q8W5sY-_lywjIw=/312x0/smart/https://assets-pergikuliner.com/uploads/image/picture/3128684/picture-1702568275.JPG"
                                        children="Coverage Coffee & Eatery"
                                        url={links.Pengembangan}
                                    />
                                </div>
                                <div className="flex-none w-64">
                                    <Cards1
                                        GambarCafe="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfbr5R6lo5K7iTxap3nKIHSG0dZQv88GYuNA&s"
                                        children="Bagi Kopi Kayuputih"
                                        url={links.Pengembangan}
                                    />
                                </div>
                                <div className="flex-none w-64">
                                    <Cards1
                                        GambarCafe="https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1369/https://www.flokq.com/blog/wp-content/uploads/2021/01/goedkoop.jpg"
                                        children="Goedkoop"
                                        url={links.Pengembangan}
                                    />
                                </div>
                                <div className="flex-none w-64">
                                    <Cards1
                                        GambarCafe="https://femina.co.id/images/images/ShopHaus%203.jpg"
                                        children="Shopaus"
                                        url={links.Pengembangan}
                                    />
                                </div>
                                <div className="flex-none w-64">
                                    <Cards1
                                        GambarCafe="https://assets-pergikuliner.com/RGIa4aybEyoYl26y5og9CBr216s=/312x0/smart/https://assets-pergikuliner.com/uploads/image/picture/2613062/picture-1661787058.JPG"
                                        children="Sehela Kopi"
                                        url={links.Pengembangan}
                                    />
                                </div>
                                <div className="flex-none w-64">
                                    <Cards1
                                        GambarCafe="https://asset.kompas.com/data/photo/2015/06/11/2026520OTW-1780x390.jpg"
                                        children="Otw Food Street"
                                        url={links.Pengembangan}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content 3 */}
                <div className="pl-20 flex items-center justify-center min-h-screen bg-white">
                    <div className="overflow-x-auto flex space-x-40 scrollbar-none">
                        {feedbackData.map((feedback, index) => (
                            <FeedbackWeb key={index} ulasan={feedback.ulasan} halaman={feedback.halaman}>
                                {feedback.name}
                            </FeedbackWeb>
                        ))}
                    </div>
                </div>

                {/* Content 4 */}
                <div className="flex items-center justify-center min-h-screen bg-white">
                    <div className="bg-[#D7B8A5] flex flex-col md:flex-row items-center shadow-lg overflow-hidden">
                        {/* Bagian Teks */}
                        <div className="p-8 md:w-1/2">
                            <h1 className="text-[#5A3722] text-2xl md:text-3xl font-bold mb-4">
                                Temukan Tempat Nongkrong di Jakarta Dengan Mudah!
                            </h1>
                            <p className="text-[#5A3722] text-base leading-relaxed mb-6">
                                Memudahkan Anda menemukan tempat nongkrong sesuai kebutuhan, baik untuk santai
                                bersama teman, kerja remote, atau sekadar menikmati kopi khas Jakarta. Dapatkan
                                rekomendasi mingguan untuk pengalaman ngopi yang selalu baru.
                            </p>
                            <a
                                href={links.Tempatnongkrong}
                                className="text-[#5A3722] font-bold underline hover:text-[#7A5130]"
                            >
                                Lihat Coffee Shop
                            </a>
                        </div>

                        {/* Bagian Gambar */}
                        <div className="md:w-1/2">
                            <img
                                src={Cafe1}
                                alt="Coffee Shop"
                                className="object-cover w-64 h-96 ml-auto rounded-r-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </html>
    )
}