// === FILE: components/Footer.js ===

"use client"; // Add "use client" if needed for future interactions

// Footer component receives colors as props
export default function Footer({ accentColor }: any) {
  return (
    <footer
      style={{ borderTop: `1px solid ${accentColor}`, color: accentColor }}
      className="py-4 text-center text-xs mt-12"
    >
      <p>&copy; {new Date().getFullYear()} Yosef Abate // Addis Ababa, Ethiopia</p>
    </footer>
  );
}