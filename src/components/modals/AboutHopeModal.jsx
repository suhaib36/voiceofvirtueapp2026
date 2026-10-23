import React from 'react';
import { X, Heart, Shield, Award, ExternalLink, Phone, Mail, Globe } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { VoicesLogo } from '../VoicesLogo';

export const AboutHopeModal = () => {
  const { activeModal, setActiveModal } = useApp();

  if (activeModal !== 'about-hope') return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-0 sm:p-4 animate-fade-in">
      <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] flex flex-col overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="p-4 border-b border-purple-100 flex items-center justify-between bg-gradient-to-r from-purple-50 via-white to-purple-50">
          <VoicesLogo subtitle="About the Organization" />
          <button
            onClick={() => setActiveModal(null)}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 text-white shadow-md relative overflow-hidden">
            <span className="text-[10px] font-bold tracking-widest uppercase bg-hope-gold text-amber-950 px-2.5 py-0.5 rounded-full inline-block mb-2">
              H.O.P.E. MISSION
            </span>
            <h3 className="font-serif text-xl font-bold mb-1.5">Helping Other People Emerge</h3>
            <p className="text-purple-100 text-xs leading-relaxed">
              Founded in Baton Rouge, Louisiana by Cheryl D. Richard, Voices of Virtue is a 501(c)(3) tax-exempt nonprofit dedicated to empowering individuals, uplifting single-parent households, and restoring dignity to underserved communities through unconditional love and compassion.
            </p>
          </div>

          <div className="space-y-2.5">
            <h4 className="font-serif font-bold text-slate-900 text-sm">Core Pillars</h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-3 bg-purple-50/60 rounded-xl border border-purple-100">
                <span className="font-bold text-brand-800 block mb-0.5">Emergency Food & Care</span>
                <span className="text-slate-600 text-[11px]">Direct weekly pantry supplies and hot meals.</span>
              </div>
              <div className="p-3 bg-purple-50/60 rounded-xl border border-purple-100">
                <span className="font-bold text-brand-800 block mb-0.5">Youth & Education</span>
                <span className="text-slate-600 text-[11px]">Backpacks, tutoring, and character mentoring.</span>
              </div>
              <div className="p-3 bg-purple-50/60 rounded-xl border border-purple-100">
                <span className="font-bold text-brand-800 block mb-0.5">Warmth & Dignity</span>
                <span className="text-slate-600 text-[11px]">Coats, organic hygiene packages, and crisis kits.</span>
              </div>
              <div className="p-3 bg-purple-50/60 rounded-xl border border-purple-100">
                <span className="font-bold text-brand-800 block mb-0.5">Haven of H.O.P.E.</span>
                <span className="text-slate-600 text-[11px]">Community resource center and permanent hub.</span>
              </div>
            </div>
          </div>

          <div className="p-3.5 bg-[#FAF7FC] rounded-2xl border border-purple-100 space-y-2">
            <span className="font-bold text-slate-800 text-[11px] uppercase tracking-wider block text-brand-800">
              Official Headquarters & Contact
            </span>
            <div className="space-y-1.5 text-slate-700">
              <div className="flex items-center gap-2">
                <Globe size={14} className="text-brand-600" />
                <a
                  href="https://www.voicesofvirtue.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-700 underline font-semibold flex items-center gap-1 hover:text-brand-900"
                >
                  www.voicesofvirtue.org <ExternalLink size={11} />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-brand-600" />
                <span>1-800-555-HOPE • Baton Rouge, LA</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-brand-600" />
                <span>info@voicesofvirtue.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-purple-100 bg-white">
          <button
            onClick={() => setActiveModal(null)}
            className="w-full py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs rounded-xl shadow-md transition-all active:scale-95"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
