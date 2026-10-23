import React from 'react';
import { ChevronLeft, Bell, User } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { VoicesLogo } from './VoicesLogo';

export const Header = () => {
  const {
    activeScreen,
    previousScreen,
    navigateTo,
    userProfile,
    isNotificationsOpen,
    setIsNotificationsOpen,
    unreadNotificationsCount
  } = useApp();

  const getSubtitle = () => {
    switch (activeScreen) {
      case 'home':
        return 'Home';
      case 'get-help':
        return 'Get Help';
      case 'get-involved':
        return 'Get Involved';
      case 'profile':
        return 'Profile';
      case 'request-success':
        return 'Request Assistance ...';
      default:
        return '';
    }
  };

  const handleBack = () => {
    if (activeScreen === 'request-success') {
      navigateTo('get-help');
    } else {
      navigateTo(previousScreen || 'home');
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-[#FAF7FC]/95 backdrop-blur-md px-3 sm:px-6 py-3 flex items-center justify-between border-b border-purple-100/70 transition-all">
      <div className="flex items-center gap-2">
        {activeScreen === 'request-success' && (
          <button
            onClick={handleBack}
            className="p-1.5 -ml-1 text-slate-700 hover:text-brand-700 hover:bg-brand-100/60 rounded-full transition-colors active:scale-95"
            aria-label="Go back"
          >
            <ChevronLeft size={22} className="stroke-[2.5]" />
          </button>
        )}

        <VoicesLogo subtitle={getSubtitle()} />
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        {/* Notifications Button */}
        <button
          onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
          className="relative p-2 text-brand-800 bg-brand-100/70 hover:bg-brand-200/80 rounded-full transition-all active:scale-95 shadow-xs"
          aria-label="View notifications"
          title="Notifications"
        >
          <Bell size={18} className="text-brand-700" />
          {unreadNotificationsCount > 0 && (
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 rounded-full ring-2 ring-white animate-pulse" />
          )}
        </button>

        {/* User Avatar - No Profile Image, Clean Initials Badge */}
        <button
          onClick={() => navigateTo('profile')}
          className="relative group transition-transform active:scale-95"
          title={`View ${userProfile.name}'s Profile`}
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-brand-700 to-purple-600 text-white font-bold text-xs flex items-center justify-center shadow-xs border-2 border-brand-300 ring-1 ring-purple-100">
            {userProfile.initials || "CR"}
          </div>
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full" />
        </button>
      </div>
    </header>
  );
};
