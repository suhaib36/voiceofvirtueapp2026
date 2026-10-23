import React from 'react';
import { X, Calendar, MapPin, Clock, Navigation, CheckCircle2, Share2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const EventDetailsModal = () => {
  const { activeModal, setActiveModal, selectedEvent, showToast } = useApp();

  if (activeModal !== 'event-details' || !selectedEvent) return null;

  const handleAddToCalendar = () => {
    showToast('Event saved to your device calendar!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-0 sm:p-4 animate-fade-in">
      <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] flex flex-col overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="p-4 border-b border-purple-100 flex items-center justify-between bg-gradient-to-r from-purple-50 via-white to-purple-50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-xs flex-col leading-none shadow-sm">
              <span className="text-[9px] text-brand-500 uppercase">{selectedEvent.dateMonth}</span>
              <span className="text-sm text-brand-800">{selectedEvent.dateDay}</span>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                ● {selectedEvent.status}
              </span>
              <h3 className="font-serif font-bold text-slate-900 text-base leading-snug mt-0.5">
                {selectedEvent.title}
              </h3>
            </div>
          </div>
          <button
            onClick={() => setActiveModal(null)}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
          <div className="p-3.5 bg-[#FAF7FC] rounded-2xl border border-purple-100 space-y-2.5">
            <div className="flex items-start gap-2.5 text-slate-700">
              <Clock size={16} className="text-brand-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold block text-slate-900">Time & Date</span>
                <span>{selectedEvent.schedule}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-slate-700">
              <MapPin size={16} className="text-brand-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold block text-slate-900">Location</span>
                <span>{selectedEvent.location}</span>
                <span className="text-slate-500 block text-[11px] mt-0.5">{selectedEvent.address}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-slate-700">
              <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold block text-slate-900">Volunteer Lead</span>
                <span>{selectedEvent.contactPerson}</span>
              </div>
            </div>
          </div>

          <div className="bg-purple-50/50 p-3.5 rounded-2xl border border-purple-100/80">
            <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-1 text-brand-800">
              Arrival Instructions
            </h4>
            <p className="text-slate-600 leading-relaxed">{selectedEvent.notes}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-purple-100 bg-white flex gap-2">
          <button
            onClick={() => {
              showToast('Opening directions to ' + selectedEvent.location);
              setActiveModal(null);
            }}
            className="flex-1 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-1.5"
          >
            <Navigation size={15} />
            Open GPS Navigation
          </button>
          <button
            onClick={handleAddToCalendar}
            className="py-3 px-3.5 bg-purple-50 hover:bg-purple-100 text-brand-700 font-semibold text-xs rounded-xl transition-all flex items-center gap-1.5"
          >
            <Calendar size={15} />
            Add to Cal
          </button>
        </div>
      </div>
    </div>
  );
};
