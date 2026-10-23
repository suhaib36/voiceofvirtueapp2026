import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, Truck, PackageCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ScheduleDropoffModal = () => {
  const { activeModal, setActiveModal, urgentSupplies, showToast } = useApp();
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('10:00 AM – 11:30 AM');
  const [scheduledSuccess, setScheduledSuccess] = useState(false);

  if (activeModal !== 'schedule-dropoff') return null;

  const pledgedItems = urgentSupplies.filter((item) => item.pledged);

  const dates = ['Today', 'Tomorrow', 'This Friday', 'This Saturday'];
  const times = ['9:00 AM – 10:30 AM', '10:00 AM – 11:30 AM', '1:00 PM – 2:30 PM', '3:30 PM – 5:00 PM'];

  const handleConfirm = (e) => {
    e.preventDefault();
    setScheduledSuccess(true);
    showToast('Supply drop-off scheduled! Check-in pass generated.');
  };

  const resetAndClose = () => {
    setScheduledSuccess(false);
    setActiveModal(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-0 sm:p-4 animate-fade-in">
      <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] flex flex-col overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="p-4 border-b border-purple-100 flex items-center justify-between bg-gradient-to-r from-amber-50 to-orange-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-sm">
              <Truck size={17} />
            </div>
            <div>
              <h3 className="font-serif font-bold text-slate-900 text-lg">Schedule Supply Drop-off</h3>
              <p className="text-[11px] text-slate-500">Main Warehouse Donation Dock</p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {scheduledSuccess ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <PackageCheck size={32} />
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Drop-off Confirmed
                </span>
                <h4 className="font-serif text-xl font-bold text-slate-900 mt-2">
                  We Look Forward to Seeing You!
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Your care package arrival has been logged with our warehouse team.
                </p>
              </div>

              <div className="p-4 bg-[#FBF8FD] rounded-2xl border border-purple-200 text-left space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Calendar size={14} className="text-brand-600" />
                  <strong>Date:</strong> {selectedDate}
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Clock size={14} className="text-brand-600" />
                  <strong>Window:</strong> {selectedTime}
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <MapPin size={14} className="text-brand-600" />
                  <span>Main Warehouse Dock #2 • 782 N Acadian Thruway</span>
                </div>
              </div>

              <button
                onClick={resetAndClose}
                className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm rounded-xl shadow-md transition-all active:scale-95"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleConfirm} className="space-y-4">
              {/* Pledged items summary */}
              <div className="p-3 bg-purple-50/70 border border-purple-200/70 rounded-xl">
                <span className="text-[11px] font-bold text-brand-800 uppercase tracking-wider block mb-1">
                  Items to Drop Off ({pledgedItems.length || 'All Urgently Needed'}):
                </span>
                {pledgedItems.length > 0 ? (
                  <ul className="text-xs text-slate-700 space-y-1">
                    {pledgedItems.map((item) => (
                      <li key={item.id} className="flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-brand-600" />
                        <span>{item.title}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-slate-600 italic">
                    General non-perishable pantry staples, winter wear, and hygiene kits.
                  </p>
                )}
              </div>

              {/* Day selection */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Select Drop-off Day
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {dates.map((d) => (
                    <button
                      type="button"
                      key={d}
                      onClick={() => setSelectedDate(d)}
                      className={`p-2.5 rounded-xl text-xs font-semibold border transition-all text-center ${
                        selectedDate === d
                          ? 'bg-brand-600 text-white border-brand-600 shadow-sm'
                          : 'bg-white text-slate-700 border-purple-100 hover:bg-purple-50'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time window selection */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Arrival Time Window
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {times.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`p-2.5 rounded-xl text-xs font-semibold border transition-all text-center ${
                        selectedTime === t
                          ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
                          : 'bg-white text-slate-700 border-purple-100 hover:bg-purple-50'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location Note */}
              <div className="p-3 bg-[#FAF7FC] border border-purple-100 rounded-xl text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                  <MapPin size={14} className="text-amber-600" />
                  Main Warehouse Donation Dock
                </div>
                <p className="text-[11px] text-slate-500">
                  Open Mon–Sat • 8:00 AM – 5:30 PM. Drive up to covered Dock #2, staff will assist you with unboxing.
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm rounded-xl shadow-md flex items-center justify-center gap-2 active:scale-95 transition-all"
              >
                <Calendar size={16} />
                Confirm Drop-off Slot
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
