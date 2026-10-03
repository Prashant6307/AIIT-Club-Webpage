function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0a0a0a] text-[#f5f5f0]">

      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-20">

        {/* Top */}
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2">

          {/* Logo */}
          <div>
            <a
              href="#"
              className="text-[clamp(4rem,8vw,8rem)] font-black leading-none tracking-[-0.1em]"
            >
              ATS<span className="text-[#ff5a00]">.</span>
            </a>

            <p className="mt-6 max-w-[280px] text-[9px] uppercase leading-[1.8] tracking-[0.2em] text-white/35">
              Amity Tech Society
              <br />
              Learn. Build. Innovate.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">

            <div>
              <p className="mb-5 text-[8px] uppercase tracking-[0.25em] text-[#ff5a00]">
                Explore
              </p>

              <div className="flex flex-col gap-3">
                <a href="#about" className="text-[9px] text-white/50 transition-colors hover:text-white">
                  About
                </a>

                <a href="#domains" className="text-[9px] text-white/50 transition-colors hover:text-white">
                  Domains
                </a>

                <a href="#events" className="text-[9px] text-white/50 transition-colors hover:text-white">
                  Events
                </a>

                <a href="#projects" className="text-[9px] text-white/50 transition-colors hover:text-white">
                  Projects
                </a>
              </div>
            </div>

            <div>
              <p className="mb-5 text-[8px] uppercase tracking-[0.25em] text-[#ff5a00]">
                Community
              </p>

              <div className="flex flex-col gap-3">
                <a href="#team" className="text-[9px] text-white/50 transition-colors hover:text-white">
                  Team
                </a>

                <a href="#join" className="text-[9px] text-white/50 transition-colors hover:text-white">
                  Join ATS
                </a>

                <a href="#" className="text-[9px] text-white/50 transition-colors hover:text-white">
                  Instagram
                </a>

                <a href="#" className="text-[9px] text-white/50 transition-colors hover:text-white">
                  LinkedIn
                </a>
              </div>
            </div>

            <div>
              <p className="mb-5 text-[8px] uppercase tracking-[0.25em] text-[#ff5a00]">
                Contact
              </p>

              <div className="flex flex-col gap-3">
                <span className="text-[9px] text-white/50">
                  Amity University
                </span>

                <span className="text-[9px] text-white/50">
                  Lucknow
                </span>

                <a
                  href="mailto:ats@amity.edu"
                  className="text-[9px] text-white/50 transition-colors hover:text-white"
                >
                  Email Us
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between">

          <span className="text-[7px] uppercase tracking-[0.25em] text-white/25">
            © 2026 Amity Tech Society
          </span>

          <span className="text-[7px] uppercase tracking-[0.25em] text-white/25">
            Built by ATS
          </span>

          <a
            href="#"
            className="text-[7px] uppercase tracking-[0.25em] text-white/25 transition-colors hover:text-[#ff5a00]"
          >
            Back to top ↑
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;