import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between h-[100px] px-[200px]">
            <img
                src="BloodChain-removebg-preview.png"
                alt="BloodChain Logo"
                className="h-[85px] w-auto object-contain cursor-pointer"
            />
            <div className="flex items-center justify-center space-x-10 text-[18px] font-medium cursor-pointer">
                <Link to="hero" smooth={true} duration={1000}>Acasă</Link>
                <Link to="featured" smooth={true} duration={1000}>Despre noi</Link>
                <Link to="contact" smooth={true} duration={1000}>Contactează-ne</Link>
            </div>
        </div>
    )
}

export default Navbar