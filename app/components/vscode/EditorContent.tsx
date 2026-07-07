"use client";

import { useVSCode } from "../../context/VSCodeContext";
import Hero from "../Hero";
import About from "../About";
import Experience from "../Experience";
import Projects from "../Projects";
import Contact from "../Contact";
import Testimonials from "../Testimonial";
import SectionWrapper from "../SectionWrapper";
import Footer from "../Footer";

export default function EditorContent() {
  const { activeTab, openTabs } = useVSCode();

  const sectionStyle = {
    paddingTop: '2rem',
    paddingBottom: '2rem',
    marginTop: '1rem',
  };
  const sectionTitleStyle = "text-2xl font-bold mb-6 text-center uppercase";
  const contentBoxStyle = "bg-[var(--box-bg)] border border-[var(--border)] p-6 rounded-none";

  if (openTabs.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-[var(--accent)] font-sans text-2xl opacity-50 select-none">
        Yosef_Portfolio
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <SectionWrapper id="about" title="About Me" sectionStyle={sectionStyle} sectionTitleStyle={sectionTitleStyle}>
            <About contentBoxStyle={contentBoxStyle} />
          </SectionWrapper>
        );
      case 'experience':
        return (
          <SectionWrapper id="work" title="Work Experience" sectionStyle={sectionStyle} sectionTitleStyle={sectionTitleStyle}>
            <Experience contentBoxStyle={contentBoxStyle} />
          </SectionWrapper>
        );
      case 'projects':
        return (
          <SectionWrapper id="projects" title="Projects" sectionStyle={sectionStyle} sectionTitleStyle={sectionTitleStyle}>
            <Projects contentBoxStyle={contentBoxStyle} />
          </SectionWrapper>
        );
      case 'contact':
        return (
          <SectionWrapper id="contact" title="Contact" sectionStyle={sectionStyle} sectionTitleStyle={sectionTitleStyle}>
            <Contact />
          </SectionWrapper>
        );
      case 'testimonials':
        return (
          <Testimonials sectionStyle={sectionStyle} sectionTitleStyle={sectionTitleStyle} contentBoxStyle={contentBoxStyle} />
        );
      case 'page':
      default:
        return (
          <>
            <Hero />
            <SectionWrapper id="about" title="About Me" sectionStyle={sectionStyle} sectionTitleStyle={sectionTitleStyle}>
              <About contentBoxStyle={contentBoxStyle} />
            </SectionWrapper>
            <SectionWrapper id="work" title="Work Experience" sectionStyle={sectionStyle} sectionTitleStyle={sectionTitleStyle}>
              <Experience contentBoxStyle={contentBoxStyle} />
            </SectionWrapper>
            <SectionWrapper id="projects" title="Projects" sectionStyle={sectionStyle} sectionTitleStyle={sectionTitleStyle}>
              <Projects contentBoxStyle={contentBoxStyle} />
            </SectionWrapper>
            <SectionWrapper id="contact" title="Contact" sectionStyle={sectionStyle} sectionTitleStyle={sectionTitleStyle}>
              <Contact />
            </SectionWrapper>
            {/* <Testimonials sectionStyle={sectionStyle} sectionTitleStyle={sectionTitleStyle} contentBoxStyle={contentBoxStyle} /> */}
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="py-8 px-4 font-mono max-w-5xl mx-auto">
      {renderContent()}
    </div>
  );
}
