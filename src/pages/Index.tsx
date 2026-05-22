import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// Lazy load below-the-fold components
const About = lazy(() => import("@/components/About"));
const Services = lazy(() => import("@/components/Services"));
const Packages = lazy(() => import("@/components/Packages"));
const Portfolio = lazy(() => import("@/components/Portfolio"));
const WorkProcess = lazy(() => import("@/components/WorkProcess"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const ContactForm = lazy(() => import("@/components/ContactForm"));
const Footer = lazy(() => import("@/components/Footer"));
const AIHelper = lazy(() => import("@/components/AIHelper"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Chaudhary Creative Studio — Design & Web Development</title>
        <meta name="description" content="Creative studio for logo design, branding, posters, thumbnails, resumes, plus web and app development for startups and creators." />
        <link rel="canonical" href="https://chaudharycreativestudio.lovable.app/" />
        <meta property="og:title" content="Chaudhary Creative Studio — Design & Web Development" />
        <meta property="og:description" content="Logo design, branding, posters, thumbnails, resumes, and web/app development for brands that want to stand out." />
        <meta property="og:url" content="https://chaudharycreativestudio.lovable.app/" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-screen" />}>
          <About />
          <Services />
          <Packages />
          <Portfolio />
          <WorkProcess />
          <WhyChooseUs />
          <ContactForm />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <AIHelper />
    </div>
  );
};

export default Index;
