import React from 'react';
import { X, Calendar, MapPin, Users, HeartHandshake, CheckCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const InitiativeModal = () => {
  const { activeModal, setActiveModal, selectedInitiative, navigateTo } = useApp();

  if (activeModal !== 'initiative-details' || !selectedInitiative) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-0 sm:p-4 animate-fade-in">
      <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] flex flex-col overflow-hidden animate-slide-up">
        {/* Image Banner */}
        <div className="relative h-48 w-full bg-slate-900">
          <img
            src={selectedInitiative.image}
            alt={selectedInitiative.title}
            className="w-full h-full object-cover opacity-90"
          />
          <button
            onClick={() => setActiveModal(null)}
            className="absolute top-3 right-3 p-1.5 bg-black/50 text-white hover:bg-black/70 rounded-full backdrop-blur-sm transition-all"
          >
            <X size={20} />
          </button>
          <div className="absolute bottom-3 left-3">
            <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 bg-brand-600/90 text-white rounded-full backdrop-blur-sm shadow-sm">
              {selectedInitiative.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div>
            <h3 className="font-serif font-bold text-slate-900 text-xl">
              {selectedInitiative.title}
            </h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              {selectedInitiative.description}
            </p>
          </div>

          {/* Progress Section */}
          <div className="p-3.5 bg-purple-50/60 rounded-2xl border border-purple-100">
            <div className="flex justify-between items-center text-xs font-semibold text-slate-700 mb-1.5">
              <span>{selectedInitiative.progressLabel}</span>
              <span className="text-brand-700 font-bold">
                {selectedInitiative.percent
                  ? `${selectedInitiative.percent}%`
                  : `${selectedInitiative.current} / ${selectedInitiative.total}`}
              </span>
            </div>
            <div className="w-full h-2.5 bg-purple-200/60 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ${
                  selectedInitiative.progressColor || 'bg-brand-600'
                }`}
                style={{
                  width: `${
                    selectedInitiative.percent
                      ? selectedInitiative.percent
                      : Math.round((selectedInitiative.current / selectedInitiative.total) * 100)
                  }%`
                }}
              />
            </div>
          </div>

          {/* Logistics */}
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2 text-slate-700">
              <Calendar size={15} className="text-brand-600 flex-shrink-0" />
              <span>{selectedInitiative.schedule}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <MapPin size={15} className="text-brand-600 flex-shrink-0" />
              <span>{selectedInitiative.location}</span>
            </div>
          </div>

          {/* Key items needed */}
          {selectedInitiative.urgentNeeds && (
            <div className="p-3 bg-[#FAF7FC] rounded-xl border border-purple-100">
              <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block mb-2">
                High Priority Supplies For This Drive:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedInitiative.urgentNeeds.map((need, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white text-brand-800 border border-purple-200 px-2.5 py-1 rounded-lg font-medium flex items-center gap-1"
                  >
                    <CheckCircle size={12} className="text-brand-600" />
                    {need}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-purple-100 bg-white flex gap-2.5">
          <button
            onClick={() => {
              setActiveModal(null);
              navigateTo('get-involved');
            }}
            className="flex-1 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-1.5"
          >
            <Users size={15} />
            Volunteer for Shift
          </button>
          <button
            onClick={() => {
              setActiveModal('donation');
            }}
            className="py-3 px-4 bg-purple-50 hover:bg-purple-100 text-brand-700 font-semibold text-xs rounded-xl transition-all flex items-center gap-1.5"
          >
            <HeartHandshake size={15} />
            Support Financially
          </button>
        </div>
      </div>
    </div>
  );
};
