// === FILE: components/SectionWrapper.js ===
// Optional helper component for consistent section styling

"use client"; // Needed if you add motion effects directly here

// Wrapper component to apply consistent styling to sections
export default function SectionWrapper({ id, title, children, sectionStyle, sectionTitleStyle, titleColor }: any) {
  return (
    <section id={id} style={sectionStyle} className="scroll-mt-16">
      <h2 className={sectionTitleStyle} style={{ color: titleColor }}>{title}</h2>
      {children}
    </section>
  );
}