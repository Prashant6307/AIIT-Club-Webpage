import { ArrowUpRight } from "lucide-react";
import TechScene from "./three/TechScene";
import heroTech from "../assets/illustrations/hero-tech.png";

function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#f5f5f0]">

            {/* Orange particles */}


            <span className="absolute left-[12%] top-[28%] h-2 w-2 rounded-full bg-[#ff5a00]" />

            <span className="absolute left-[24%] top-[17%] h-1.5 w-1.5 rounded-full bg-[#ff5a00]" />

            <span className="absolute left-[42%] top-[35%] h-2.5 w-2.5 rounded-full bg-[#ff5a00]" />

            <span className="absolute right-[30%] top-[22%] h-2 w-2 rounded-full bg-[#ff5a00]" />

            <span className="absolute right-[18%] top-[45%] h-1.5 w-1.5 rounded-full bg-[#ff5a00]" />

            <span className="absolute bottom-[25%] left-[35%] h-2 w-2 rounded-full bg-[#ff5a00]" />


            {/* Main container */}

            <div className="mx-auto grid min-h-screen max-w-7xl items-center px-6 pt-20 md:px-10 lg:grid-cols-2">

                {/* LEFT — Illustration */}

                <div className="relative order-2 flex h-100 items-center justify-center lg:order-1 lg:h-162.5">

                    <div className="pointer-events-none absolute inset-0 opacity-60">
                        <TechScene />
                    </div>
                    <img
                        src={heroTech}
                        alt="Futuristic ATS technology apparatus"
                        className="relative z-10 w-[320px] object-contain md:w-110 lg:w-140"
                    />
                </div>


                {/* RIGHT — Content */}

                <div className="relative z-10 order-1 lg:order-2">

                    {/* Eyebrow */}

                    <p className="mb-6 text-[9px] font-medium uppercase tracking-[0.35em] text-[#ff5a00]">
                        Amity University
                    </p>


                    {/* Main heading */}

                    <h1 className="text-[clamp(4rem,8vw,7.5rem)] font-semibold leading-[0.8] tracking-[-0.08em]">

                        BUILD.
                        <br />

                        INNOVATE.
                        <br />

                        IMPACT.

                    </h1>


                    {/* Description */}

                    <p className="mt-8 max-w-95 text-[11px] leading-[1.7] text-black/55">

                        A student-driven technology community where ideas
                        become experiments, experiments become projects,
                        and projects create impact.

                    </p>


                    {/* Buttons */}

                    <div className="mt-8 flex flex-wrap gap-3">

                        <a
                            href="#about"
                            className="group flex items-center gap-4 bg-black px-6 py-3 text-[9px] uppercase tracking-[0.15em] text-white transition-transform hover:-translate-y-1"
                        >

                            Explore ATS

                            <ArrowUpRight
                                size={13}
                                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                            />

                        </a>


                        <a
                            href="#join"
                            className="border border-black px-6 py-3 text-[9px] uppercase tracking-[0.15em] transition-colors hover:bg-black hover:text-white"
                        >

                            Join Us

                        </a>

                    </div>

                </div>

            </div>


            {/* Bottom information */}

            <div className="absolute bottom-7 left-6 md:left-10">

                <div className="flex items-center gap-3">

                    <span className="h-7 w-px bg-black/30" />

                    <span className="text-[8px] uppercase tracking-[0.25em] text-black/45">
                        Scroll to explore
                    </span>

                </div>

            </div>


            {/* Section number */}

            <div className="absolute bottom-7 right-6 md:right-10">

                <span className="text-[8px] tracking-[0.2em] text-black/45">
                    01
                </span>

            </div>

        </section>
    );
}

export default Hero;