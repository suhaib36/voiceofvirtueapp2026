import React, { useState } from 'react';
import {
  Shield,
  Gift,
  HandHeart,
  ChevronRight,
  Clock,
  Heart,
  Calendar,
  Sparkles,
  MapPin,
  Users
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { communitySpotlights } from '../../data/initialData';

export const HomeScreen = () => {
  const {
    userProfile,
    initiatives,
    navigateTo,
    setActiveModal,
    setSelectedInitiative,
    showToast
  } = useApp();

  const [likes, setLikes] = useState(communitySpotlights[0].initialLikes);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
      showToast('Loved! Thank you for encouraging our neighbors.');
    } else {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    }
  };

  const openInitiative = (init) => {
    setSelectedInitiative(init);
    setActiveModal('initiative-details');
  };

  return (
    <div className="pb-28 px-4 sm:px-6 pt-3 space-y-5 animate-fade-in max-w-3xl mx-auto">
      {/* Welcome Greeting */}
      <div>
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
          VOICES OF VIRTUE
        </span>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
          Welcome back, {userProfile.name}
        </h1>
        <p className="text-xs sm:text-sm italic text-slate-500 mt-1 font-serif">
          "Every act of virtue creates a ripple of hope."
        </p>
      </div>

      {/* Featured Hero Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 text-white p-5 sm:p-7 shadow-lg shadow-brand-700/20">
        {/* Subtle background glow */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10 blur-xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-purple-400/20 blur-xl pointer-events-none" />

        <div className="relative z-10 space-y-3.5">
          {/* Tag Pill */}
          <div className="inline-flex items-center gap-2 bg-hope-gold/95 text-amber-950 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
            <span className="text-xs">🤝</span>
            <span>H.O.P.E. MISSION</span>
            <span className="text-amber-900/80 font-normal border-l border-amber-950/20 pl-2">
              Helping Other People Emerge
            </span>
          </div>

          <p className="text-xs sm:text-sm text-purple-100 leading-relaxed max-w-lg">
            Uplifting families through collective compassion. Together, we nourish spirits, bridge urgent gaps, and build resilient communities.
          </p>

          {/* Stats Glassmorphism Grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2 text-center bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/20">
            <div>
              <div className="font-bold text-base sm:text-xl text-white">12.4k+</div>
              <div className="text-[10px] sm:text-xs text-purple-200 uppercase tracking-tight">
                Meals Provided
              </div>
            </div>
            <div className="border-x border-white/20">
              <div className="font-bold text-base sm:text-xl text-white">3,200+</div>
              <div className="text-[10px] sm:text-xs text-purple-200 uppercase tracking-tight">
                Families Helped
              </div>
            </div>
            <div>
              <div className="font-bold text-base sm:text-xl text-white">450+</div>
              <div className="text-[10px] sm:text-xs text-purple-200 uppercase tracking-tight">
                Active Hands
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Immediate Actions */}
      <div className="space-y-2.5">
        <div className="flex justify-between items-center px-0.5">
          <h2 className="text-sm font-bold text-slate-900">Immediate Actions</h2>
          <span className="text-xs text-slate-400">Tap to respond</span>
        </div>

        <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
          {/* Action 1: Get Help */}
          <button
            onClick={() => navigateTo('get-help')}
            className="flex flex-col items-center p-3.5 bg-white hover:bg-purple-50/50 rounded-2xl border border-purple-100/90 shadow-sm transition-all hover:-translate-y-0.5 active:scale-95 group text-center"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-brand-600 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
              <Shield size={22} className="stroke-[2.2]" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Get Help</span>
            <span className="text-[10px] text-brand-700 bg-brand-50 px-2 py-0.5 rounded-full mt-1.5 font-medium">
              Confidential
            </span>
          </button>

          {/* Action 2: Donate */}
          <button
            onClick={() => setActiveModal('donation')}
            className="flex flex-col items-center p-3.5 bg-white hover:bg-amber-50/50 rounded-2xl border border-purple-100/90 shadow-sm transition-all hover:-translate-y-0.5 active:scale-95 group text-center"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
              <Gift size={22} className="stroke-[2.2]" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Donate</span>
            <span className="text-[10px] text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded-full mt-1.5 font-medium">
              Pantry Goods
            </span>
          </button>

          {/* Action 3: Volunteer */}
          <button
            onClick={() => navigateTo('get-involved')}
            className="flex flex-col items-center p-3.5 bg-white hover:bg-emerald-50/50 rounded-2xl border border-purple-100/90 shadow-sm transition-all hover:-translate-y-0.5 active:scale-95 group text-center"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
              <HandHeart size={22} className="stroke-[2.2]" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Volunteer</span>
            <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full mt-1.5 font-medium">
              Join a Shift
            </span>
          </button>
        </div>
      </div>

      {/* Active Initiatives */}
      <div className="space-y-3">
        <div className="flex justify-between items-center px-0.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-600" />
            <h2 className="text-sm font-bold text-slate-900">Active Initiatives</h2>
          </div>
          <button
            onClick={() => navigateTo('get-involved')}
            className="text-xs font-semibold text-brand-700 hover:text-brand-900 flex items-center gap-0.5"
          >
            See All (6)
            <ChevronRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {initiatives.map((item) => (
            <div
              key={item.id}
              onClick={() => openInitiative(item)}
              className="p-3.5 bg-white rounded-3xl border border-purple-100/90 shadow-sm hover:shadow-md transition-all cursor-pointer flex sm:flex-col gap-3 group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 sm:w-full sm:h-36 rounded-2xl object-cover flex-shrink-0 group-hover:scale-102 transition-transform"
              />

              <div className="flex-1 min-w-0 space-y-1.5">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-bold text-brand-700 uppercase tracking-wider bg-brand-50 px-2 py-0.5 rounded-md">
                    {item.category}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1 font-medium">
                    {item.category === 'WEEKLY DRIVE' ? <Calendar size={11} /> : <Clock size={11} />}
                    {item.schedule}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-slate-900 text-sm truncate">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-500 line-clamp-2 leading-tight">
                  {item.description}
                </p>

                {/* Progress bar */}
                <div className="pt-1">
                  <div className="flex justify-between items-center text-[10.5px] text-slate-600 mb-1">
                    <span>{item.progressLabel}</span>
                    <span className="font-bold text-slate-800">
                      {item.percent ? `${item.percent}%` : `${item.current} / ${item.total}`}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-purple-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${item.progressColor}`}
                      style={{
                        width: `${item.percent ? item.percent : Math.round((item.current / item.total) * 100)}%`
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Spotlight - No Profile Image, Uses Initials Monogram */}
      <div className="p-4 sm:p-5 bg-white rounded-3xl border border-purple-100 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
            <span>💛</span>
            <span>Community Spotlight</span>
          </div>
          <span className="text-[10px] font-bold text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded-full">
            {communitySpotlights[0].tag}
          </span>
        </div>

        {/* Quote Block with amber vertical line */}
        <blockquote className="border-l-3 border-amber-400 pl-3.5 py-1">
          <p className="font-serif italic text-xs sm:text-sm text-slate-800 leading-relaxed">
            "{communitySpotlights[0].quote}"
          </p>
        </blockquote>

        <div className="flex items-center justify-between pt-1 border-t border-purple-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-brand-700 text-white font-bold text-xs flex items-center justify-center border border-purple-200">
              {communitySpotlights[0].initials}
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">
                {communitySpotlights[0].author}
              </div>
              <div className="text-[10px] text-slate-500">
                {communitySpotlights[0].district}
              </div>
            </div>
          </div>

          <button
            onClick={handleLike}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all active:scale-95 ${
              hasLiked
                ? 'bg-rose-50 text-rose-600 border border-rose-200'
                : 'bg-purple-50 text-slate-600 hover:bg-purple-100 border border-purple-100'
            }`}
          >
            <Heart
              size={14}
              className={hasLiked ? 'fill-rose-500 text-rose-500' : 'text-slate-400'}
            />
            <span>{likes}</span>
          </button>
        </div>
      </div>

      {/* Bottom Hub CTA banner */}
      <div className="p-4 sm:p-5 rounded-3xl bg-brand-100/70 border border-purple-200/80 flex items-center justify-between gap-3 shadow-sm">
        <div className="space-y-0.5">
          <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Have goods to share?</h4>
          <p className="text-xs text-slate-600 leading-tight">
            Drop off non-perishables at any local partner hub.
          </p>
        </div>

        <button
          onClick={() => setActiveModal('hub-locator')}
          className="px-4 py-2.5 bg-brand-700 hover:bg-brand-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all active:scale-95 whitespace-nowrap"
        >
          Find Hub
        </button>
      </div>
    </div>
  );
};
