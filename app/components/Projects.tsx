
// === FILE: components/Projects.js ===

"use client";
import Link from "next/link";

 // Add "use client" if using motion or client hooks directly

// Projects component receives styles and colors as props
export default function Projects({ contentBoxStyle, textColor, accentColor, linkColor }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {/* Project 1 */}
      <div style={contentBoxStyle}>
        <h3 className="text-lg font-semibold mb-2" style={{ color: textColor }}>Holy Trinity University Platform</h3>
        <p className="leading-relaxed text-sm" style={{ color: accentColor }}>
          Online education system & website (Next.js). Features: student/course mgmt, exams, live classes, self-hosted.
        </p>
        Optional Links
        <div className="mt-3">
          <Link href="#" style={{ color: linkColor }} className="hover:text-white mr-4 text-sm">[Live Demo]</Link>
          <Link href="#" style={{ color: linkColor }} className="hover:text-white text-sm">[Repo]</Link>
        </div>
      </div>

      {/* Project 2 */}
      <div style={contentBoxStyle}>
        <h3 className="text-lg font-semibold mb-2" style={{ color: textColor }}>Government Web Applications</h3>
        <p className="leading-relaxed text-sm" style={{ color: accentColor }}>
          Complex apps (Angular, ASP.NET) for ministries (Water, Housing, Mines). Included Git version control & CI/CD (Jenkins, Docker).
        </p>
      </div>
    </div>
  );
}

