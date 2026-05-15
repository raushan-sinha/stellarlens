export default function Navbar() {
    return (
        <nav className="fixed top-2 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl bg-white/80 backdrop-blur-md shadow-lg rounded-2xl z-50">
            <div className="flex items-center justify-between px-6 py-4">
                {/* Left side: Logo & Title */}
                <div className="flex items-center gap-3">
                    {/* Replace '/logo.png' with your actual image path */}
                    <img
                        src="/logo.png"
                        alt="StellarLens Logo"
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-xl font-bold text-gray-900 tracking-tight">StellarLens</span>
                </div>

                {/* Right side: Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="/" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Home</a>
                    <a href="/about" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">About</a>
                    <a href="/docs" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Docs</a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown Links */}
            <div className="hidden px-6 pb-4 pt-2 border-t border-gray-200/50 flex-col gap-4">
                <a href="/" className="block text-gray-600 hover:text-indigo-600 font-medium">Home</a>
                <a href="/about" className="block text-gray-600 hover:text-indigo-600 font-medium">About</a>
                <a href="/docs" className="block text-gray-600 hover:text-indigo-600 font-medium">Docs</a>
            </div>
        </nav>
    );
}