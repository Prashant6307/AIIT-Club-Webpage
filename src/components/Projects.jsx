import projectsLab from "../assets/illustrations/projects-lab.png";
import ProjectScene from "./three/ProjectScene";

function Projects() {
    const projects = [
        {
            number: "01",
            title: "AI LAB",
            category: "ARTIFICIAL INTELLIGENCE",
            description:
                "Experimental AI projects built by students exploring machine learning, computer vision and generative systems.",
        },
        {
            number: "02",
            title: "WEB LAB",
            category: "WEB DEVELOPMENT",
            description:
                "Modern web experiences combining thoughtful interfaces, strong engineering and creative interaction.",
        },
        {
            number: "03",
            title: "OPEN SOURCE",
            category: "COMMUNITY",
            description:
                "Collaborative projects where students learn to build, contribute and ship software together.",
        },
    ];

    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-[#f5f5f0] text-[#111111]"
        >
            <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">

                {/* Header */}
                <div className="grid gap-12 md:grid-cols-[1fr_300px] md:items-end">

                    <div>
                        <p className="mb-8 text-[9px] uppercase tracking-[0.35em] text-[#ff5a00]">
                            05 — Projects
                        </p>

                        <h2 className="text-[clamp(4rem,9vw,9rem)] font-semibold leading-[0.78] tracking-[-0.08em]">
                            IDEAS
                            <br />
                            INTO
                            <br />
                            REALITY<span className="text-[#ff5a00]">.</span>
                        </h2>
                    </div>

                    <p className="max-w-[280px] text-[10px] leading-[1.8] text-black/50">
                        We believe the best way to learn technology is to build with it.
                        Explore experiments, applications and ideas created by the ATS
                        community.
                    </p>
                </div>

                {/* Projects */}
                <div className="mt-24">

                    {projects.map((project, index) => (
                        <article
                            key={project.number}
                            className="group relative border-t border-black/20 py-10 md:py-14"
                        >
                            <div className="grid gap-8 md:grid-cols-[70px_1fr_280px] md:items-center">

                                {/* Number */}
                                <span className="text-[8px] tracking-[0.2em] text-black/30">
                                    {project.number}
                                </span>

                                {/* Main */}
                                <div>
                                    <p className="mb-4 text-[8px] uppercase tracking-[0.25em] text-[#ff5a00]">
                                        {project.category}
                                    </p>

                                    <h3 className="text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.8] tracking-[-0.07em] transition-transform duration-500 group-hover:translate-x-3">
                                        {project.title}
                                        <span className="text-[#ff5a00]">.</span>
                                    </h3>
                                </div>

                                {/* Description */}
                                <div className="flex items-end justify-between gap-6">
                                    <p className="text-[10px] leading-[1.8] text-black/50">
                                        {project.description}
                                    </p>

                                    <span className="shrink-0 text-2xl transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
                                        ↗
                                    </span>
                                </div>
                            </div>

                            {/* Orange interaction line */}
                            <div className="absolute bottom-0 left-0 h-px w-0 bg-[#ff5a00] transition-all duration-500 group-hover:w-full" />
                        </article>
                    ))}

                </div>

                {/* Experimental visual */}
                {/* Experimental visual */}
                <div className="relative mt-20 flex min-h-[520px] items-center justify-center overflow-hidden border border-black/10">

                    {/* 3D experimental object */}
                    <div className="absolute inset-0">
                        <ProjectScene />
                    </div>

                    {/* 2D laboratory artwork */}
                    <img
                        src={projectsLab}
                        alt="ATS experimental computing laboratory illustration"
                        className="relative z-10 w-[300px] object-contain md:w-[420px] lg:w-[540px]"
                    />

                    {/* Metadata */}
                    <div className="absolute bottom-5 left-5 z-20 text-[7px] uppercase tracking-[0.25em] text-black/30">
                        Experimental / 001
                    </div>

                    <div className="absolute bottom-5 right-5 z-20 text-[7px] tracking-[0.2em] text-black/30">
                        ATS LAB
                    </div>

                </div>

                {/* Footer metadata */}
                <div className="mt-8 flex justify-between">
                    <span className="text-[7px] uppercase tracking-[0.25em] text-black/30">
                        Experiment · Build · Ship
                    </span>

                    <span className="text-[7px] tracking-[0.2em] text-black/30">
                        05
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Projects;