"use client"; 

// Footer component
export default function Footer() {
  return (
    <footer
      className="py-4 text-center text-xs mt-12 border-t border-dashed border-[var(--border)] text-[var(--accent)]"
    >
      <p>&copy; {new Date().getFullYear()} Yosef Abate // Addis Ababa, Ethiopia</p>
    </footer>
  );
}