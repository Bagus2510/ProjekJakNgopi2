import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        console.error("Token not found in request headers.");
        return res.status(401).json({ msg: "Unauthorized: No token provided." });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            console.error("Token verification failed:", err.message);
            return res.status(403).json({ msg: "Forbidden: Invalid token." });
        }

        req.email = decoded.email;
        next();
    });
};
