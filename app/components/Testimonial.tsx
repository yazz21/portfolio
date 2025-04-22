"use client";

import { motion } from 'framer-motion';

// Define a type for a single testimonial (optional, but good practice with TypeScript)
interface Testimonial {
  quote: string;
  name: string;
  title?: string; // Optional title/company
}

// Define the testimonials data
const testimonials: Testimonial[] = [
  {
    quote: "Yosef is a highly skilled and dedicated developer. He consistently delivered high-quality work and was a pleasure to collaborate with.",
    name: "Jane Doe",
    title: "Senior Developer at Tech Corp",
  },
  {
    quote: "I was impressed by Yosef's ability to quickly understand complex requirements and translate him into efficient code.",
    name: "John Smith",
    title: "Project Manager at Innovate Solutions",
  },
  {
    quote: "Working with Yosef was a great experience. He is professional, knowledgeable, and always willing to go the extra mile.",
    name: "Alice Johnson",
    // No title for this one
  },
];

// Testimonials component receives styles and colors as props
export default function Testimonials({ sectionStyle, sectionTitleStyle, contentBoxStyle, textColor, accentColor }: any) {

  return (
    <section id="testimonials" style={sectionStyle}>
      <div className="container mx-auto px-4">
        <motion.h2
          className={sectionTitleStyle}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          style={{ color: textColor }}
        >
          Testimonials
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              // Apply initial box styles
              style={contentBoxStyle}
              className="relative overflow-hidden " // Added relative and overflow hidden for gradient
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Stagger the entry animation
              // Hover animation
              whileHover={{
                // We can't directly animate background gradients easily with Framer Motion
                // A common technique is to use a pseudo-element or animate boxShadow
                // Let's animate a subtle box shadow for a "vibrant glow" effect
                boxShadow: `0 0 20px #88dd88`, // Adjust spread and color as needed
                transition: { duration: 0.3 }
              }}
            >
               {/* We'll keep the contentBoxStyle properties like padding and border
                   but handle the hover effect with boxShadow */}

              <div className="flex flex-col justify-between h-full"> {/* Ensure content takes full height */}
                <p className="italic mb-4" style={{ color: textColor }}>
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold" style={{ color: accentColor }}>
                    - {testimonial.name}
                  </p>
                  {testimonial.title && (
                    <p className="text-sm" style={{ color: accentColor }}>
                      {testimonial.title}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}