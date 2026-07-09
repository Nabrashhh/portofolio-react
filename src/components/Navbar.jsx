import { useState, useEffect } from 'react';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Triggers when section occupies the middle of the viewport
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navigation.forEach((item) => {
      const id = item.href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[92%] max-w-7xl -translate-x-1/2">
      <nav className={`w-full border border-slate-800 bg-slate-950/70 px-6 py-3.5 backdrop-blur-md shadow-2xl transition-all duration-300 ${
        isOpen ? 'rounded-2xl lg:rounded-full' : 'rounded-full'
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#home" className="text-lg font-black tracking-wider text-white hover:text-cyan-400 transition-colors">
            RASHIF<span className="text-cyan-400">.</span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => {
              const id = item.href.substring(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium tracking-wide transition-all duration-200 hover:text-cyan-400 ${
                    isActive ? 'text-cyan-400 font-semibold' : 'text-slate-300'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center rounded-full p-2 text-slate-300 hover:bg-slate-900 focus:outline-none lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              // Close Icon
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`grid transition-all duration-300 ease-in-out lg:hidden ${
            isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-3 py-2 border-t border-slate-800/50 mt-2">
              {navigation.map((item) => {
                const id = item.href.substring(1);
                const isActive = activeSection === id;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-slate-900/60 hover:text-cyan-400 ${
                      isActive ? 'bg-cyan-500/10 text-cyan-400 font-semibold' : 'text-slate-300'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
