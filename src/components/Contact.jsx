import React from 'react';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <h2 className="text-blue-500 font-semibold tracking-wide uppercase mb-3">05. What's Next?</h2>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
      
      <p className="max-w-2xl mx-auto text-slate-400 text-lg mb-10 leading-relaxed">
        I'm currently looking for new opportunities to contribute my skills in Full Stack Development. 
        Whether you have a question, a project idea, or just want to say hi, my inbox is always open!
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <a 
          href="mailto:piyush@example.com" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500/10 transition-colors"
        >
          <Mail size={20} />
          Say Hello
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 text-slate-300 font-semibold rounded-lg hover:bg-slate-700 transition-colors"
        >
          <Linkedin size={20} />
          Connect on LinkedIn
        </a>
      </div>

      <div className="mt-20 pt-10 border-t border-slate-800 flex flex-col items-center gap-4">
        <div className="flex gap-6 text-slate-400">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
