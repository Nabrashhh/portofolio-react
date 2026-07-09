const projects = [
  {
    title: 'PRIMKOPKAR PERUM PERHUTANI KPH MADURA BERBASIS WEB',
    description: 'Saya merancang dan membangun platform web terintegrasi untuk menyatukan seluruh operasional departemen pada Perum Perhutani KPH Madura kedalam satu sistem terpusat. Aplikasi ini mendukung sistem multi-user yang mencangkup hak akses khusus untuk peran admin, divisi simpan pinjam, kasir, hingga manajemen angkutan. Proyek ini berhasil digitalisasi pencatatan data dan menyederhanakan alur kerja lintas departemen secara aman dan efesien.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Tailwind CSS', 'Laravel'],
    type: 'Project Web',
  },
  {
    title: 'Web E-Commerce Kopi Madura. ',
    description: 'Saya membangun sebuah platform penjualan berbasis web yang dirancang khusus untuk memasarkan dan mengelola transaksi produk kopi khas madura secara digital. Sistem ini mencangkup fitur manajemen katalog produk, integrasi keranjang belanja, serta pencatatan pesanan otomatis untuk mempermudah operasional bisnis. Melalui proyek ini, saya mengimplementasikan arsitektur kode yang bersih dan memastikan performa website tetap responsif saat diakses oleh pelanggan',
    tech: ['ReactsJS', 'ExpressJS', 'PostgreSQL', 'Tailwind CSS'],
    type: 'Experience',
  },
  {
    title: 'IT Support & Teacher TIK',
    description: 'Sebagai IT Support & Guru TIK, saya bertanggung jawab untuk memastikan infrastruktur teknologi informasi sekolah berjalan lancar sekaligus memberikan edukasi digital kepada siswa. Tugas saya mencakup maintenance hardware, troubleshooting software, serta pengembangan kurikulum yang relevan dengan kebutuhan industri 4.0. Pengalaman ini memperkuat kemampuan teknis sekaligus interpersonal saya dalam mengelola lingkungan kerja yang dinamis.',
    tech: ['Networking', 'Troubleshooting', 'Maintenance', 'Teaching'],
    type: 'Work Experience',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Projects & Experience</p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Portofolio kerja dan pengalaman yang telah saya bangun.</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.title} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 shadow-lg shadow-slate-950/20">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-300">
                {project.type}
              </span>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-white">{project.title}</h3>
            <p className="mb-5 text-sm leading-7 text-slate-300">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span key={item} className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
