import React from 'react';
import { Home, HeartHandshake, Users, User } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const BottomNav = () => {
  const { activeScreen, navigateTo } = useApp();

  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: Home
    },
    {
      id: 'get-help',
      label: 'Get Help',
      icon: HeartHandshake
    },
    {
      id: 'get-involved',
      label: 'Get Involved',
      icon: Users
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: User
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 w-full max-w-xl mx-auto bg-white/95 backdrop-blur-lg border-t sm:border-x border-purple-100 sm:rounded-t-3xl px-3 sm:px-6 py-2 shadow-float-nav transition-all">
      <div className="grid grid-cols-4 items-center justify-items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            activeScreen === item.id ||
            (activeScreen === 'request-success' && item.id === 'get-help');

          return (
            <button
              key={item.id}
              onClick={() => navigateTo(item.id)}
              className={`flex flex-col items-center justify-center w-full py-1 transition-all group active:scale-95 ${
                isActive ? 'text-brand-700' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <div className="relative">
                <Icon
                  size={22}
                  className={`transition-transform duration-200 ${
                    isActive ? 'scale-110 stroke-[2.4]' : 'group-hover:scale-105 stroke-[1.8]'
                  }`}
                />
                {isActive && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-700 rounded-full" />
                )}
              </div>
              <span
                className={`text-[11px] mt-1.5 tracking-tight font-medium ${
                  isActive ? 'text-brand-700 font-bold' : 'text-slate-500'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
