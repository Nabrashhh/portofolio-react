import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const phoneNumber = "62895631143500";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Halo, saya ${formData.name}. Email: ${formData.email}. Pesan: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-xl shadow-slate-950/30 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Contact</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Mari bekerja sama.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Jika Anda sedang mencari seseorang yang memahami sistem, dukungan teknis, dan pengembangan web, saya siap membantu.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="https://www.linkedin.com/in/rashif-nabil-9a4149341?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300">
              LinkedIn
            </a>
            <a href="https://github.com/nabrashhh" target="_blank" rel="noreferrer" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300">
              GitHub
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Nama</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none ring-0 focus:border-cyan-400"
              placeholder="Nama Anda"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none ring-0 focus:border-cyan-400"
              placeholder="email@contoh.com"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Pesan</label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none ring-0 focus:border-cyan-400"
              placeholder="Ceritakan kebutuhan Anda..."
            />
          </div>
          <button type="submit" className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
            Kirim ke WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
