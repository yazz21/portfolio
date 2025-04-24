"use client"; // Keep "use client" here as it uses hooks/state potentially

import Head from 'next/head';

// Import the new components
import Header from './components/Header'; // Adjust path as needed
import Hero from './components/Hero';
import About from "./components/About";
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionWrapper from './components/SectionWrapper'; // Import the wrapper
import Testimonials from './components/Testimonial';

export default function HomePage() {
  // Navigation items remain here or could be moved to Header if static
  const navItems = [
    { href: '/#hero', label: 'HOME' },
    { href: '/#about', label: 'ABOUT' },
    { href: '/#work', label: 'EXPERIENCE' },
    { href: '/#projects', label: 'PROJECTS' },
    { href: '/#contact', label: 'CONTACT' },
  ];

  // Define colors centrally
  const bgColor = '#272727';
  const accentColor = '#5c5959';
  const textColor = '#E0E0E0';
  const linkColor = '#88dd88';
  // const linkHoverColor = '#b3ffb3'; // Can be handled via CSS hover classes if preferred

  // Define section styles centrally
  const sectionStyle = {
    paddingTop: '4rem',
    paddingBottom: '4rem',
    marginTop: '2rem',
    borderTop: `1px dashed ${accentColor}`
  };
  const sectionTitleStyle = "text-2xl font-bold mb-6 text-center uppercase";
  const contentBoxStyle = {
    backgroundColor: 'rgba(92, 89, 89, 0.1)',
    border: `1px solid ${accentColor}`,
    padding: '1.5rem',
    borderRadius: '0px'
  };

  return (
    <div style={{ backgroundColor: bgColor, color: textColor }} className="min-h-screen font-mono">
      <Head>
        <title>Yosef Abate - Software Developer</title>
        <meta name="description" content="Yosef Abate's professional full-stack developer portfolio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Render Header component */}
      <Header
        navItems={navItems}
        bgColor={bgColor}
        accentColor={accentColor}
        textColor={textColor}
      />

      {/* Main Content Area */}
      <main className="container mx-auto py-12 px-4">

        {/* Render Hero component */}
        <Hero
          accentColor={accentColor}
          textColor={textColor}
          linkColor={linkColor}
        />

        {/* Render About section using Wrapper */}
        <SectionWrapper
           id="about"
           title="About Me"
           sectionStyle={sectionStyle}
           sectionTitleStyle={sectionTitleStyle}
           titleColor={textColor}
        >
            <About
                contentBoxStyle={contentBoxStyle}
                textColor={textColor}
                linkColor={linkColor}
            />
        </SectionWrapper>

        {/* Render Experience section using Wrapper */}
         <SectionWrapper
           id="work" // Keep id as 'work' for nav links
           title="Work Experience"
           sectionStyle={sectionStyle}
           sectionTitleStyle={sectionTitleStyle}
           titleColor={textColor}
        >
            <Experience
                contentBoxStyle={contentBoxStyle}
                textColor={textColor}
                accentColor={accentColor}
            />
        </SectionWrapper>

        {/* Render Projects section using Wrapper */}
        <SectionWrapper
           id="projects"
           title="Projects"
           sectionStyle={sectionStyle}
           sectionTitleStyle={sectionTitleStyle}
           titleColor={textColor}
        >
            <Projects
                contentBoxStyle={contentBoxStyle}
                textColor={textColor}
                accentColor={accentColor}
                linkColor={linkColor}
            />
        </SectionWrapper>

        {/* Render Contact section using Wrapper */}
        <SectionWrapper
           id="contact"
           title="Contact"
           sectionStyle={sectionStyle}
           sectionTitleStyle={sectionTitleStyle}
           titleColor={textColor}
        >
            <Contact
                accentColor={accentColor}
                textColor={textColor}
                linkColor={linkColor}
            />
        </SectionWrapper>

        <Testimonials
  sectionStyle={sectionStyle}
  sectionTitleStyle={sectionTitleStyle}
  contentBoxStyle={contentBoxStyle}
  textColor={textColor}
  accentColor={accentColor}
/>

      </main>

      {/* Render Footer component */}
      <Footer accentColor={accentColor} />
    </div>
  );
}