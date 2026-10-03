import aboutNetwork from "../assets/illustrations/about-network.png";
import NetworkScene from "./three/NetworkScene";

function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#0a0a0a] text-[#f5f5f0]"
        >
            <div className="mx-auto grid min-h-[90vh] max-w-[1280px] items-center gap-16 px-6 py-24 md:px-10 lg:grid-cols-2 lg:gap-20">

                {/* LEFT — Text */}

                <div className="relative">

                    <p className="mb-8 text-[9px] uppercase tracking-[0.35em] text-[#ff5a00]">
                        02 — About
                    </p>

                    <h2 className="max-w-[650px] text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[0.82] tracking-[-0.07em]">
                        MORE
                        <br />
                        THAN JUST
                        <br />
                        A CLUB<span className="text-[#ff5a00]">.</span>
                    </h2>

                    <p className="mt-10 max-w-[420px] text-[11px] leading-[1.8] text-white/50">
                        ATS is a student-driven technology community at Amity,
                        bringing together developers, designers, innovators and
                        curious minds to learn, experiment and build together.
                    </p>

                    <div className="mt-10 flex items-center gap-4">

                        <span className="h-px w-12 bg-[#ff5a00]" />

                        <span className="text-[8px] uppercase tracking-[0.25em] text-white/40">
                            Learn · Build · Share
                        </span>

                    </div>

                </div>


                {/* RIGHT — Illustration */}

                <div className="relative flex min-h-[400px] items-center justify-center">
                    <div className="absolute inset-0 opacity-70">
                        <NetworkScene />
                    </div>
                    <img
                        src={aboutNetwork}
                        alt="Human and technology network illustration"
                        className="relative z-10 w-[320px] md:w-[430px] lg:w-[520px] object-contain"
                    />
                </div>

            </div>


            {/* Bottom metadata */}

            <div className="mx-auto flex max-w-[1280px] justify-between px-6 pb-8 md:px-10">

                <span className="text-[7px] uppercase tracking-[0.25em] text-white/30">
                    Amity Tech Society
                </span>

                <span className="text-[7px] tracking-[0.2em] text-white/30">
                    02
                </span>

            </div>

        </section>
    );
}

export default About;