import { Footer } from "../../Content Homepages/Footer";
import { Navbar } from "../../Content Homepages/Navbar";
import { LoginPages } from "../../Content Login Page/LoginPages";

export default function LoginPage() {
    return(
        <html className="!scroll-smooth">
            <Navbar />
            <LoginPages />
            <Footer />
        </html>
    )
}