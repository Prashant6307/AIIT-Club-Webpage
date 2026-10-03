import TeamScene from "./three/TeamScene";

function Team() {
    const members = [
        {
            number: "01",
            name: "YOUR NAME",
            role: "PRESIDENT",
        },
        {
            number: "02",
            name: "MEMBER NAME",
            role: "VICE PRESIDENT",
        },
        {
            number: "03",
            name: "MEMBER NAME",
            role: "TECH LEAD",
        },
        {
            number: "04",
            name: "MEMBER NAME",
            role: "DESIGN LEAD",
        },
        {
            number: "05",
            name: "MEMBER NAME",
            role: "EVENTS LEAD",
        },
    ];

    return (
        <section
            id="team"
            className="relative overflow-hidden bg-[#0a0a0a] text-[#f5f5f0]"
        >

            {/* 3D atmosphere */}
            <div className="pointer-events-none absolute inset-0 opacity-70">
                <TeamScene />
            </div>
            {/* Orange particles */}
            <span className="absolute left-[12%] top-[20%] h-2 w-2 rounded-full bg-[#ff5a00]" />
            <span className="absolute right-[18%] top-[15%] h-1.5 w-1.5 rounded-full bg-[#ff5a00]" />
            <span className="absolute left-[30%] bottom-[20%] h-1.5 w-1.5 rounded-full bg-[#ff5a00]" />
            <span className="absolute right-[10%] bottom-[25%] h-2 w-2 rounded-full bg-[#ff5a00]" />

            <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">

                {/* Header */}
                <div className="mb-20 grid gap-10 md:grid-cols-[1fr_300px] md:items-end">

                    <div>
                        <p className="mb-8 text-[9px] uppercase tracking-[0.35em] text-[#ff5a00]">
                            06 — Team
                        </p>

                        <h2 className="text-[clamp(4rem,9vw,9rem)] font-semibold leading-[0.78] tracking-[-0.08em]">
                            THE
                            <br />
                            PEOPLE
                            <br />
                            BEHIND IT<span className="text-[#ff5a00]">.</span>
                        </h2>
                    </div>

                    <p className="max-w-[280px] text-[10px] leading-[1.8] text-white/45">
                        A community is built by people. Meet the students who help
                        create, organize and grow the ATS ecosystem.
                    </p>
                </div>

                {/* Team list */}
                <div className="border-t border-white/15">

                    {members.map((member) => (
                        <div
                            key={member.number}
                            className="group grid border-b border-white/15 py-8 transition-all duration-300 hover:px-3 md:grid-cols-[70px_1fr_220px_50px] md:items-center md:gap-8"
                        >
                            {/* Number */}
                            <span className="text-[8px] tracking-[0.2em] text-white/25">
                                {member.number}
                            </span>

                            {/* Name */}
                            <h3 className="text-[clamp(2.5rem,5vw,5.5rem)] font-semibold leading-[0.8] tracking-[-0.07em] transition-colors duration-300 group-hover:text-[#ff5a00]">
                                {member.name}
                            </h3>

                            {/* Role */}
                            <span className="mt-5 text-[8px] uppercase tracking-[0.25em] text-white/40 md:mt-0">
                                {member.role}
                            </span>

                            {/* Arrow */}
                            <span className="mt-5 text-xl text-[#ff5a00] opacity-50 transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:opacity-100 md:mt-0">
                                ↗
                            </span>
                        </div>
                    ))}

                </div>

                {/* Team visual */}
                <div className="relative mt-20 flex min-h-[280px] items-center justify-center overflow-hidden border border-white/10">

                    {/* Technical lines */}
                    <div className="absolute h-[180px] w-[180px] rounded-full border border-white/10" />
                    <div className="absolute h-[130px] w-[130px] rotate-45 border border-white/15" />

                    <div className="relative h-[80px] w-[80px] border border-white/40">
                        <div className="absolute inset-3 border border-white/20" />

                        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 bg-[#ff5a00]" />
                    </div>

                    {/* Particles */}
                    <span className="absolute left-[20%] top-[30%] h-2 w-2 rounded-full bg-[#ff5a00]" />
                    <span className="absolute right-[25%] top-[20%] h-1.5 w-1.5 rounded-full bg-[#ff5a00]" />
                    <span className="absolute right-[18%] bottom-[25%] h-2 w-2 rounded-full bg-[#ff5a00]" />

                    <span className="absolute bottom-5 left-5 text-[7px] uppercase tracking-[0.25em] text-white/25">
                        Human / Technology / Community
                    </span>

                    <span className="absolute bottom-5 right-5 text-[7px] tracking-[0.2em] text-white/25">
                        006
                    </span>
                </div>

                {/* Footer metadata */}
                <div className="mt-8 flex justify-between">
                    <span className="text-[7px] uppercase tracking-[0.25em] text-white/25">
                        Together We Build
                    </span>

                    <span className="text-[7px] tracking-[0.2em] text-white/25">
                        06
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Team;