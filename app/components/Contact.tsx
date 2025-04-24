"use client";
import Link from "next/link";

 

// Contact component receives colors as props
export default function Contact({ accentColor, textColor, linkColor }) {
  return (
    <div className="text-center">
      <p className="mb-6 max-w-md mx-auto" style={{ color: accentColor }}>
         Open to discussing new projects and opportunities.
      </p>
      <div className="space-y-3">
        {/* Email */}
        <p className="text-base">
          <span style={{ color: accentColor }}>Email:</span>{' '}
          <Link href="mailto:Josephabate1921@gmail.com"
             style={{ color: linkColor }}
             className="hover:text-white transition-colors duration-200">
            Josephabate1921@gmail.com
          </Link>
        </p>
        <p className="text-base">
          <span style={{ color: accentColor }}>Email:</span>{' '}
          <Link href="mailto:Josephabate1921@gmail.com"
             style={{ color: linkColor }}
             className="hover:text-white transition-colors duration-200">
            it-unit@htu.edu.et
          </Link>
        </p>
        {/* Phone */}
        <p className="text-base">
          <span style={{ color: accentColor }}>Phone:</span>{' '}
          <span style={{ color: textColor }}>+251 931 581 89</span>
        </p>
        {/* Social Links */}
        <div className="flex justify-center space-x-6 pt-3">
          <Link href="https://github.com/yazz21" target="_blank" rel="noopener noreferrer"
             style={{ color: linkColor }}
             className="hover:text-white transition-colors duration-200 text-base">
              [GitHub]
             </Link>
          <Link href="https://linkedin.com/in/yoseph-abate" target="_blank" rel="noopener noreferrer"
             style={{ color: linkColor }}
             className="hover:text-white transition-colors duration-200 text-base">
            [LinkedIn]
            </Link>
        </div>
      </div>
    </div>
  );
}

