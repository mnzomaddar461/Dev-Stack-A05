import BannerImg from '../assets/banner-stack.png'

const Hero = () => {
    return (
        <section className="container mx-auto px-6 pt-32 pb-16 flex flex-col md:flex-row items-center justify-between gap-12">

            <div className="flex-1 max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-extrabold text-[#0F172A]">
                    Build Your Ideal <br />
                <span className="bg-gradient-to-r from-[#F97316] via-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
                    Development Stack
                </span>
                </h1>

                <p className="mt-6 text-base md:text-lg text-gray-500 leading-relaxed max-w-xl">
                    Explore frontend, backend, database, and tooling options, compare them
                    side by side, and put together the stack that fits your next project.
                </p>

                <div className="mt-8 flex items-center gap-4">
                    <button className="px-6 py-3.5 bg-gradient-to-r from-[#F97316] to-[#EC4899] hover:opacity-90 text-white font-medium rounded-xl shadow-md">
                        Explore Technologies
                    </button>

                    <button className="px-6 py-3.5 bg-white border border-gray-200 hover:border-gray-300 text-gray-600 font-medium rounded-xl shadow-sm">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="flex-1 flex justify-center md:justify-end">
                <img
                    src={BannerImg}
                    alt="Dev Stack"
                    className="w-full max-w-lg object-contain drop-shadow-xl"
                />
            </div>
        </section>
    );
};

export default Hero;