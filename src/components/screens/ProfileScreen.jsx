import React from 'react';
import {
  Heart,
  Calendar,
  Clock,
  Truck,
  CheckCircle,
  Sparkles,
  ChevronRight,
  MapPin,
  Bell,
  Users,
  ShieldCheck,
  Phone,
  Info,
  LogOut,
  Sparkle
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ProfileScreen = () => {
  const {
    userProfile,
    activeRequests,
    registeredEvents,
    togglePreference,
    setActiveModal,
    setSelectedEvent,
    showToast,
    navigateTo
  } = useApp();

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setActiveModal('event-details');
  };

  const handleSignOut = () => {
    showToast('Signed out securely. Welcome back any time!');
  };

  return (
    <div className="pb-28 px-4 sm:px-6 pt-3 space-y-5 animate-fade-in max-w-3xl mx-auto">
      {/* Profile Card - No Profile Image, Uses Initials Monogram */}
      <div className="p-5 bg-white rounded-3xl border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-brand-700 via-brand-600 to-purple-500 text-white font-serif font-bold text-xl flex items-center justify-center border-2 border-brand-300 shadow-md">
              {userProfile.initials || "CR"}
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center border-2 border-white shadow-sm">
              <Heart size={12} fill="currentColor" />
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[10.5px] font-bold text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              {userProfile.title}
            </span>
            <h1 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
              {userProfile.name}
            </h1>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Calendar size={13} />
              <span>Member since {userProfile.memberSince}</span>
            </div>
          </div>
        </div>

        {/* H.O.P.E. Pillar & Virtue Points */}
        <div className="p-3.5 bg-purple-50/70 rounded-2xl border border-purple-100/90 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-brand-100 text-brand-700 rounded-xl">
              <Sparkles size={16} />
            </div>
            <div>
              <span className="text-xs font-bold text-brand-900 block leading-tight">
                {userProfile.pillarLevel}
              </span>
              <span className="text-xs text-slate-600 font-medium">
                {userProfile.kindnessTier}
              </span>
            </div>
          </div>

          <span className="text-xs font-bold text-brand-700 bg-white px-3 py-1.5 rounded-xl shadow-xs border border-purple-100">
            {userProfile.virtuePoints} Virtue Pts
          </span>
        </div>
      </div>

      {/* Community Impact */}
      <div className="space-y-2.5">
        <div className="flex justify-between items-center px-0.5">
          <h2 className="text-sm font-bold text-slate-900">Community Impact</h2>
          <span className="text-xs text-slate-400">2023–2024</span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {/* Volunteer Hours */}
          <div className="p-3.5 bg-white rounded-2xl border border-purple-100 text-center space-y-1 shadow-xs">
            <div className="w-9 h-9 rounded-full bg-purple-50 text-brand-600 flex items-center justify-center mx-auto">
              <Clock size={16} />
            </div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
              {userProfile.impact.volunteerHours}
            </div>
            <div className="text-[10.5px] text-slate-500 font-medium leading-tight">
              Volunteer Hours
            </div>
          </div>

          {/* Drives Supported */}
          <div className="p-3.5 bg-white rounded-2xl border border-purple-100 text-center space-y-1 shadow-xs">
            <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
              <Truck size={16} />
            </div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
              {userProfile.impact.drivesSupported}
            </div>
            <div className="text-[10.5px] text-slate-500 font-medium leading-tight">
              Drives Supported
            </div>
          </div>

          {/* Requests Assisted */}
          <div className="p-3.5 bg-white rounded-2xl border border-purple-100 text-center space-y-1 shadow-xs">
            <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <Heart size={16} />
            </div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
              {userProfile.impact.requestsAssisted}
            </div>
            <div className="text-[10.5px] text-slate-500 font-medium leading-tight">
              Requests Assisted
            </div>
          </div>
        </div>
      </div>

      {/* My Active Requests & Support */}
      <div className="space-y-2.5">
        <div className="flex justify-between items-center px-0.5">
          <h2 className="text-sm font-bold text-slate-900">My Active Requests & Support</h2>
          <span className="text-xs font-semibold text-brand-700">
            View All ({activeRequests.length})
          </span>
        </div>

        <div className="space-y-3">
          {activeRequests.map((req) => (
            <div
              key={req.id}
              onClick={() => navigateTo('request-success')}
              className="p-4 bg-white rounded-3xl border border-purple-100 shadow-sm space-y-3 cursor-pointer hover:border-brand-300 transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-purple-50 text-brand-600 flex items-center justify-center flex-shrink-0">
                    <Sparkle size={18} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-slate-900 text-sm sm:text-base">
                      {req.title}
                    </h3>
                    <span className="text-xs text-slate-400">
                      Submitted {req.submittedDate} • #{req.id}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-bold text-brand-800 bg-purple-100 px-3 py-1 rounded-full">
                  {req.status}
                </span>
              </div>

              {/* Sub-card ready for pickup */}
              <div className="p-3 rounded-2xl bg-[#FAF7FC] border border-purple-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-bold text-xs text-emerald-800 tracking-wide">
                    {req.readyNotice}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-brand-700 font-semibold text-xs">
                  <MapPin size={13} />
                  <span>{req.hubName}</span>
                  <ChevronRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Registered Events */}
      <div className="space-y-2.5">
        <div className="flex justify-between items-center px-0.5">
          <h2 className="text-sm font-bold text-slate-900">Upcoming Registered Events</h2>
          <span className="text-xs font-bold text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded-full">
            {registeredEvents.length} Confirmed
          </span>
        </div>

        {registeredEvents.map((evt) => (
          <div
            key={evt.id}
            className="p-4 bg-white rounded-3xl border border-purple-100 shadow-sm space-y-3"
          >
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200/80 flex flex-col items-center justify-center leading-none flex-shrink-0 font-bold">
                <span className="text-[10px] uppercase tracking-wider text-amber-700 font-sans">
                  {evt.dateMonth}
                </span>
                <span className="text-lg text-amber-950 font-serif">{evt.dateDay}</span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-slate-900 text-sm sm:text-base truncate">
                    {evt.title}
                  </h3>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle size={11} /> Confirmed
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                  <Clock size={13} className="text-brand-600" />
                  <span>{evt.schedule}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2.5 pt-1">
              <button
                onClick={() => handleEventClick(evt)}
                className="flex-1 py-2.5 bg-brand-700 hover:bg-brand-800 text-white font-bold text-xs rounded-xl shadow-xs transition-all active:scale-95 flex items-center justify-center gap-1"
              >
                <span>▲ View Directions & Details</span>
              </button>

              <button
                onClick={() => showToast('Event added to your Apple/Google calendar.')}
                className="p-2.5 bg-purple-50 hover:bg-purple-100 text-brand-700 rounded-xl transition-all"
                title="Add to Calendar"
              >
                <Calendar size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Preferences & Notifications */}
      <div className="bg-white rounded-3xl border border-purple-100 shadow-sm overflow-hidden divide-y divide-purple-50">
        <div className="p-4 pb-2">
          <h2 className="text-sm font-bold text-slate-900">Preferences & Notifications</h2>
        </div>

        {/* Toggle 1: Urgent Need Alerts */}
        <div className="p-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-rose-50 text-rose-600">
              <Bell size={17} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">Urgent Need Alerts</h4>
              <p className="text-xs text-slate-500">Immediate crisis & emergency care calls</p>
            </div>
          </div>

          <button
            onClick={() => togglePreference('urgentNeedAlerts')}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
              userProfile.preferences.urgentNeedAlerts ? 'bg-brand-700' : 'bg-slate-200'
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                userProfile.preferences.urgentNeedAlerts ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Toggle 2: Volunteer Reminders */}
        <div className="p-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-50 text-brand-600">
              <Users size={17} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">Volunteer Reminders</h4>
              <p className="text-xs text-slate-500">Upcoming shift & pantry notifications</p>
            </div>
          </div>

          <button
            onClick={() => togglePreference('volunteerReminders')}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
              userProfile.preferences.volunteerReminders ? 'bg-brand-700' : 'bg-slate-200'
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                userProfile.preferences.volunteerReminders ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        {/* Confidentiality & Data Privacy */}
        <div
          onClick={() => showToast('HIPAA & 501(c)(3) privacy safeguards active.')}
          className="p-4 flex items-center justify-between gap-3 cursor-pointer hover:bg-purple-50/40 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-50 text-brand-600">
              <ShieldCheck size={17} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">Confidentiality & Data Privacy</h4>
              <p className="text-xs text-slate-500">HIPAA-compliant, fully protected profile</p>
            </div>
          </div>
          <ChevronRight size={17} className="text-slate-400" />
        </div>
      </div>

      {/* Helpline & Links */}
      <div className="bg-white rounded-3xl border border-purple-100 shadow-sm p-4 space-y-3">
        <a
          href="tel:18005554673"
          className="flex items-center justify-between text-xs sm:text-sm text-slate-700 py-1"
        >
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-brand-600" />
            <span className="font-semibold">Helpline Contact (24/7)</span>
          </div>
          <span className="font-mono text-brand-700 font-bold">1-800-555-HOPE</span>
        </a>

        <div
          onClick={() => setActiveModal('about-hope')}
          className="flex items-center justify-between text-xs sm:text-sm text-slate-700 py-1 pt-2 border-t border-purple-50 cursor-pointer hover:text-brand-700"
        >
          <div className="flex items-center gap-2">
            <Info size={16} className="text-brand-600" />
            <span className="font-semibold">About Voices of Virtue & H.O.P.E.</span>
          </div>
          <ChevronRight size={16} className="text-slate-400" />
        </div>
      </div>

      {/* Sign Out Button */}
      <button
        onClick={handleSignOut}
        className="w-full py-3.5 rounded-2xl bg-purple-50 hover:bg-purple-100 text-rose-600 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-95 border border-purple-100"
      >
        <LogOut size={16} />
        <span>Sign Out</span>
      </button>
    </div>
  );
};
