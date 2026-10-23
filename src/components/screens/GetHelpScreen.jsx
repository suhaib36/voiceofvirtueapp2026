import React, { useState } from 'react';
import {
  Sparkles,
  Utensils,
  Shirt,
  GraduationCap,
  Sparkle,
  Heart,
  Phone,
  Mail,
  Building2,
  Truck,
  Zap,
  Lock,
  PhoneCall,
  MessageSquare,
  Check,
  ShieldAlert
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const GetHelpScreen = () => {
  const { userProfile, submitAssistanceRequest } = useApp();

  // Form State
  const [supportTypes, setSupportTypes] = useState(['Food & Groceries']);
  const [fullName, setFullName] = useState(userProfile.name);
  const [contactMethod, setContactMethod] = useState('phone');
  const [contactValue, setContactValue] = useState(userProfile.phone);
  const [householdSize, setHouseholdSize] = useState('2');
  const [supportPreference, setSupportPreference] = useState('pickup');
  const [urgentNeed, setUrgentNeed] = useState(false);
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableCategories = [
    { id: 'Food & Groceries', label: 'Food & Groceries', icon: Utensils },
    { id: 'Clothing & Warm Wear', label: 'Clothing & Warm Wear', icon: Shirt },
    { id: 'School Supplies', label: 'School Supplies', icon: GraduationCap },
    { id: 'Hygiene & Care', label: 'Hygiene & Care', icon: Sparkle },
    { id: 'Other Community Care', label: 'Other Community Care', icon: Heart }
  ];

  const toggleCategory = (catId) => {
    setSupportTypes((prev) =>
      prev.includes(catId)
        ? prev.filter((item) => item !== catId)
        : [...prev, catId]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      submitAssistanceRequest({
        supportTypes,
        fullName,
        contactMethod,
        contactValue,
        householdSize,
        supportPreference,
        urgentNeed,
        additionalNotes
      });
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="pb-28 px-4 sm:px-6 pt-3 space-y-5 animate-fade-in max-w-3xl mx-auto">
      {/* Top Banner Tag */}
      <div className="flex items-center gap-1.5 text-brand-700 font-bold text-[11px] tracking-wider uppercase">
        <span className="p-1 rounded-full bg-brand-100 text-brand-700">
          <Sparkles size={13} />
        </span>
        <span>COMPASSIONATE CARE HUB</span>
      </div>

      {/* Main Title & Subtitle */}
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
          We're Here For You
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
          Request confidential community assistance. No judgment, just compassion and steadfast care.
        </p>
      </div>

      {/* Confidentiality Callout Box */}
      <div className="p-4 bg-brand-50/70 border border-purple-200/70 rounded-2xl flex items-start gap-3 shadow-xs">
        <div className="w-2.5 h-2.5 rounded-full bg-brand-600 mt-1.5 flex-shrink-0" />
        <div>
          <h4 className="text-xs sm:text-sm font-bold text-brand-900">100% Confidential & Free</h4>
          <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
            Your privacy is deeply sacred to our volunteers. We never share your details.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Support categories */}
        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-purple-100 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-brand-600">
                <Sparkles size={16} />
              </span>
              <h3 className="text-sm font-bold text-slate-900">
                What kind of support is needed?
              </h3>
            </div>
            <span className="text-[10px] sm:text-xs text-slate-400 font-medium">Select all that apply</span>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {availableCategories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = supportTypes.includes(cat.id);
              return (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() => toggleCategory(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 active:scale-95 ${
                    isSelected
                      ? 'bg-brand-700 text-white shadow-md shadow-brand-700/20'
                      : 'bg-purple-50 text-brand-900 hover:bg-purple-100/80 border border-purple-100'
                  }`}
                >
                  <Icon size={14} className={isSelected ? 'text-white' : 'text-brand-600'} />
                  <span>{cat.label}</span>
                  {isSelected && <Check size={13} className="stroke-[3]" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Contact & Household info */}
        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-purple-100 shadow-sm space-y-4">
          {/* Full Name */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs sm:text-sm font-bold text-slate-800">
                Full Name or Preferred Moniker
              </label>
              <span className="text-xs text-slate-400">First name is okay</span>
            </div>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Cheryl Richard"
              className="w-full px-4 py-3 bg-purple-50/50 border border-purple-200/70 rounded-2xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium"
            />
          </div>

          {/* Contact Method Tabs */}
          <div>
            <label className="text-xs sm:text-sm font-bold text-slate-800 block mb-2">
              How may we reach you safely?
            </label>
            <div className="grid grid-cols-2 gap-2 p-1 bg-purple-50/70 rounded-2xl border border-purple-100 mb-2.5">
              <button
                type="button"
                onClick={() => {
                  setContactMethod('phone');
                  if (!contactValue || contactValue.includes('@')) setContactValue('(555) 019-2834');
                }}
                className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  contactMethod === 'phone'
                    ? 'bg-white text-brand-700 shadow-sm font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Phone size={14} />
                Phone Call or SMS
              </button>
              <button
                type="button"
                onClick={() => {
                  setContactMethod('email');
                  if (!contactValue || !contactValue.includes('@')) setContactValue('cheryl.richard@communityhope.org');
                }}
                className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  contactMethod === 'email'
                    ? 'bg-white text-brand-700 shadow-sm font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Mail size={14} />
                Email Address
              </button>
            </div>

            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-600">
                {contactMethod === 'phone' ? <Phone size={16} /> : <Mail size={16} />}
              </span>
              <input
                type={contactMethod === 'phone' ? 'tel' : 'email'}
                required
                value={contactValue}
                onChange={(e) => setContactValue(e.target.value)}
                placeholder={contactMethod === 'phone' ? '(555) 000-0000' : 'name@example.com'}
                className="w-full pl-11 pr-4 py-3 bg-purple-50/50 border border-purple-200/70 rounded-2xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium"
              />
            </div>
          </div>

          {/* Household size */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs sm:text-sm font-bold text-slate-800">
                Household Size (including yourself)
              </label>
              <span className="text-xs text-slate-400">Helps portion parcels</span>
            </div>
            <div className="grid grid-cols-4 gap-2.5">
              {['1', '2', '3', '4+'].map((num) => (
                <button
                  type="button"
                  key={num}
                  onClick={() => setHouseholdSize(num)}
                  className={`py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                    householdSize === num
                      ? 'bg-brand-700 text-white shadow-md'
                      : 'bg-purple-50/80 text-brand-900 hover:bg-purple-100 border border-purple-100'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Preference for receiving support */}
        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-purple-100 shadow-sm space-y-3">
          <label className="text-xs sm:text-sm font-bold text-slate-800 block">
            Preference for receiving support
          </label>

          {/* Option 1: Pickup */}
          <div
            onClick={() => setSupportPreference('pickup')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
              supportPreference === 'pickup'
                ? 'bg-purple-50/70 border-brand-500 ring-1 ring-brand-500'
                : 'bg-white border-purple-100 hover:bg-purple-50/30'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    supportPreference === 'pickup'
                      ? 'border-brand-600 bg-brand-600'
                      : 'border-slate-300'
                  }`}
                >
                  {supportPreference === 'pickup' && (
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  )}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm text-slate-900">
                  <Building2 size={15} className="text-brand-700" />
                  <span>Community Pickup Hub</span>
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Pick up discreetly at our weekly pantry & virtue closet (Downtown Grace Center).
                </p>
              </div>
            </div>
          </div>

          {/* Option 2: Home Drop-off */}
          <div
            onClick={() => setSupportPreference('dropoff')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
              supportPreference === 'dropoff'
                ? 'bg-purple-50/70 border-brand-500 ring-1 ring-brand-500'
                : 'bg-white border-purple-100 hover:bg-purple-50/30'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    supportPreference === 'dropoff'
                      ? 'border-brand-600 bg-brand-600'
                      : 'border-slate-300'
                  }`}
                >
                  {supportPreference === 'dropoff' && (
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  )}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm text-slate-900">
                  <Truck size={15} className="text-brand-700" />
                  <span>Confidential Home Drop-off</span>
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  An unbranded package placed respectfully at your doorstep or mailbox.
                </p>
              </div>
            </div>
          </div>

          {/* Urgent Need Checkbox */}
          <div
            onClick={() => setUrgentNeed(!urgentNeed)}
            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
              urgentNeed
                ? 'bg-amber-50/80 border-amber-400'
                : 'bg-purple-50/30 border-purple-100 hover:bg-purple-50/60'
            }`}
          >
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={urgentNeed}
                onChange={() => {}}
                className="mt-0.5 w-4 h-4 rounded text-brand-600 focus:ring-brand-500 border-purple-300"
              />
              <div>
                <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm text-slate-900">
                  <Zap size={15} className="text-amber-500 fill-amber-500" />
                  <span>Urgent Need (within 24–48 hours)</span>
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Check this if your family is currently without immediate food, infant formula, or warm shelter.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs sm:text-sm font-bold text-slate-800">
                Tell us how we can best support you
              </label>
              <span className="text-xs text-slate-400">Optional</span>
            </div>
            <textarea
              rows={3}
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
              placeholder="Dietary restrictions, children's clothing sizes, diaper sizes, or special delivery notes..."
              className="w-full px-4 py-3 bg-purple-50/40 border border-purple-200/70 rounded-2xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting || supportTypes.length === 0}
            className="w-full py-4 px-4 bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 active:scale-95 transition-all disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="animate-spin">⟳</span>
            ) : (
              <Lock size={16} />
            )}
            <span>Submit Assistance Request</span>
          </button>
          <p className="text-center text-xs text-slate-400 mt-2 font-medium">
            Encrypted & handled with unconditional dignity.
          </p>
        </div>
      </form>

      {/* Immediate Crisis Card */}
      <div className="p-4 sm:p-5 bg-purple-50/80 rounded-3xl border border-purple-200/70 space-y-3 shadow-xs">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
            <ShieldAlert size={18} />
          </div>
          <h4 className="font-serif font-bold text-slate-900 text-sm sm:text-base">In Immediate Crisis?</h4>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          If you are in danger, facing freezing temperatures tonight, or experiencing emergency food insecurity, reach our direct rapid responders immediately:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          <a
            href="tel:5553214673"
            className="py-3 px-3 bg-white hover:bg-purple-50 text-brand-800 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs border border-purple-100 transition-all active:scale-95 text-center"
          >
            <PhoneCall size={15} className="text-brand-600 flex-shrink-0" />
            <span>(555) 321-HOPE</span>
          </a>
          <a
            href="sms:84483?body=VIRTUE"
            className="py-3 px-3 bg-white hover:bg-purple-50 text-brand-800 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs border border-purple-100 transition-all active:scale-95 text-center"
          >
            <MessageSquare size={15} className="text-brand-600 flex-shrink-0" />
            <span>Text "VIRTUE" to 84483</span>
          </a>
        </div>
      </div>
    </div>
  );
};
