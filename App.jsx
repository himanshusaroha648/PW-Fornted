import { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Play,
  FlaskConical,
  BookOpen,
  Landmark,
  Shield,
  Video,
  FileText,
  MessageCircleQuestion,
} from "lucide-react";

const navLinks = ["Courses", "Batches", "Results", "About"];

const categories = [
  {
    name: "JEE",
    description:
      "Master Physics, Chemistry, and Math with rank-focused mentorship and strategic test prep.",
    stats: "120+ Courses · 50K Students",
    icon: FlaskConical,
    iconBg: "bg-indigo-100",
    iconText: "text-indigo-600",
  },
  {
    name: "NEET",
    description:
      "Build conceptual clarity in Biology, Physics, and Chemistry with exam-accurate practice.",
    stats: "95+ Courses · 40K Students",
    icon: BookOpen,
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-600",
  },
  {
    name: "UPSC",
    description:
      "Comprehensive GS + optional guidance with current affairs, answer writing, and interview prep.",
    stats: "80+ Courses · 30K Students",
    icon: Landmark,
    iconBg: "bg-amber-100",
    iconText: "text-amber-600",
  },
  {
    name: "Defence",
    description:
      "Crack NDA, CDS, and AFCAT through expert-led modules, drills, and performance analytics.",
    stats: "60+ Courses · 22K Students",
    icon: Shield,
    iconBg: "bg-rose-100",
    iconText: "text-rose-600",
  },
];

const features = [
  {
    title: "Live + Recorded",
    description:
      "Attend high-energy live classes and revise anytime with structured recordings.",
    icon: Video,
  },
  {
    title: "DPP & Notes",
    description:
      "Daily Practice Problems, concise notes, and revision kits curated for top ranks.",
    icon: FileText,
  },
  {
    title: "Doubt Solving",
    description:
      "Get your doubts resolved fast with dedicated mentors and peer learning channels.",
    icon: MessageCircleQuestion,
  },
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Courses");
  const [pressedCard, setPressedCard] = useState(null);

  const handleCardClick = (category) => {
    setPressedCard(category);
    console.log(`Navigating to ${category}`);
    setTimeout(() => setPressedCard(null), 150);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <nav
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8 lg:px-16"
          aria-label="Main navigation"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tight text-indigo-600">PW</span>
            <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-semibold text-indigo-700">
              Pro
            </span>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    onClick={() => setActiveNav(link)}
                    className={`text-sm font-medium transition-all duration-200 hover:text-indigo-600 ${
                      activeNav === link
                        ? "text-indigo-600 underline underline-offset-8"
                        : "text-slate-600"
                    }`}
                    aria-label={`Go to ${link}`}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>

            <button
              type="button"
              aria-label="Start Learning"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.02] hover:bg-indigo-700 hover:shadow-md"
            >
              Start Learning <ArrowRight size={16} />
            </button>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-slate-700 transition-all duration-200 hover:bg-slate-100 md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        <div
          className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-200 md:hidden ${
            mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-2 px-4 py-4">
            {navLinks.map((link) => (
              <button
                key={link}
                type="button"
                onClick={() => {
                  setActiveNav(link);
                  setMobileOpen(false);
                }}
                className={`block w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600 ${
                  activeNav === link ? "text-indigo-600 underline underline-offset-4" : "text-slate-700"
                }`}
                aria-label={`Go to ${link}`}
              >
                {link}
              </button>
            ))}
            <button
              type="button"
              aria-label="Start Learning"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-indigo-700"
            >
              Start Learning <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-4 md:px-8 lg:px-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(79,70,229,0.12),_transparent_55%)]" />
          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              🎓 Trusted by 2M+ Students
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
              Achieve Your <span className="text-indigo-600">Dreams.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-slate-500">
              India&apos;s most focused exam preparation platform. Learn from the best, crack the
              rest.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                type="button"
                aria-label="Explore Courses"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.02] hover:bg-indigo-700 hover:shadow-md"
              >
                Explore Courses <ArrowRight size={16} />
              </button>
              <button
                type="button"
                aria-label="Watch Demo"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:scale-[1.02] hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm"
              >
                Watch Demo <Play size={16} />
              </button>
            </div>

            <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center justify-center gap-5 text-sm font-medium text-slate-600 sm:flex-row sm:gap-6">
              <span>2M+ Students</span>
              <span className="hidden h-5 w-px bg-slate-200 sm:block" />
              <span>500+ Educators</span>
              <span className="hidden h-5 w-px bg-slate-200 sm:block" />
              <span>98% Success Rate</span>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 md:px-8 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-slate-900">Choose Your Path</h2>
              <p className="mt-3 text-sm text-slate-500">
                Structured programs designed for every serious aspirant, from fundamentals to
                final rank.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.name}
                    type="button"
                    onClick={() => handleCardClick(category.name)}
                    aria-label={`Explore ${category.name} courses`}
                    className={`group rounded-2xl border border-slate-100 bg-white p-6 text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg ${
                      pressedCard === category.name ? "scale-95" : "scale-100"
                    }`}
                  >
                    {index === 0 && (
                      <span className="mb-4 inline-flex h-2 w-20 rounded-full bg-slate-100 animate-pulse" />
                    )}
                    <span
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${category.iconBg}`}
                    >
                      <Icon className={category.iconText} size={22} />
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900">{category.name}</h3>
                    <p className="mt-2 text-sm text-slate-500">{category.description}</p>
                    <p className="mt-4 text-xs text-slate-400">{category.stats}</p>
                    <p className="mt-5 text-sm font-medium text-indigo-600 transition-all duration-200 group-hover:translate-x-0.5">
                      Explore →
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-indigo-50 px-4 py-20 md:px-8 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-slate-900">Why PW-Pro Works</h2>
              <p className="mt-3 text-sm text-slate-500">
                Designed with discipline, clarity, and mentorship to help you stay exam-ready every
                day.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article key={feature.title} className="rounded-2xl border border-indigo-100 bg-white p-6">
                    <Icon className="text-indigo-600" size={24} />
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">{feature.title}</h3>
                    <p className="mt-2 text-sm text-slate-500">{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100 px-4 py-8 md:px-8 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-tight text-indigo-600">PW</span>
            <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-semibold text-indigo-700">
              Pro
            </span>
            <span className="ml-2">Achieve Your Dreams</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-all duration-200 hover:text-indigo-600">
              Courses
            </a>
            <a href="#" className="transition-all duration-200 hover:text-indigo-600">
              About
            </a>
            <a href="#" className="transition-all duration-200 hover:text-indigo-600">
              Contact
            </a>
          </div>
          <p>© 2026 PW-Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
