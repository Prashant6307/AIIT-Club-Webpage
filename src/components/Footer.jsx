function Navbar() {
    return (
        <header className="absolute left-0 top-0 z-50 w-full">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">

                {/* Logo */}
                <a href="/" className="flex items-center">
                    <span className="text-2xl font-black tracking-[-0.08em]">
                        ATS
                    </span>

                    <span className="ml-1 text-2xl font-black text-[#ff5a00]">
                        .
                    </span>
                </a>

                {/* Desktop navigation */}
                <nav className="hidden items-center gap-8 md:flex">

                    <a
                        href="#about"
                        className="text-[10px] uppercase tracking-[0.18em] transition-opacity hover:opacity-40"
                    >
                        About
                    </a>

                    <a
                        href="#domains"
                        className="text-[10px] uppercase tracking-[0.18em] transition-opacity hover:opacity-40"
                    >
                        Domains
                    </a>

                    <a
                        href="#events"
                        className="text-[10px] uppercase tracking-[0.18em] transition-opacity hover:opacity-40"
                    >
                        Events
                    </a>

                    <a
                        href="#projects"
                        className="text-[10px] uppercase tracking-[0.18em] transition-opacity hover:opacity-40"
                    >
                        Projects
                    </a>

                    <a
                        href="#team"
                        className="text-[10px] uppercase tracking-[0.18em] transition-opacity hover:opacity-40"
                    >
                        Team
                    </a>

                </nav>

                {/* Join button */}
                <a
                    href="#join"
                    className="hidden border border-black px-5 py-2.5 text-[9px] uppercase tracking-[0.15em] transition-all hover:bg-black hover:text-white md:block"
                >
                    Join Us
                </a>

                {/* Mobile menu */}
                <button className="flex flex-col gap-1.5 md:hidden">
                    <span className="h-px w-6 bg-black" />
                    <span className="h-px w-6 bg-black" />
                </button>

            </div>
        </header>
    );
}

export default Navbar;