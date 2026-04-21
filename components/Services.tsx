const services = [
  { num: "01", title: "Product Design",   desc: "UX research, wireframes, design systems, and pixel-perfect interfaces that convert and delight." },
  { num: "02", title: "Web Development",  desc: "Full-stack apps built with Next.js, React, Node.js, and battle-tested cloud infrastructure." },
  { num: "03", title: "Mobile Apps",      desc: "Cross-platform iOS & Android experiences with React Native that feel truly native." },
  { num: "04", title: "AI Integration",   desc: "LLM-powered features, recommendation engines, and intelligent automation in your product." },
  { num: "05", title: "Cloud & DevOps",   desc: "Scalable infra, CI/CD pipelines, and containerised deployments on AWS, GCP, or Azure." },
  { num: "06", title: "Security & QA",    desc: "Comprehensive testing strategies and security audits so you ship with confidence." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600 mb-4">
              Services
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 leading-tight tracking-tight">
              What we do
            </h2>
          </div>
          <p className="text-sm text-neutral-600 max-w-xs leading-relaxed">
            Full-spectrum engineering from concept to production and beyond.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-neutral-200 border border-neutral-200">
          {services.map((s) => (
            <div
              key={s.num}
              className="p-8 hover:bg-neutral-50 transition-colors duration-200"
            >
              <span className="block text-[11px] font-bold tracking-widest text-neutral-300 mb-5">
                {s.num}
              </span>
              <h3 className="text-base font-bold text-neutral-900 mb-3">{s.title}</h3>
              <p className="text-sm text-neutral-700 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
