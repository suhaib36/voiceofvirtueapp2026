import React from 'react';
import {
  Heart,
  ShoppingBag,
  MessageSquare,
  MapPin,
  Clock,
  PhoneCall,
  Home,
  FileText,
  ShieldCheck,
  Check,
  Users2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const RequestSuccessScreen = () => {
  const { lastSubmittedRequest, navigateTo } = useApp();

  const req = lastSubmittedRequest;

  return (
    <div className="pb-28 px-4 sm:px-6 pt-3 space-y-5 animate-fade-in max-w-3xl mx-auto">
      {/* Success Hero Header */}
      <div className="text-center space-y-3 pt-2">
        <div className="relative inline-block">
          {/* Animated glow halo */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-brand-600 via-brand-500 to-purple-300 p-0.5 shadow-xl shadow-brand-700/20 mx-auto flex items-center justify-center animate-pulse-subtle">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-brand-700">
              <div className="w-14 h-14 rounded-full bg-brand-700 text-white flex items-center justify-center shadow-inner">
                <Heart size={26} fill="currentColor" />
              </div>
            </div>
          </div>
          {/* Gold checkmark badge */}
          <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center border-2 border-white shadow-md">
            <Check size={14} className="stroke-[3]" />
          </div>
        </div>

        <div>
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full inline-flex items-center gap-1.5 border border-purple-200">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-700" />
            CARE COORDINATION ACTIVE
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
            Your Request Has Been Received
          </h1>
          <p className="text-xs sm:text-sm font-mono text-slate-500 mt-1 font-medium">
            #{req.id} • Submitted Today
          </p>
        </div>

        {/* Empathy Quote Card */}
        <div className="p-4 bg-brand-50/70 border border-purple-200/70 rounded-2xl flex items-start gap-3 text-left shadow-xs">
          <span className="text-brand-600 text-base mt-0.5">💜</span>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            <strong>You are not alone in this journey.</strong> Our community champions review requests with empathy, absolute respect, and personal discretion.
          </p>
        </div>
      </div>

      {/* SUMMARY OVERVIEW */}
      <div className="bg-white rounded-3xl border border-purple-100 shadow-sm p-4 sm:p-5 space-y-3.5">
        <div className="flex justify-between items-center">
          <span className="text-[10.5px] uppercase font-bold text-slate-400 tracking-wider">
            SUMMARY OVERVIEW
          </span>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
            <ShieldCheck size={12} /> {req.status}
          </span>
        </div>

        <div className="space-y-2.5">
          {/* Category */}
          <div className="p-3 bg-purple-50/50 rounded-2xl border border-purple-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center flex-shrink-0">
              <ShoppingBag size={18} />
            </div>
            <div className="min-w-0">
              <span className="text-xs text-slate-500 block">Selected Category</span>
              <span className="font-bold text-xs sm:text-sm text-slate-900 truncate block">
                {req.categories.join(' + ')}
              </span>
            </div>
          </div>

          {/* Contact */}
          <div className="p-3 bg-purple-50/50 rounded-2xl border border-purple-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center flex-shrink-0">
              <MessageSquare size={18} />
            </div>
            <div className="min-w-0">
              <span className="text-xs text-slate-500 block">Preferred Contact</span>
              <span className="font-bold text-xs sm:text-sm text-slate-900 truncate block">
                {req.contact}
              </span>
            </div>
          </div>

          {/* Fulfillment */}
          <div className="p-3 bg-purple-50/50 rounded-2xl border border-purple-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center flex-shrink-0">
              <MapPin size={18} />
            </div>
            <div className="min-w-0">
              <span className="text-xs text-slate-500 block">Fulfillment Preference</span>
              <span className="font-bold text-xs sm:text-sm text-slate-900 truncate block">
                {req.fulfillmentType}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* What Happens Next - Timeline */}
      <div className="bg-white rounded-3xl border border-purple-100 shadow-sm p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Clock size={17} className="text-brand-600" />
          <h3 className="text-sm sm:text-base font-bold text-slate-900">What Happens Next</h3>
        </div>

        <div className="space-y-4 relative pl-3">
          {/* Vertical timeline line */}
          <div className="absolute left-[21px] top-3 bottom-3 w-0.5 bg-purple-100" />

          {/* Step 1 */}
          <div className="flex items-start gap-3 relative">
            <div className="w-6 h-6 rounded-full bg-brand-700 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-sm z-10">
              1
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Review & Preparation</h4>
                <span className="text-[10px] font-bold text-brand-700 bg-purple-100 px-2 py-0.5 rounded-full">
                  Current
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                A dedicated community coordinator is reviewing your needs within 24 hours to organize the package.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-3 relative">
            <div className="w-6 h-6 rounded-full bg-purple-100 text-brand-700 font-bold text-xs flex items-center justify-center flex-shrink-0 border border-purple-200 z-10">
              2
            </div>
            <div className="flex-1">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">Confidential Outreach</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                You'll receive a friendly confirmation text message outlining pickup times and safe location details.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-3 relative">
            <div className="w-6 h-6 rounded-full bg-purple-100 text-brand-700 font-bold text-xs flex items-center justify-center flex-shrink-0 border border-purple-200 z-10">
              3
            </div>
            <div className="flex-1">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">Support Delivery</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Care items provided seamlessly with dignity, warm smiles, and complete personal confidentiality.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Voices of Virtue Family Card - Clean Icon Graphic, No Person Photo */}
      <div className="p-4 bg-white rounded-3xl border border-purple-100 shadow-sm flex items-center gap-3.5">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-700 to-purple-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
          <Users2 size={24} />
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-700 block">
            VOICES OF VIRTUE FAMILY
          </span>
          <p className="text-xs text-slate-600 leading-snug mt-0.5">
            Over 340 local volunteers are active across our city hubs this week to ensure timely care with warm respect.
          </p>
        </div>
      </div>

      {/* Emergency Assistance card */}
      <div className="p-4 bg-purple-50/80 rounded-2xl border border-purple-200/80 flex items-start gap-3">
        <PhoneCall size={18} className="text-brand-600 mt-0.5 flex-shrink-0" />
        <div className="text-xs">
          <span className="font-bold text-slate-900 block text-xs sm:text-sm">Need immediate assistance?</span>
          <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
            If your situation becomes urgent before we reach out, call our 24/7 care line at{' '}
            <a href="tel:5553214673" className="font-bold text-brand-700 underline">
              (555) 321-HOPE
            </a>.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2.5 pt-1">
        <button
          onClick={() => navigateTo('home')}
          className="w-full py-3.5 bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm rounded-full shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 active:scale-95 transition-all"
        >
          <Home size={16} />
          <span>Back to Home</span>
        </button>

        <button
          onClick={() => navigateTo('profile')}
          className="w-full py-3 bg-white hover:bg-purple-50 text-brand-700 font-bold text-xs sm:text-sm rounded-full border border-purple-200 flex items-center justify-center gap-1.5 transition-all active:scale-95"
        >
          <FileText size={15} />
          <span>View in My Requests</span>
        </button>
      </div>
    </div>
  );
};
