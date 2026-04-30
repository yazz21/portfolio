"use client";
import Link from "next/link";

export default function Projects({ contentBoxStyle }: { contentBoxStyle?: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {/* Project 1: Grar Books */}
      <div className={contentBoxStyle}>
        <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">Grar Books</h3>
        <p className="leading-relaxed text-sm mb-2 text-[var(--accent)]">
          <strong>The Concept:</strong> A multi-dimensional marketplace for PDFs, physical books, and audiobooks.<br />
          <strong>Key Features:</strong> Buy/Sell marketplace, integrated payment systems, and upcoming subscription/freemium models.<br />
          <strong>Current Status:</strong> Production-ready with a high active user base.
        </p>
        <div className="mt-3">
          <Link href="https://grarbooks.com" target="_blank" rel="noopener noreferrer" className="text-[var(--link)] hover:text-[var(--foreground)] transition-colors text-sm">[grarbooks.com]</Link>
        </div>
      </div>

      {/* Project 2: Holy Trinity University Digital Ecosystem */}
      <div className={contentBoxStyle}>
        <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">Holy Trinity University Digital Ecosystem</h3>
        <p className="leading-relaxed text-sm mb-2 text-[var(--accent)]">
          <strong>The Suite:</strong><br />
          • htu.edu.et: The public-facing corporate identity and information hub.<br />
          • online.htu.edu.et: A heavy-lifting E-learning LMS.<br />
          • app.htu.edu.et: A complex Student Information Management System (SIMS).
        </p>
        <div className="mt-3 flex flex-wrap gap-4">
          <Link href="https://htu.edu.et" target="_blank" rel="noopener noreferrer" className="text-[var(--link)] hover:text-[var(--foreground)] transition-colors text-sm">[htu.edu.et]</Link>
          <Link href="https://online.htu.edu.et" target="_blank" rel="noopener noreferrer" className="text-[var(--link)] hover:text-[var(--foreground)] transition-colors text-sm">[online.htu.edu.et]</Link>
          <Link href="https://app.htu.edu.et" target="_blank" rel="noopener noreferrer" className="text-[var(--link)] hover:text-[var(--foreground)] transition-colors text-sm">[app.htu.edu.et]</Link>
        </div>
      </div>

      {/* Project 3: Uni-Flow SIMS */}
      <div className={contentBoxStyle}>
        <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">Uni-Flow SIMS (SaaS Edition)</h3>
        <p className="leading-relaxed text-sm mb-2 text-[var(--accent)]">
          Uni-Flow is a modular, multi-tenant Student Information Management System designed for any educational institution.
        </p>
        <div className="mt-3">
          <Link href="https://uni-flow-student-information-manage.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[var(--link)] hover:text-[var(--foreground)] transition-colors text-sm">[Live Demo]</Link>
        </div>
      </div>

      {/* Project 4: BookVerse */}
      <div className={contentBoxStyle}>
        <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">BookVerse</h3>
        <p className="leading-relaxed text-sm mb-2 text-[var(--accent)]">
          A streamlined, single-vendor digital storefront. While Grar Books is a massive marketplace, M-Techs is optimized for one shop front.
        </p>
        <div className="mt-3">
          <Link href="https://books.mtechs.io" target="_blank" rel="noopener noreferrer" className="text-[var(--link)] hover:text-[var(--foreground)] transition-colors text-sm">[books.mtechs.io]</Link>
        </div>
      </div>
    </div>
  );
}
