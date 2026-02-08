import React from 'react';
import { Code2, Database, Layout, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6 text-blue-500" />,
      skills: [
        "React.js",
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Bootstrap",
        "Responsive Design",
        "UI/UX Principles",
        "Accessibility (ARIA)",
        "Performance Optimization",
        "Component Architecture",
        "Form Handling & Validation"
      ]
    },
    {
      title: "Backend Development",
      icon: <Code2 className="w-6 h-6 text-green-500" />,
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
        "Error Handling",
        "API Design",
        "Security Best Practices"
      ]
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6 text-purple-500" />,
      skills: ["MongoDB", "Mongoose", "Data Modeling", "Query Optimization", "Aggregation Pipelines"]
    },
    {
      title: "Tools & Methodologies",
      icon: <Wrench className="w-6 h-6 text-orange-500" />,
      skills: [
        "Git & GitHub",
        "Vercel",
        "Agile/Scrum",
        "Team Management",
        "Code Review",
        "Sprint Planning",
        "Documentation",
        "Collaboration & Communication"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
        <span className="text-blue-500">02.</span> Technical Skills
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors transform-gpu hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-xl hover:shadow-slate-900/40"
          >
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h3 className="text-lg font-semibold text-white">{category.title}</h3>
            </div>
            <ul className="space-y-2">
              {category.skills.map((skill, idx) => (
                <li key={idx} className="text-slate-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
