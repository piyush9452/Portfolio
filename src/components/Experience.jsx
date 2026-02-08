import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
        <span className="text-blue-500">04.</span> Professional Experience
      </h2>

      <div className="relative border-l border-slate-700 ml-3 md:ml-6 space-y-12">
        <div className="relative pl-8 md:pl-12">
          {/* Timeline Dot */}
          <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-blue-500 ring-4 ring-slate-900"></span>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <h3 className="text-xl font-bold text-white">
              Web Developer Intern & Team Manager
            </h3>
            <span className="text-sm font-mono text-blue-400 mt-1 sm:mt-0">
              Present
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-slate-400 mb-6">
            <span className="font-semibold text-slate-300">Adore Simtrak</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1"><MapPin size={14}/> Remote / Hybrid</span>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 min-w-[6px] h-1.5 bg-blue-500 rounded-full"></span>
                <span>
                  <strong>Team Leadership:</strong> Successfully managing and guiding a development team, overseeing sprint planning, task assignment, and code reviews in an Agile environment.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 min-w-[6px] h-1.5 bg-blue-500 rounded-full"></span>
                <span>
                  <strong>Full Stack Development:</strong> actively contributing to core feature implementation using React.js and Node.js, ensuring scalable and maintainable code architecture.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 min-w-[6px] h-1.5 bg-blue-500 rounded-full"></span>
                <span>
                  <strong>Project Delivery:</strong> Streamlined development workflows resulting in improved delivery times and higher code quality standards for client projects.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
