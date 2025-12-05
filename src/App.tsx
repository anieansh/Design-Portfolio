import { lazy, Suspense } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Navigation } from './components/Navigation';
import { CustomCursor } from './components/CustomCursor';

// Lazy load components for better performance
const Experience = lazy(() => import('./components/Experience').then(m => ({ default: m.Experience })));
const Projects = lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })));
const Skills = lazy(() => import('./components/Skills').then(m => ({ default: m.Skills })));
const Stats = lazy(() => import('./components/Stats').then(m => ({ default: m.Stats })));
const Certifications = lazy(() => import('./components/Certifications').then(m => ({ default: m.Certifications })));
const Education = lazy(() => import('./components/Education').then(m => ({ default: m.Education })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

// Loading component
function SectionLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
        <p className="text-white/40 text-sm">Loading...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-black text-white">
      <CustomCursor />
      <Navigation />
      <Hero />
      <About />
      <Suspense fallback={<SectionLoader />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Stats />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Certifications />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Education />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
}