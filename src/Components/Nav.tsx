const Nav = () => {
    return (
        // Frist commit make a Nav 
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-6 py-3 flex items-center justify-between">

            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#EC4899] to-[#7C3AED] flex items-center justify-center text-white font-bold text-base shadow-md">
                DS
            </div>
                <div className="flex items-center gap-1 text-2xl font-bold tracking-tight">
                    <span className="text-gray-900">Dev</span>
                    <span className="text-[#DB2777]">Stack</span>
            </div>
            </div>

            <div>
                <ul className="flex items-center gap-8 font-medium text-gray-600">
                    <li>
                        <a href="#Home" className="text-[#DB2777] font-semibold">Home</a>
                    </li>
                    <li>
                        <a href="#Technologies" className="hover:text-[#DB2777] transition-colors duration-200">Technologies</a>
                    </li>
                    <li>
                        <a href="#Projects" className="hover:text-[#DB2777] transition-colors duration-200">Projects</a>
                    </li>
                    <li>
                        <a href="#About" className="hover:text-[#DB2777] transition-colors duration-200">About</a>
                    </li>
                    <li>
                        <a href="#Contact" className="hover:text-[#DB2777] transition-colors duration-200">Contact</a>
                    </li>
                </ul>
            </div>

            <div className="flex items-center gap-3">
                <button className="px-4 py-2 text-gray-700 font-medium hover:text-[#DB2777] transition-colors">
                    Sign In
                </button>
                <button className="px-6 py-2.5 bg-gradient-to-r from-[#EC4899] to-[#DB2777] hover:opacity-95 text-white font-medium rounded-full shadow-md transition-all">
                    Sign Up
                </button>
            </div>

            </div>
        </nav>
    );
};

export default Nav;