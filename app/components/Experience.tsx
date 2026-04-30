"use client"; 

// Experience component receives styles and colors as props
export default function Experience({ contentBoxStyle }: { contentBoxStyle?: string }) {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Job 1 */}
      <div className={contentBoxStyle}>
        <h3 className="text-lg font-semibold text-[var(--foreground)]">Software Developer</h3>
        <p className="mb-1 text-[var(--accent)]">Holy Trinity University // Addis Ababa, Ethiopia</p>
        <p className="text-sm mb-3 text-[var(--accent)]">Jan 2023 – Present</p>
        <ul className="list-disc list-inside space-y-1 pl-4 text-[var(--foreground)]">
          <li>Developed full-featured online education system & university website (Next.js).</li>
          <li>Implemented student/course management, exams, live classes.</li>
          <li>Self-hosted platform on local server.</li>
          <li>Collaborated with staff to meet requirements.</li>
        </ul>
      </div>

      {/* Job 2 */}
      <div className={contentBoxStyle}>
        <h3 className="text-lg font-semibold text-[var(--foreground)]">Senior Full Stack Software Engineer</h3>
        <p className="mb-1 text-[var(--accent)]">Xoka IT Solutions // Addis Ababa, Ethiopia</p>
        <p className="text-sm mb-3 text-[var(--accent)]">June 2022 – August 2023</p>
        <ul className="list-disc list-inside space-y-1 pl-4 text-[var(--foreground)]">
          <li>Developed complex web apps (Angular, ASP.NET) for government clients.</li>
          <li>Managed version control (Git, Gitolite).</li>
          <li>Implemented CI/CD (Jenkins, Docker, Tuleap).</li>
          <li>Built systems for Ministry of Water/Irrigation, Housing Corp., Ministry of Mines.</li>
        </ul>
      </div>
    </div>
  );
}