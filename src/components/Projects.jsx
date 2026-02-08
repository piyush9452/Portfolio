import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Billing & Invoice Management System",
      description: "A comprehensive full-stack billing solution designed to streamline business operations. Features include PDF invoice generation, WhatsApp integration for direct messaging, and real-time calculation of taxes and discounts.",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "Vercel"],
      liveLink: "https://billing-8cw7.vercel.app/",
      codeLink: "#", // User didn't provide specific repo link, placeholder
      features: [
        "CRUD operations for invoices, customers, and transactions",
        "Interactive dashboard for payment tracking",
        "Secure RESTful APIs with efficient data handling"
      ]
    },
    {
      title: "JobOne Portal",
      description: "A modern job search platform connecting recruiters and job seekers. Implements role-based access control to ensure secure and personalized experiences for different user types.",
      tech: ["React.js", "Node.js", "JWT Auth", "MongoDB", "Tailwind"],
      liveLink: "https://job1-sable.vercel.app/",
      codeLink: "#", // User didn't provide specific repo link, placeholder
      features: [
        "Role-based authentication (Recruiter/Seeker)",
        "Job posting and application management workflow",
        "Responsive and intuitive user interface"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="text-blue-500">03.</span> Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 flex flex-col transform-gpu hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl hover:shadow-slate-900/50"
            >
              <div className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-blue-600/20 to-cyan-500/20 pointer-events-none" />
              <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-4">
                    <a href={project.codeLink} className="text-slate-400 hover:text-white" title="View Code">
                      <Github size={20} />
                    </a>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500" title="View Live Site">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 bg-blue-500 rounded-full flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-6 py-4 bg-slate-800/50 border-t border-slate-800">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="text-xs font-mono text-blue-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
