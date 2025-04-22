// === FILE: components/About.js ===

"use client"; // Add "use client" if using motion or client hooks directly

// About component receives styles and colors as props
export default function About({ contentBoxStyle, textColor, linkColor }: any) {
  return (
    <div className="max-w-3xl mx-auto" style={contentBoxStyle}>
      <p className="leading-relaxed mb-4" style={{ color: textColor }}>
        ~$ I am a results-oriented Software Developer...
      </p>
      <p className="leading-relaxed mb-4" style={{ color: textColor }}>
        My expertise spans modern JavaScript frameworks like <span style={{ color: linkColor }}>Next.js</span>, <span style={{ color: linkColor }}>React</span>, and <span style={{ color: linkColor }}>Angular</span>, complemented by backend experience with <span style={{ color: linkColor }}>.NET</span>.
      </p>
      <p className="leading-relaxed" style={{ color: textColor }}>
        Proficient in API design, Agile methodologies, DevOps (<span style={{ color: linkColor }}>Git</span>, <span style={{ color: linkColor }}>Jenkins</span>, <span style={{ color: linkColor }}>Docker</span>). Passionate about solving complex problems and improving efficiency.
      </p>
    </div>
  );
}

