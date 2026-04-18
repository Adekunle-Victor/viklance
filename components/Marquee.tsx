const items = [
  "Web Development", "Mobile Apps", "Product Design",
  "AI Integration", "Cloud & DevOps", "UI/UX", "API Development", "Security & QA",
];

const track = [...items, ...items, ...items];

export default function Marquee() {
  return (
    <div className="bg-neutral-100 border-y border-neutral-200 py-3 overflow-hidden">
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: "marquee 24s linear infinite",
        }}
      >
        {track.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-5 px-2">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-neutral-600">
              {item}
            </span>
            <span className="text-neutral-300 text-[10px]">◆</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
