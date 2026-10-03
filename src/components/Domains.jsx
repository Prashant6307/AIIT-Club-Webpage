import domainsNetwork from "../assets/illustrations/domains-network.png";
import DomainsScene from "./three/DomainsScene";

function Domains() {
    const domains = [
        "WEB DEVELOPMENT",
        "AI / ML",
        "UI / UX",
        "APP DEVELOPMENT",
        "CLOUD",
        "CYBERSECURITY",
        "IOT",
    ];

    return (
        <section
            id="domains"
            className="relative overflow-hidden bg-[#f5f5f0] text-[#111111]"
        >
            <div className="mx-auto grid min-h-[90vh] max-w-[1280px] items-center gap-16 px-6 py-24 md:px-10 lg:grid-cols-2">

                {/* LEFT — Illustration */}

                <div className="relative order-2 flex min-h-[420px] items-center justify-center lg:order-1">
                    <div className="absolute inset-0">
                        <DomainsScene />
                    </div>
                    <img
                        src={domainsNetwork}
                        alt="ATS technology ecosystem illustration"
                        className="relative z-10 w-[320px] object-contain md:w-[430px] lg:w-[520px]"
                    />
                </div>


                {/* RIGHT — Content */}

                <div className="relative order-1 lg:order-2">

                    <p className="mb-8 text-[9px] uppercase tracking-[0.35em] text-[#ff5a00]">
                        03 — Domains
                    </p>


                    <h2 className="max-w-[600px] text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[0.82] tracking-[-0.07em]">

                        TECHNOLOGY
                        <br />

                        MEETS
                        <br />

                        CREATIVITY<span className="text-[#ff5a00]">.</span>

                    </h2>


                    <p className="mt-10 max-w-[420px] text-[11px] leading-[1.8] text-black/55">

                        Explore different areas of technology, collaborate
                        with other students and turn ideas into real-world
                        projects.

                    </p>


                    {/* Domains */}

                    <div className="mt-10 grid max-w-[520px] grid-cols-2 border-t border-black/15">

                        {domains.map((domain, index) => (
                            <div
                                key={domain}
                                className="group flex items-center justify-between border-b border-black/15 py-4 pr-4"
                            >

                                <div className="flex items-center gap-3">

                                    <span className="text-[7px] text-black/30">
                                        0{index + 1}
                                    </span>

                                    <span className="text-[9px] font-medium tracking-[0.08em]">
                                        {domain}
                                    </span>

                                </div>

                                <span className="text-[#ff5a00] opacity-0 transition-opacity group-hover:opacity-100">
                                    ↗
                                </span>

                            </div>
                        ))}

                    </div>

                </div>

            </div>


            {/* Bottom metadata */}

            <div className="mx-auto flex max-w-[1280px] justify-between px-6 pb-8 md:px-10">

                <span className="text-[7px] uppercase tracking-[0.25em] text-black/30">
                    Explore · Experiment · Build
                </span>

                <span className="text-[7px] tracking-[0.2em] text-black/30">
                    03
                </span>

            </div>

        </section>
    );
}

export default Domains;