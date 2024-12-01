import UlasanTanjakan13 from "../models/UlasanTanjakan13Model.js";
import Users from "../models/userModel.js";

export const addUlasan = async (req, res) => {
    try {
        const { desc_review } = req.body;

        // Cari pengguna berdasarkan token (req.email diambil dari middleware VerifyToken)
        const user = await Users.findOne({
            where: { email: req.email }
        });

        if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });

        // Tambahkan ulasan ke database
        await UlasanTanjakan13.create({
            name: user.name,
            desc_review: desc_review
        });

        res.status(201).json({ msg: "Ulasan berhasil ditambahkan" });
    } catch (error) {
        res.status(500).json({ msg: "Server error", error: error.message });
    }
};

export const getUlasan = async (req, res) => {
    try {
        const ulasan = await UlasanTanjakan13.findAll();
        res.json(ulasan);
    } catch (error) {
        res.status(500).json({ msg: "Server error", error: error.message });
    }
};
