"use client";
import Link from "next/link";

// Contact component
export default function Contact() {
  return (
    <div className="text-center">
      <p className="mb-6 max-w-md mx-auto text-[var(--accent)]">
         Open to discussing new projects and opportunities.
      </p>
      <div className="space-y-3">
        {/* Email */}
        <p className="text-base text-[var(--foreground)]">
          <span className="text-[var(--accent)]">Email:</span>{' '}
          <Link href="mailto:Josephabate1921@gmail.com"
             className="text-[var(--link)] hover:text-[var(--foreground)] transition-colors duration-200">
            Josephabate1921@gmail.com
          </Link>
        </p>
        <p className="text-base text-[var(--foreground)]">
          <span className="text-[var(--accent)]">Email:</span>{' '}
          <Link href="mailto:it-unit@htu.edu.et"
             className="text-[var(--link)] hover:text-[var(--foreground)] transition-colors duration-200">
            it-unit@htu.edu.et
          </Link>
        </p>
        {/* Phone */}
        <p className="text-base text-[var(--foreground)]">
          <span className="text-[var(--accent)]">Phone:</span>{' '}
          <span>+251 931 581 89</span>
        </p>
        {/* Social Links */}
        <div className="flex justify-center space-x-6 pt-3">
          <Link href="https://github.com/yazz21" target="_blank" rel="noopener noreferrer"
             className="text-[var(--link)] hover:text-[var(--foreground)] transition-colors duration-200 text-base">
              [GitHub]
             </Link>
          <Link href="https://linkedin.com/in/yoseph-abate" target="_blank" rel="noopener noreferrer"
             className="text-[var(--link)] hover:text-[var(--foreground)] transition-colors duration-200 text-base">
            [LinkedIn]
            </Link>
        </div>
      </div>
    </div>
  );
}
