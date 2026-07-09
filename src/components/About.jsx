const About = () => {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-xl shadow-slate-950/30 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">About Me</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Saya membangun solusi dari pemahaman sistem dan kode.</h2>
          </div>
          <div className="space-y-4 text-lg leading-8 text-slate-300">
            <p>
              Latar belakang saya di bidang IT Support memberi saya pemahaman yang kuat terhadap infrastruktur, jaringan, troubleshooting, serta kebutuhan pengguna secara nyata.
            </p>
            <p>
              Pengetahuan itu membantu saya menjadi programmer yang lebih solutif tidak hanya menulis kode, tetapi juga memahami bagaimana aplikasi berjalan di dunia nyata, bagaimana performa, stabilitas, dan pengalaman pengguna saling berhubungan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
