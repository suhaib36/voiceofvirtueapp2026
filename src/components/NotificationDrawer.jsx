import React from 'react';
import { X, CheckCheck, Bell, Calendar, HeartHandshake, Award } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const NotificationDrawer = () => {
  const {
    isNotificationsOpen,
    setIsNotificationsOpen,
    notifications,
    markNotificationsAsRead,
    navigateTo
  } = useApp();

  if (!isNotificationsOpen) return null;

  const getIcon = (type) => {
    switch (type) {
      case 'event':
        return <Calendar className="text-brand-600" size={18} />;
      case 'request':
        return <HeartHandshake className="text-brand-600" size={18} />;
      case 'milestone':
        return <Award className="text-hope-gold" size={18} />;
      default:
        return <Bell className="text-brand-600" size={18} />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md h-full bg-[#FAF7FC] flex flex-col shadow-2xl relative">
        {/* Header */}
        <div className="p-4 bg-white border-b border-purple-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-brand-100 rounded-lg text-brand-700">
              <Bell size={18} />
            </div>
            <h3 className="font-serif font-bold text-lg text-slate-900">Notifications</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={markNotificationsAsRead}
              className="text-xs text-brand-700 hover:text-brand-900 flex items-center gap-1 font-medium px-2 py-1 rounded hover:bg-brand-50"
            >
              <CheckCheck size={14} />
              Mark all read
            </button>
            <button
              onClick={() => setIsNotificationsOpen(false)}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {notifications.map((n) => (
            <div
              key={n.id}
              onClick={() => {
                if (n.type === 'event') {
                  navigateTo('profile');
                } else if (n.type === 'request') {
                  navigateTo('profile');
                }
                setIsNotificationsOpen(false);
              }}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                n.unread
                  ? 'bg-white border-purple-200 shadow-sm'
                  : 'bg-white/60 border-purple-100/60 opacity-80'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-50 rounded-xl mt-0.5">{getIcon(n.type)}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-slate-900">{n.title}</h4>
                    {n.unread && <span className="w-2 h-2 rounded-full bg-brand-600" />}
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{n.body}</p>
                  <span className="text-[11px] text-slate-400 mt-2 block font-medium">
                    {n.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
