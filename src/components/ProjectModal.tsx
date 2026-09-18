import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestSimilar: (category: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestSimilar,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image of project */}
        <div className="relative h-64 sm:h-72 w-full bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="inline-block px-2.5 py-1 rounded bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-wider mb-2">
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
            <p className="text-xs text-slate-300 flex items-center gap-1 mt-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>{project.locationPlaceholder}</span>
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 text-left">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Project Description
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {project.description} Delivered in alignment with rigorous engineering practices, quality electrical safety, and neat cable routing standards.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Standard Engineering Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.scope.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500">
            <strong>Company Owner Note:</strong> High-resolution photographs from JayTechSoft's completed installations, specific client site names, and solar kW capacity numbers can be updated directly here once approved.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-3 border-t border-slate-100">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestSimilar(project.category);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm cursor-pointer"
            >
              <span>Request Quote for {project.category}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
