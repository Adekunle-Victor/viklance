const projects = [
  {
    tag: "E-Commerce",
    title: "Online Store",
    desc: "Full online store with product catalogue, cart, checkout, and Paystack payment integration. Includes a custom admin dashboard to manage orders, inventory, and customers.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Paystack"],
    dark: false,
  },
  {
    tag: "Fintech",
    title: "Payments App",
    desc: "Mobile-first payments platform built for local businesses. Handles transfers, transaction history, and real-time balance updates with a clean, simple interface.",
    tech: ["React Native", "Node.js", "PostgreSQL", "Paystack"],
    dark: true,
  },
  {
    tag: "Job Portal",
    title: "Recruitment Platform",
    desc: "End-to-end hiring platform where employers post jobs and manage applicants, while candidates track their applications through a personal dashboard.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Resend"],
    dark: true,
  },
  {
    tag: "Automotive",
    title: "Car Dealership",
    desc: "Vehicle listing platform with search and filter by make, model, and price. Includes an enquiry system and an admin panel to manage stock and leads.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Cloudinary"],
    dark: false,
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-14">
          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600 mb-4">
              Selected work
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 leading-tight tracking-tight">
              Projects we&apos;re proud of
            </h2>
          </div>
          <a
            href="#contact"
            className="self-start sm:self-auto inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-400 hover:text-neutral-900 transition-colors group"
          >
            Start a project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-0.5 transition-transform">
              <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between min-h-80 transition-transform hover:-translate-y-1 duration-300 ${
                p.dark
                  ? "bg-neutral-900"
                  : "bg-neutral-100"
              }`}
            >
              <div>
                <span className={`text-[11px] font-semibold tracking-widest uppercase ${p.dark ? "text-neutral-400" : "text-neutral-600"}`}>
                  {p.tag}
                </span>
                <h3 className={`text-3xl sm:text-4xl font-black mt-3 mb-4 tracking-tight ${p.dark ? "text-white" : "text-neutral-900"}`}>
                  {p.title}
                </h3>
                <p className={`text-sm leading-relaxed ${p.dark ? "text-neutral-300" : "text-neutral-700"}`}>
                  {p.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className={`text-[11px] font-semibold px-3 py-1 rounded-full ${
                      p.dark ? "bg-neutral-800 text-neutral-300" : "bg-neutral-200 text-neutral-600"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
