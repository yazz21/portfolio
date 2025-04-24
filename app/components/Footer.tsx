"use client"; 

// Footer component receives colors as props
export default function Footer({ accentColor }) {
  return (
    <footer
      style={{ borderTop: `1px solid ${accentColor}`, color: accentColor }}
      className="py-4 text-center text-xs mt-12"
    >
      <p>&copy; {new Date().getFullYear()} Yosef Abate // Addis Ababa, Ethiopia</p>
    </footer>
  );
}