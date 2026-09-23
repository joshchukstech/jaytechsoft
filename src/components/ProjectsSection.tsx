import React, { useState } from 'react';
import { Layers, ArrowRight, ExternalLink, Info, CheckCircle2, Shield } from 'lucide-react';
import { PROJECT_PLACEHOLDERS } from '../data/companyData';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  onSelectProjectForQuote: (projectCategory: string) => void;
  onOpenProjectModal: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProjectForQuote,
  onOpenProjectModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Solar Installation',
    'Electrical Installation',
    'CCTV & Security',
    'Network Infrastructure',
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECT_PLACEHOLDERS
    : PROJECT_PLACEHOLDERS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Our Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Showcasing our primary engineering capabilities across solar energy, electrical systems, CCTV security, and network infrastructure.
          </p>
        </div>

        {/* Note for Company Owner / Reviewer */}
        <div className="mb-10 max-w-3xl mx-auto p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 flex items-start gap-3">
          {/* <Info className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" /> */}
          {/* <p>
            <strong className="text-slate-900">Note for Demo Presentation:</strong> The project cards below represent core solution capabilities. In accordance with strict data integrity standards, no client names or unconfirmed statistics have been simulated. Actual site photos, client names, and project capacities can be seamlessly loaded by the company owner.
          </p> */}
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Showcase */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-slate-900/90 text-emerald-400 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider border border-slate-700">
                    {project.category}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-xs text-slate-300 font-medium">Scope Representative</span>
                    <h3 className="text-base font-bold leading-snug">{project.title}</h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Engineering Scope Included:
                    </span>
                    <ul className="space-y-1">
                      {project.scope.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-6 pt-0 flex items-center justify-between gap-2">
                <button
                  onClick={() => onOpenProjectModal(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-emerald-700 py-2 cursor-pointer transition-colors"
                >
                  <span>View Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onSelectProjectForQuote(project.category)}
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-semibold border border-emerald-200 transition-colors cursor-pointer"
                >
                  Request Similar Setup
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onSelectProjectForQuote('Solar Energy')}
            id="view-our-projects-cta-btn"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-sm cursor-pointer"
          >
            <span>Discuss Your Project With Our Engineering Team</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
