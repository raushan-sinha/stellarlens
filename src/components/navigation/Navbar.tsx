import { NAVLINKS_DATA } from "./navlinks.data";
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    // Handle Navigation for Home page -
    const handleNavigate = () => {
        navigate('/');
    }

    return (
        <nav className="fixed top-2 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl bg-white/80 backdrop-blur-md shadow-lg rounded-2xl z-50">
            <div className="flex items-center justify-between px-6 py-4">
                {/* Left side: Logo & Title */}
                <div className="flex items-center gap-2 cursor-pointer" onClick={handleNavigate}>
                    {/* Logo & title */}
                    <SatelliteAltIcon />
                    <span className="text-xl font-bold text-gray-900 tracking-tight">StellarLens</span>
                </div>

                {/* Right side: Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {
                        NAVLINKS_DATA.map((link, index) => (
                            <a key={index} href={link.path} className={`font-medium transition-colors ${window.location.pathname === link.path ? 'text-red-600' : 'text-gray-600 hover:text-red-600'}`}>{link.label}</a>
                        ))
                    }
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? (<ClearIcon />) : (<MenuIcon />)}
                </button>
            </div>

            {/* Mobile Dropdown Links */}
            {isMenuOpen && (
                <div className="flex md:hidden px-6 pb-4 pt-2 border-t border-gray-200/50 flex-col gap-4">
                    {
                        NAVLINKS_DATA.map((link, index) => (
                            <a key={index} href={link.path} className={`block font-medium transition-colors ${window.location.pathname === link.path ? 'text-red-600' : 'text-gray-600 hover:text-red-600'}`}>{link.label}</a>
                        ))
                    }
                </div>
            )}
        </nav>
    );
}