const Hero = () => {
  return (
    <section id="home" className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Available for collaboration & freelance projects
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              Hi, I&apos;m <span className="text-cyan-400">RASHIF NABIL MA</span>
            </h1>
            <p className="text-2xl font-semibold text-slate-200 sm:text-3xl">
              IT SUPPORT <span className="text-slate-400">&</span> WEB DEVELOPER
            </p>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Saya adalah profesional yang menggabungkan pemahaman mendalam tentang infrastruktur IT dengan kemampuan membangun solusi web yang modern, cepat, dan fungsional.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-cyan-500 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Lihat Proyek
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-700 px-6 py-3 text-center font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Hubungi Saya
            </a>
          </div>

          <div className="flex gap-4 text-sm text-slate-400">
            <a href="https://www.linkedin.com/in/rashif-nabil-9a4149341?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">LinkedIn</a>
            <a href="https://github.com/nabrashhh" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">GitHub</a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative flex items-center justify-center">
            {/* Ambient background glow */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-cyan-500/20 to-transparent blur-3xl" />

            {/* Main Profile Photo */}
            <img
              src="/images/azure.jpeg"
              alt="RASHIF NABIL MA"
              loading="lazy"
              className="relative z-10 h-72 w-72 rounded-full object-cover object-top shadow-2xl shadow-cyan-500/10 transition-transform duration-500 hover:scale-105 sm:h-80 sm:w-80 lg:h-[400px] lg:w-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
