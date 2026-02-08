import React from 'react';
import profileImg from '../assets/image.jpg';
import { ArrowRight, FileText, Github, Linkedin } from 'lucide-react';
import ThreeHero from './ThreeHero';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center min-h-[80vh]">
      <ThreeHero />
      <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
        <h2 className="text-blue-500 font-semibold tracking-wide uppercase">Full Stack Developer & Team Manager</h2>
        <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight">
          Hi, I'm <span className="text-blue-500">Piyush Kumar</span>
          <br />
          <span className="text-slate-400 text-3xl sm:text-5xl">Building scalable web solutions.</span>
        </h1>
        
        <p className="max-w-2xl text-slate-400 text-lg sm:text-xl leading-relaxed">
          I combine technical expertise in React and Node.js with leadership experience in Agile environments. 
          Focused on building modern, user-centric applications that drive business growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a 
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            View Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a 
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-slate-700 text-base font-medium rounded-lg text-slate-300 hover:bg-slate-800 transition-colors"
          >
            Contact Me
          </a>
        </div>

        <div className="flex gap-6 pt-8 text-slate-400">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
            <Linkedin size={24} />
          </a>
        </div>
        <div className="relative hidden md:block">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-20"></div>
          <img
            src={profileImg}
            alt="Piyush Kumar"
            className="relative w-64 h-64 mx-auto rounded-full object-cover border border-slate-700 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
