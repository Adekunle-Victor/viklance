"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { value: "50+",  label: "Projects shipped"   },
  { value: "30+",  label: "Happy clients"      },
  { value: "5yrs", label: "In the game"        },
  { value: "99%",  label: "Satisfaction rate"  },
  { value: "12+",  label: "Industries served"  },
  { value: "4",    label: "Countries reached"  },
];

const values = [
  {
    num: "01",
    title: "Craft over shortcuts",
    desc: "We write code we're proud to ship, not code we're embarrassed to maintain. Quality is the default, not an upgrade.",
  },
  {
    num: "02",
    title: "Radical honesty",
    desc: "If something won't work, we say so early. No over-promising, no vague timelines, no sugarcoating bad news.",
  },
  {
    num: "03",
    title: "Speed without chaos",
    desc: "We move fast because we plan well, not because we skip tests, ignore edge cases, or cut architectural corners.",
  },
  {
    num: "04",
    title: "Long-term thinking",
    desc: "We build software meant to last. Every decision accounts for what happens six months after the launch party.",
  },
];

const stack = [
  "Next.js", "React", "TypeScript", "Node.js", "Python", "FastAPI",
  "PostgreSQL", "Redis", "AWS", "GCP", "Docker", "Kubernetes",
  "React Native", "Flutter", "Prisma", "GraphQL", "OpenAI", "Stripe",
];

const team = [
  { name: "Victor Adekunle",   role: "Founder & Lead Software Engineer", initials: "VA" },
  { name: "Moses Adeosun.",     role: "Business Analyst", initials: "MA" },
  { name: "Divine Onofeghara",     role: "Client Acquisition Specialist/ Software Engineer", initials: "DO" },
  { name: "Amoke Paul",    role: "Quality Assurance Specialist", initials: "AP" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative bg-neutral-100 overflow-hidden">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(#d4d4d4 1px, transparent 1px), linear-gradient(90deg, #d4d4d4 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_40%_50%,#f5f5f5,transparent)]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-40 pb-24">
            <p className="inline-flex items-center gap-3 text-[11px] font-black tracking-widest uppercase text-neutral-500 mb-6">
              <span className="w-8 h-px bg-neutral-400" />
              About us
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-neutral-900 leading-tight tracking-tight mb-6 max-w-3xl">
              Built by engineers
              <br />
              <span className="text-neutral-400">who give a damn.</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-700 max-w-xl leading-relaxed">
              Viklance Orbit is a close-knit team of engineers and non-tech teams who are obsessed with
              craft. We partner with startups and scale-ups to turn ambitious ideas into
              reliable, beautifully executed software.
            </p>
          </div>
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </section>

        {/* Story */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">
              <div>
                <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600 mb-5">
                  Our story
                </p>
                <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 leading-tight tracking-tight">
                  Started small.
                  <br />Still shipping.
                </h2>
              </div>
              <div className="flex flex-col gap-5 text-base text-neutral-700 leading-relaxed">
                <p>
                  Viklance Orbit started as a one-person operation, a developer who is 
                  tired of watching great product ideas die because of bad engineering
                  partners. We believed there was a better way to build software for
                  growing companies.
                </p>
                <p>
                  Five years in, we&apos;ve shipped over 50 projects across fintech, SaaS,
                  e-commerce, and AI and we still treat every engagement like it&apos;s
                  our own product on the line.
                </p>
                <p>
                  We stay small on purpose. Every client gets senior-level attention from
                  kick-off to post-launch. No juniors running your project while the
                  partners sell the next deal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-24 bg-neutral-900">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-400 mb-14">
              By the numbers
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="border border-neutral-700/60 bg-white/5 rounded-2xl p-6 sm:p-8"
                >
                  <p className="text-4xl sm:text-5xl font-black text-white mb-2 tracking-tight">
                    {s.value}
                  </p>
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-400">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600 mb-12">
              What we stand for
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-neutral-200 border border-neutral-200">
              {values.map((v) => (
                <div key={v.num} className="bg-white p-8 sm:p-10">
                  <span className="block text-[11px] font-bold tracking-widest text-neutral-300 mb-5">
                    {v.num}
                  </span>
                  <h3 className="text-base font-bold text-neutral-900 mb-3">{v.title}</h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section className="py-24 bg-neutral-50 border-y border-neutral-200">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">
              <div>
                <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600 mb-5">
                  Tech stack
                </p>
                <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 leading-tight tracking-tight mb-4">
                  Tools we trust.
                </h2>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  We pick technology based on the problem, not hype. These are the tools
                  we&apos;ve battle-tested across dozens of production systems.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-semibold tracking-widest uppercase px-4 py-2 rounded-full border border-neutral-200 bg-white text-neutral-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600 mb-12">
              The team
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="border border-neutral-200 rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-neutral-900 flex items-center justify-center">
                    <span className="text-sm font-black text-white tracking-widest">
                      {member.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-900">{member.name}</p>
                    <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-500 mt-0.5">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-neutral-900">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight tracking-tight mb-3">
                Ready to build something?
              </h2>
              <p className="text-base text-neutral-400 leading-relaxed">
                Tell us about your project. We&apos;ll be honest about fit.
              </p>
            </div>
            <Link
              href="/#contact"
              className="shrink-0 inline-flex items-center gap-2 bg-white text-neutral-900 font-bold px-8 py-4 rounded-full text-sm hover:bg-neutral-200 transition-colors"
            >
              Let&apos;s talk
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
