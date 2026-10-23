import React, { useState } from 'react';
import { X, MapPin, Clock, Phone, Navigation, CheckCircle2, Building2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const HubLocatorModal = () => {
  const { activeModal, setActiveModal, dropoffHubs, showToast } = useApp();
  const [selectedHubId, setSelectedHubId] = useState(dropoffHubs[0].id);

  if (activeModal !== 'hub-locator') return null;

  const currentHub = dropoffHubs.find((h) => h.id === selectedHubId) || dropoffHubs[0];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-0 sm:p-4 animate-fade-in">
      <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] flex flex-col overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="p-4 border-b border-purple-100 flex items-center justify-between bg-[#FAF7FC]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center">
              <MapPin size={18} />
            </div>
            <div>
              <h3 className="font-serif font-bold text-slate-900 text-lg">Partner Drop-off Hubs</h3>
              <p className="text-xs text-slate-500">Voices of Virtue • Baton Rouge Network</p>
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
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Simulated Map Visualizer */}
          <div className="w-full h-36 bg-gradient-to-br from-purple-100 via-indigo-50 to-brand-50 rounded-2xl relative overflow-hidden border border-purple-200/70 p-3 flex flex-col justify-between">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#7033E3_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="flex justify-between items-center z-10">
              <span className="text-[11px] font-semibold bg-white/90 text-brand-800 px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                <Building2 size={12} /> 3 Active Care Hubs
              </span>
              <span className="text-[10px] text-slate-600 bg-white/80 px-2 py-0.5 rounded-full">
                East Baton Rouge Parish
              </span>
            </div>

            {/* Map markers representation */}
            <div className="flex justify-around items-center z-10 py-1">
              {dropoffHubs.map((hub) => (
                <button
                  key={hub.id}
                  onClick={() => setSelectedHubId(hub.id)}
                  className={`flex flex-col items-center transition-all ${
                    selectedHubId === hub.id ? 'scale-110' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <div
                    className={`p-2 rounded-full shadow-md flex items-center justify-center ${
                      selectedHubId === hub.id
                        ? 'bg-brand-600 text-white ring-4 ring-purple-300'
                        : 'bg-white text-brand-600'
                    }`}
                  >
                    <MapPin size={16} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-800 bg-white/90 px-1.5 py-0.5 rounded mt-1 shadow-sm truncate max-w-[85px]">
                    {hub.name.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>

            <div className="text-[10px] text-slate-500 text-right z-10">
              Tap any pin to view drop-off details
            </div>
          </div>

          {/* Hub Selector tabs */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {dropoffHubs.map((hub) => (
              <button
                key={hub.id}
                onClick={() => setSelectedHubId(hub.id)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                  selectedHubId === hub.id
                    ? 'bg-brand-600 text-white border-brand-600 shadow-sm'
                    : 'bg-white text-slate-600 border-purple-100 hover:bg-purple-50'
                }`}
              >
                {hub.name}
              </button>
            ))}
          </div>

          {/* Selected Hub Details */}
          <div className="p-4 rounded-2xl bg-[#FBF8FD] border border-purple-100/90 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-bold text-slate-900 text-base">{currentHub.name}</h4>
                <p className="text-xs text-slate-600 flex items-center gap-1.5 mt-1">
                  <MapPin size={14} className="text-brand-600 flex-shrink-0" />
                  {currentHub.address}
                </p>
              </div>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Open Today
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2 pt-2 border-t border-purple-100 text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <Clock size={14} className="text-brand-600" />
                <span>{currentHub.hours}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Phone size={14} className="text-brand-600" />
                <span>{currentHub.phone}</span>
              </div>
            </div>

            <div className="bg-white p-3 rounded-xl border border-purple-100 text-xs space-y-1.5">
              <span className="font-semibold text-slate-800 block text-[11px] uppercase tracking-wider text-brand-700">
                Accepted Items:
              </span>
              <p className="text-slate-600">{currentHub.accepts}</p>
              <p className="text-[11px] text-brand-800 font-medium italic pt-1 border-t border-purple-50">
                Tip: {currentHub.dropoffInstructions}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-purple-100 bg-white flex gap-2.5">
          <button
            onClick={() => {
              showToast(`Opening maps navigation for ${currentHub.name}...`);
              setActiveModal(null);
            }}
            className="flex-1 py-3 px-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm rounded-xl shadow-md flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <Navigation size={16} />
            Get GPS Directions
          </button>
          <button
            onClick={() => setActiveModal(null)}
            className="py-3 px-4 bg-purple-50 hover:bg-purple-100 text-brand-700 font-semibold text-sm rounded-xl transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
