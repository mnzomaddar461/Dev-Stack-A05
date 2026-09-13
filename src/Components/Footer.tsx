const Footer = () => {
return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-12">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12">

            <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#EC4899] to-[#7C3AED] flex items-center justify-center text-white font-bold text-base shadow-md">
                    DS
                </div>
            <div className="flex items-center gap-1 text-2xl font-bold tracking-tight">
                <span className="text-gray-900">Dev</span>
                <span className="text-[#DB2777]">Stack</span>
            </div>
        </div>

        <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
            Curated tools, technologies, and resources for developers building modern software.
        </p>

            <div className="flex items-center gap-6 pt-2">
                <a href="#github" className="text-slate-700 font-semibold text-sm hover:text-[#DB2777] transition-colors">
                    GitHub
                </a>
                <a href="#twitter" className="text-slate-700 font-semibold text-sm hover:text-[#DB2777] transition-colors">
                    Twitter
                </a>
                <a href="#linkedin" className="text-slate-700 font-semibold text-sm hover:text-[#DB2777] transition-colors">
                    LinkedIn
                </a>
            </div>
        </div>

        <div>
            <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-4">
                PRODUCT
            </h3>
            <ul className="space-y-3 text-sm text-slate-500 font-normal">
                <li><a href="#Home" className="hover:text-slate-900 transition-colors">Home</a></li>
                <li><a href="#Technologies" className="hover:text-slate-900 transition-colors">Technologies</a></li>
                <li><a href="#Projects" className="hover:text-slate-900 transition-colors">Projects</a></li>
            </ul>
        </div>

        <div>
            <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-4">
                COMPANY
            </h3>
            <ul className="space-y-3 text-sm text-slate-500 font-normal">
                <li><a href="#About" className="hover:text-slate-900 transition-colors">About</a></li>
                <li><a href="#Contact" className="hover:text-slate-900 transition-colors">Contact</a></li>
                <li><a href="#Careers" className="hover:text-slate-900 transition-colors">Careers</a></li>
            </ul>
        </div>


        <div>
            <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-4">
                LEGAL
            </h3>
            <ul className="space-y-3 text-sm text-slate-500 font-normal">
                <li><a href="#Privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
                <li><a href="#Terms" className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
            </ul>
        </div>
    </div>

    <div className="border-t border-slate-100 my-4"></div>


        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 pt-4">
            <p>© 2026 Dev Stack. All rights reserved.</p>
            <div className="flex items-center gap-6 mt-4 sm:mt-0">
                <a href="#Privacy" className="hover:text-slate-600 transition-colors">Privacy</a>
                <a href="#Terms" className="hover:text-slate-600 transition-colors">Terms</a>
            </div>
        </div>
    </div>
</footer>
);
};

export default Footer;