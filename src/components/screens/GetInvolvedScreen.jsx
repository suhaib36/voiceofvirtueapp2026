import React, { useState } from 'react';
import {
  Users,
  ClipboardList,
  Heart,
  Clock,
  MapPin,
  Calendar,
  Check,
  CheckSquare,
  Square,
  Truck,
  Sparkles,
  Lock,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const GetInvolvedScreen = () => {
  const {
    volunteerRoles,
    toggleVolunteerRole,
    urgentSupplies,
    toggleSupplyPledge,
    pledgedCount,
    setActiveModal,
    processDonation,
    showToast
  } = useApp();

  const [activeTab, setActiveTab] = useState('all');
  const [selectedDonationAmount, setSelectedDonationAmount] = useState(25);
  const [customDonationInput, setCustomDonationInput] = useState('');
  const [isMonthlyDonation, setIsMonthlyDonation] = useState(false);

  const donationAmounts = [25, 50, 100];

  const currentAmount = customDonationInput
    ? parseFloat(customDonationInput) || 0
    : selectedDonationAmount;

  const handleQuickDonation = (e) => {
    e.preventDefault();
    if (currentAmount <= 0) return;
    processDonation(currentAmount, isMonthlyDonation);
  };

  const scrollToSection = (sectionId) => {
    setActiveTab(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="pb-28 px-4 sm:px-6 pt-3 space-y-5 animate-fade-in max-w-3xl mx-auto">
      {/* Header Badge */}
      <div className="flex items-center gap-1.5 text-brand-700 font-bold text-[11px] tracking-wider uppercase">
        <span className="p-1 rounded-full bg-brand-100 text-brand-700">
          <Sparkles size={13} />
        </span>
        <span>MAKE AN IMPACT</span>
      </div>

      {/* Title */}
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
          Join the Movement of Hope
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
          Lend a hand, donate essentials, or spread virtue in our neighborhoods.
        </p>

        {/* Live Volunteer status */}
        <div className="flex items-center gap-2 mt-3 text-xs text-slate-600 font-medium">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-bold text-slate-800">142 active volunteers</span> this week
          <span className="text-slate-400">• Updated 10m ago</span>
        </div>
      </div>

      {/* Segment Filter Tabs */}
      <div className="flex gap-2 p-1.5 bg-purple-50/70 rounded-2xl border border-purple-100 sticky top-14 z-20 backdrop-blur-md">
        <button
          onClick={() => scrollToSection('volunteer-roles')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
            activeTab === 'volunteer-roles' || activeTab === 'all'
              ? 'bg-white text-brand-700 shadow-sm font-bold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Users size={14} />
          <span>Volunteer</span>
        </button>

        <button
          onClick={() => scrollToSection('urgent-supplies')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
            activeTab === 'urgent-supplies'
              ? 'bg-white text-brand-700 shadow-sm font-bold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <ClipboardList size={14} />
          <span>Urgent Needs</span>
        </button>

        <button
          onClick={() => scrollToSection('quick-donation')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
            activeTab === 'quick-donation'
              ? 'bg-white text-brand-700 shadow-sm font-bold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Heart size={14} />
          <span>Donate</span>
        </button>
      </div>

      {/* SECTION 1: Volunteer Roles */}
      <div id="volunteer-roles" className="space-y-3 pt-1">
        <div className="flex justify-between items-center px-0.5">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-lg bg-purple-100 text-brand-700">
              <Calendar size={14} />
            </span>
            <h2 className="text-sm font-bold text-slate-900">Volunteer Roles</h2>
          </div>
          <span className="text-xs font-bold text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded-full">
            {volunteerRoles.length} Openings
          </span>
        </div>

        <div className="space-y-3">
          {volunteerRoles.map((role) => (
            <div
              key={role.id}
              className="p-4 sm:p-5 bg-white rounded-3xl border border-purple-100 shadow-sm space-y-3"
            >
              <div className="flex items-start justify-between">
                <span className="text-[10.5px] font-bold text-brand-700 uppercase tracking-wider bg-brand-50 px-2.5 py-0.5 rounded-md">
                  {role.category}
                </span>

                <span
                  className={`text-[10.5px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                    role.remote
                      ? 'bg-slate-100 text-slate-700'
                      : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  }`}
                >
                  {!role.remote && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />}
                  {role.remote ? 'Remote' : `${role.spotsOpen} spots open`}
                </span>
              </div>

              <div>
                <h3 className="font-serif font-bold text-slate-900 text-base sm:text-lg">
                  {role.title}
                </h3>
                <div className="space-y-1 mt-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-brand-600 flex-shrink-0" />
                    <span>{role.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-brand-600 flex-shrink-0" />
                    <span className="truncate">{role.location}</span>
                  </div>
                </div>
              </div>

              {role.familyFriendly && (
                <span className="text-xs text-slate-500 italic block">
                  Family-friendly activity
                </span>
              )}
              {role.remote && (
                <span className="text-xs text-slate-500 italic block">
                  Orientation provided
                </span>
              )}

              {/* Bottom Row: Initials Monograms (NO profile photos) & Register Button */}
              <div className="flex items-center justify-between pt-2 border-t border-purple-50">
                <div className="flex items-center -space-x-1.5 overflow-hidden">
                  {role.volunteerInitials?.map((init, i) => (
                    <div
                      key={i}
                      className="inline-flex h-7 w-7 rounded-full bg-gradient-to-tr from-brand-700 to-purple-500 text-white text-[10px] font-bold items-center justify-center ring-2 ring-white shadow-xs"
                    >
                      {init}
                    </div>
                  ))}
                  {role.additionalVolunteers && (
                    <span className="h-7 w-7 rounded-full bg-brand-100 text-brand-700 text-[10px] font-bold flex items-center justify-center ring-2 ring-white shadow-xs">
                      +{role.additionalVolunteers}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => toggleVolunteerRole(role.id)}
                  className={`py-2 px-5 rounded-full text-xs font-bold transition-all shadow-xs active:scale-95 ${
                    role.registered
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                      : role.remote
                      ? 'bg-purple-100 text-brand-800 hover:bg-purple-200'
                      : 'bg-brand-700 text-white hover:bg-brand-800'
                  }`}
                >
                  {role.registered ? (
                    <span className="flex items-center gap-1">
                      <Check size={13} /> Registered
                    </span>
                  ) : role.remote ? (
                    'Learn More'
                  ) : (
                    'Register'
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: Urgently Needed Supplies */}
      <div id="urgent-supplies" className="space-y-3 pt-3">
        <div className="flex justify-between items-center px-0.5">
          <h2 className="text-sm font-bold text-slate-900">Urgently Needed Supplies</h2>
          <span className="text-[10.5px] font-bold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
            High Priority
          </span>
        </div>

        <div className="p-4 sm:p-5 bg-white rounded-3xl border border-purple-100 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-600 pb-1">
            <span>Tap items you can bring to pledge to today's care drop:</span>
            <span className="font-bold text-brand-700 bg-purple-50 px-2.5 py-0.5 rounded-full">
              {pledgedCount} Pledged
            </span>
          </div>

          <div className="space-y-2">
            {urgentSupplies.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleSupplyPledge(item.id)}
                className={`p-3 sm:p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                  item.pledged
                    ? 'bg-purple-50/70 border-brand-500'
                    : 'bg-[#FAF7FC] border-purple-100 hover:bg-purple-50/40'
                }`}
              >
                <div className="mt-0.5 text-brand-700">
                  {item.pledged ? (
                    <CheckSquare size={18} className="text-brand-700 fill-brand-100" />
                  ) : (
                    <Square size={18} className="text-slate-300" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                      {item.title}
                    </h4>
                    <span
                      className={`text-[9.5px] font-bold px-2 py-0.5 rounded-md border ${item.priorityClass}`}
                    >
                      {item.priority}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Location info */}
          <div className="p-3 bg-purple-50/40 rounded-2xl border border-purple-100 flex items-center gap-2.5 text-xs text-slate-700">
            <div className="p-2 bg-brand-100 rounded-lg text-brand-700 flex-shrink-0">
              <MapPin size={16} />
            </div>
            <div>
              <span className="font-bold text-slate-900 block text-xs">
                Main Warehouse Donation Dock
              </span>
              <span className="text-xs text-slate-500">
                Open Mon–Sat • 8:00 AM – 5:30 PM
              </span>
            </div>
          </div>

          {/* Schedule Supply Drop-off button */}
          <button
            onClick={() => setActiveModal('schedule-dropoff')}
            className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm rounded-full shadow-md flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <Truck size={16} />
            <span>Schedule Supply Drop-off</span>
          </button>
        </div>
      </div>

      {/* SECTION 3: Quick Donation */}
      <div id="quick-donation" className="space-y-3 pt-3">
        <div className="flex justify-between items-center px-0.5">
          <div className="flex items-center gap-2">
            <span className="text-brand-600">💜</span>
            <h2 className="text-sm font-bold text-slate-900">Quick Donation</h2>
          </div>
          <span className="text-xs text-slate-500 font-medium">100% Tax Deductible</span>
        </div>

        <div className="p-4 sm:p-5 bg-white rounded-3xl border border-purple-100 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                CHOOSE AN AMOUNT
              </span>
              <h4 className="font-serif font-bold text-slate-900 text-sm sm:text-base">
                Every gift lights a pathway forward
              </h4>
            </div>
            <div className="w-8 h-8 rounded-full bg-purple-50 text-brand-600 flex items-center justify-center">
              <ShieldCheck size={18} />
            </div>
          </div>

          {/* Amount buttons */}
          <div className="grid grid-cols-4 gap-2.5">
            {donationAmounts.map((amt) => (
              <button
                key={amt}
                onClick={() => {
                  setSelectedDonationAmount(amt);
                  setCustomDonationInput('');
                }}
                className={`py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                  selectedDonationAmount === amt && !customDonationInput
                    ? 'bg-brand-700 text-white shadow-md'
                    : 'bg-purple-50/70 text-brand-900 hover:bg-purple-100 border border-purple-100'
                }`}
              >
                ${amt}
              </button>
            ))}

            <button
              onClick={() => {
                const custom = prompt('Enter custom donation amount ($):', '75');
                if (custom && !isNaN(custom)) {
                  setCustomDonationInput(custom);
                }
              }}
              className={`py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                customDonationInput
                  ? 'bg-brand-700 text-white shadow-md'
                  : 'bg-purple-50/70 text-brand-900 hover:bg-purple-100 border border-purple-100'
              }`}
            >
              {customDonationInput ? `$${customDonationInput}` : 'Other'}
            </button>
          </div>

          {/* Impact Banner */}
          <div className="p-3 bg-amber-50/80 border border-amber-200/80 rounded-2xl flex items-center gap-2.5">
            <span className="text-amber-600 text-base">💛</span>
            <p className="text-xs text-amber-900 font-medium leading-tight">
              <strong>${currentAmount} Impact:</strong> Feeds a local family of 4 for an entire weekend.
            </p>
          </div>

          {/* Monthly checkbox */}
          <label className="flex items-center gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={isMonthlyDonation}
              onChange={(e) => setIsMonthlyDonation(e.target.checked)}
              className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500 border-purple-300"
            />
            <span className="text-xs sm:text-sm text-slate-700 font-medium">
              Make this a monthly blessing of hope
            </span>
          </label>

          {/* Give with Heart button */}
          <button
            onClick={handleQuickDonation}
            className="w-full py-3.5 bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm rounded-full shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <Heart size={16} fill="currentColor" />
            <span>Give ${currentAmount} with Heart</span>
          </button>

          <p className="text-center text-xs text-slate-400 flex items-center justify-center gap-1 font-medium">
            <Lock size={12} />
            <span>Secure 256-bit encrypted giving</span>
          </p>
        </div>
      </div>

      {/* SECTION 4: Virtue in Action */}
      <div className="space-y-3 pt-2">
        <div className="flex justify-between items-center px-0.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            VIRTUE IN ACTION
          </span>
          <button
            onClick={() => showToast('Thank you! Community story submission modal opened.')}
            className="text-xs font-semibold text-brand-700 hover:underline"
          >
            Share your story
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="relative h-32 rounded-2xl overflow-hidden shadow-sm group">
            <img
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=400&q=80"
              alt="Food Box Packing"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3">
              <span className="text-white text-xs sm:text-sm font-bold leading-tight drop-shadow">
                Food Box Packing
              </span>
            </div>
          </div>

          <div className="relative h-32 rounded-2xl overflow-hidden shadow-sm group">
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=400&q=80"
              alt="Backpack Drive"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3">
              <span className="text-white text-xs sm:text-sm font-bold leading-tight drop-shadow">
                Backpack Drive
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
