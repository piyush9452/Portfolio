import { Suspense, lazy, useCallback, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useHash } from './hooks/useMotion';

const CaseStudy = lazy(() => import('./components/CaseStudy'));
const BASE_TITLE = document.title;

function ScrollProgress() {
  const bar = useRef(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return (
    <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[55] h-px">
      <div ref={bar} className="h-full origin-left scale-x-0 bg-accent/80" />
    </div>
  );
}

function App() {
  const hash = useHash();
  const slug = hash.startsWith('#/work/') ? decodeURIComponent(hash.slice(7)) : null;
  const openedInPage = useRef(false);
  const firstRender = useRef(true);

  useEffect(() => {
    // A case study reached by clicking (not a direct link) has a page to go back to.
    if (!firstRender.current && slug) openedInPage.current = true;
    if (!slug) {
      openedInPage.current = false;
      document.title = BASE_TITLE;
    }
    firstRender.current = false;
  }, [slug]);

  // Go back if the case study was opened from the page (restores scroll);
  // otherwise (direct link) fall back to the work section.
  const close = useCallback(() => {
    if (openedInPage.current) {
      window.history.back();
    } else {
      window.location.hash = '#projects';
    }
  }, []);

  return (
    <div className="grain min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main id="main" inert={slug ? true : undefined}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      {slug && (
        <Suspense fallback={<div className="fixed inset-0 z-[70] bg-ink" />}>
          <CaseStudy slug={slug} onClose={close} />
        </Suspense>
      )}
    </div>
  );
}

export default App;
