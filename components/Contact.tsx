import ContactForm from "@/components/ContactForm";
import { channels } from "@/lib/contact-channels";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">
          {/* left */}
          <div>
            <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600 mb-5">
              Get in touch
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-neutral-900 leading-tight tracking-tight mb-6">
              Ready to build
              <br />something great?
            </h2>
            <p className="text-base text-neutral-700 leading-relaxed mb-10">
              Tell us about your project. We typically respond within a few hours
              and are always honest about fit.
            </p>
            <div className="flex flex-col gap-4">
              {channels.map((c) => (
                <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-4 group">
                  <span className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 group-hover:border-neutral-400 group-hover:text-neutral-900 transition-all">
                    {c.icon}
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-500">{c.label}</p>
                    <p className="text-sm font-semibold text-neutral-900 group-hover:underline underline-offset-2">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
