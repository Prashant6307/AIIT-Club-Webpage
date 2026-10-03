import EventsScene from "./three/EventsScene";

function Events() {
    const events = [
        {
            number: "01",
            title: "HACKATHON",
            date: "COMING SOON",
            description:
                "Build ideas, solve problems and create something meaningful with your team.",
        },
        {
            number: "02",
            title: "TECH TALKS",
            date: "MONTHLY",
            description:
                "Learn directly from developers, designers and technology professionals.",
        },
        {
            number: "03",
            title: "WORKSHOPS",
            date: "REGULAR",
            description:
                "Hands-on sessions covering development, AI, design, cloud and emerging tech.",
        },
        {
            number: "04",
            title: "CODE SPRINT",
            date: "COMING SOON",
            description:
                "A fast-paced coding challenge designed to push your problem-solving skills.",
        },
    ];

    return (
        <section
            id="events"
            className="relative overflow-hidden bg-[#0a0a0a] text-[#f5f5f0]"
        >
            {/* 3D background */}
            <div className="pointer-events-none absolute inset-0 opacity-80">
                <EventsScene />
            </div>
            {/* Orange particles */}
            <span className="absolute left-[8%] top-[18%] h-2 w-2 rounded-full bg-[#ff5a00]" />
            <span className="absolute right-[14%] top-[25%] h-1.5 w-1.5 rounded-full bg-[#ff5a00]" />
            <span className="absolute left-[25%] bottom-[20%] h-1.5 w-1.5 rounded-full bg-[#ff5a00]" />
            <span className="absolute right-[30%] bottom-[15%] h-2 w-2 rounded-full bg-[#ff5a00]" />

            <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">

                {/* Header */}
                <div className="mb-20 flex items-end justify-between">
                    <div>
                        <p className="mb-8 text-[9px] uppercase tracking-[0.35em] text-[#ff5a00]">
                            04 — Events
                        </p>

                        <h2 className="text-[clamp(4rem,9vw,9rem)] font-semibold leading-[0.78] tracking-[-0.08em]">
                            MAKE
                            <br />
                            <span className="text-white/40">SOMETHING</span>
                            <br />
                            HAPPEN<span className="text-[#ff5a00]">.</span>
                        </h2>
                    </div>

                    <span className="hidden text-[8px] uppercase tracking-[0.25em] text-white/30 md:block">
                        04 / 07
                    </span>
                </div>

                {/* Event list */}
                <div className="border-t border-white/15">
                    {events.map((event) => (
                        <div
                            key={event.number}
                            className="group grid border-b border-white/15 py-8 transition-all duration-300 hover:px-3 md:grid-cols-[80px_1fr_180px] md:items-center md:gap-8"
                        >
                            {/* Number */}
                            <span className="mb-4 text-[9px] tracking-[0.2em] text-white/30 md:mb-0">
                                {event.number}
                            </span>

                            {/* Content */}
                            <div>
                                <h3 className="text-[clamp(2rem,4vw,4rem)] font-semibold leading-none tracking-[-0.06em] transition-colors duration-300 group-hover:text-[#ff5a00]">
                                    {event.title}
                                </h3>

                                <p className="mt-3 max-w-[500px] text-[10px] leading-[1.7] text-white/40">
                                    {event.description}
                                </p>
                            </div>

                            {/* Date */}
                            <div className="mt-5 flex items-center justify-between md:mt-0 md:justify-end md:gap-5">
                                <span className="text-[8px] uppercase tracking-[0.2em] text-white/40">
                                    {event.date}
                                </span>

                                <span className="text-xl text-[#ff5a00] transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
                                    ↗
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom metadata */}
                <div className="mt-8 flex justify-between">
                    <span className="text-[7px] uppercase tracking-[0.25em] text-white/30">
                        Learn · Compete · Connect
                    </span>

                    <span className="text-[7px] tracking-[0.2em] text-white/30">
                        04
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Events;