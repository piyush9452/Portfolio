import React from 'react';
import profileImg from '../assets/image.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
          <span className="text-blue-500">01.</span> About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6 text-slate-300 leading-relaxed">
            <p>
              I am a <strong className="text-white">Full Stack Developer Intern</strong> and <strong className="text-white">Team Manager</strong> at Adore Simtrak, 
              where I bridge the gap between technical implementation and project management. Currently pursuing my B.Tech in Computer Science 
              at Medicaps University (2024–2028).
            </p>
            <p>
              My journey involves not just writing code but also guiding teams through Agile workflows, assigning tasks, and reviewing code 
              to ensure high-quality deliverables. I thrive in environments that challenge me to solve complex problems while fostering 
              a collaborative team culture.
            </p>
            <p>
              When I'm not coding or managing sprints, I'm exploring new technologies and refining my skills to build better, 
              more scalable web applications.
            </p>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-xl bg-slate-800 border border-slate-700 overflow-hidden">
              <img
                src={profileImg}
                alt="Piyush Kumar"
                className="w-full h-full object-cover opacity-95"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
