import React, { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    {
      key: 'JEE',
      icon: '⚗️',
      iconBg: 'bg-indigo-100',
      title: 'JEE Preparation',
      desc: 'IIT-JEE Mains & Advanced. Physics, Chemistry, Maths.',
      stats: '320+ Courses · 800K Students',
    },
    {
      key: 'NEET',
      icon: '🧬',
      iconBg: 'bg-emerald-100',
      title: 'NEET Preparation',
      desc: 'MBBS & BDS entrance. Biology, Physics, Chemistry.',
      stats: '280+ Courses · 600K Students',
    },
    {
      key: 'UPSC',
      icon: '🏛️',
      iconBg: 'bg-amber-100',
      title: 'UPSC Civil Services',
      desc: 'IAS, IPS, IFS preparation. GS, CSAT, Optional.',
      stats: '150+ Courses · 200K Students',
    },
    {
      key: 'Defence',
      icon: '🛡️',
      iconBg: 'bg-rose-100',
      title: 'Defence Exams',
      desc: 'NDA, CDS, AFCAT. Written + SSB Preparation.',
      stats: '90+ Courses · 150K Students',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white shadow-sm">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">PW</span>
            <span className="rounded-full bg-indigo-600 px-2 py-1 text-xs font-semibold text-white">Pro</span>
          </div>

          <div className="hidden items-center gap-7 md:flex">
            <a href="#courses" className="text-sm font-medium text-slate-600 transition-all duration-200 hover:text-indigo-600">Courses</a>
            <a href="#batches" className="text-sm font-medium text-slate-600 transition-all duration-200 hover:text-indigo-600">Batches</a>
            <a href="#results" className="text-sm font-medium text-slate-600 transition-all duration-200 hover:text-indigo-600">Results</a>
            <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-indigo-700">
              Start Learning
            </button>
          </div>

          <button
            className="rounded-lg p-2 text-slate-700 transition-all duration-200 hover:bg-slate-100 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-slate-100 bg-white px-4 py-3 md:hidden">
            <div className="flex flex-col gap-2">
              <a href="#courses" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600">Courses</a>
              <a href="#batches" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600">Batches</a>
              <a href="#results" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600">Results</a>
              <button className="mt-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-indigo-700">
                Start Learning
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="pt-16">
        <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.12),transparent_55%)]" />
          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              🎓 Trusted by 2M+ Students
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
              Achieve Your <span className="text-indigo-600">Dreams.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">India&apos;s most focused exam prep platform.</p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-indigo-700">
                Explore Courses →
              </button>
              <button className="rounded-lg border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:scale-[1.02] hover:border-slate-300 hover:bg-slate-50">
                Watch Demo ▶
              </button>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 text-sm font-medium text-slate-600 sm:flex-row sm:gap-5">
              <span>2M+ Students</span>
              <span className="hidden text-slate-300 sm:block">·</span>
              <span>500+ Educators</span>
              <span className="hidden text-slate-300 sm:block">·</span>
              <span>98% Pass Rate</span>
            </div>
          </div>
        </section>

        <section id="courses" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-slate-900">Choose Your Path</h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((item) => (
                <button
                  key={item.key}
                  onClick={() => alert(`Opening ${item.key}...`)}
                  className="rounded-2xl border border-slate-100 bg-white p-6 text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
                >
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${item.iconBg}`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                  <p className="mt-4 text-xs text-slate-400">{item.stats}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-indigo-50 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-slate-900">Why Choose Us</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-indigo-100 bg-white p-6">
                <div className="text-2xl">📺</div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">Live + Recorded</h3>
                <p className="mt-2 text-sm text-slate-600">Watch anytime, anywhere</p>
              </div>
              <div className="rounded-2xl border border-indigo-100 bg-white p-6">
                <div className="text-2xl">📝</div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">Daily Practice</h3>
                <p className="mt-2 text-sm text-slate-600">DPP sheets + detailed solutions</p>
              </div>
              <div className="rounded-2xl border border-indigo-100 bg-white p-6">
                <div className="text-2xl">💬</div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">Doubt Solving</h3>
                <p className="mt-2 text-sm text-slate-600">24/7 expert doubt support</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-600 md:flex-row">
          <p>© 2026 PW-Pro. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#courses" className="hover:text-indigo-600">Courses</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <a href="#privacy" className="hover:text-indigo-600">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
