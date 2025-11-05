import { lazy, Suspense } from "react";
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
