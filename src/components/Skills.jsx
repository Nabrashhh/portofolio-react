const skillGroups = [
  {
    title: 'IT Support',
    items: ['Hardware & Software Troubleshooting', 'PC/Laptop Maintenance', 'Computer Networking (LAN, TCP/IP)'],
    accent: 'from-cyan-500/20 to-sky-500/10',
  },
  {
    title: 'Programming & Database',
    items: ['HTML', 'CSS', 'JavaScript', 'PHP', 'ReactJS', 'Laravel', 'MySQL', 'MongoDB', 'Laragon', 'Wordpress', 'Google App Script'],
    accent: 'from-fuchsia-500/20 to-violet-500/10',
  },
  {
    title: 'Productivity & Desain',
    items: ['Microsoft Office Suite (Word, Excel, Power Point)', 'CorelDraw', 'PhotoShop', 'Canva'],
    accent: 'from-emerald-500/20 to-lime-500/10',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Skills & Tech Stack</p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Keahlian yang saya kombinasikan untuk hasil maksimal.</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className={`rounded-3xl border border-slate-800 bg-gradient-to-br ${group.accent} p-7 backdrop-blur`}>
            <h3 className="mb-5 text-xl font-semibold text-white">{group.title}</h3>
            <ul className="space-y-3 text-slate-300">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
