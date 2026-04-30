"use client";
// About component receives styles and colors as props
export default function About({ contentBoxStyle }: { contentBoxStyle?: string }) {
  return (
    <div className={`max-w-3xl mx-auto ${contentBoxStyle}`}>
      <p className="leading-relaxed mb-4 text-[var(--foreground)]">
        ~$ I am a results-oriented Software Developer...
      </p>
      <p className="leading-relaxed mb-4 text-[var(--foreground)]">
        My expertise spans modern JavaScript frameworks like <span className="text-[var(--link)]">Next.js</span>, <span className="text-[var(--link)]">React</span>, and <span className="text-[var(--link)]">Angular</span>, complemented by backend experience with <span className="text-[var(--link)]">.NET</span>.
      </p>
      <p className="leading-relaxed text-[var(--foreground)]">
        Proficient in API design, Agile methodologies, DevOps (<span className="text-[var(--link)]">Git</span>, <span className="text-[var(--link)]">Jenkins</span>, <span className="text-[var(--link)]">Docker</span>). Passionate about solving complex problems and improving efficiency.
      </p>
    </div>
  );
}
