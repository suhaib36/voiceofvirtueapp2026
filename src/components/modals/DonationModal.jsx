import React, { useState } from 'react';
import { X, Heart, ShieldCheck, Check, Sparkles, CreditCard, Lock } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const DonationModal = ({ initialAmount = 25, isDefaultMonthly = false }) => {
  const { activeModal, setActiveModal, processDonation } = useApp();
  const [amount, setAmount] = useState(initialAmount);
  const [customAmount, setCustomAmount] = useState('');
  const [isMonthly, setIsMonthly] = useState(isDefaultMonthly);
  const [donorName, setDonorName] = useState('Cheryl Richard');
  const [dedication, setDedication] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [donationSuccess, setDonationSuccess] = useState(false);

  if (activeModal !== 'donation') return null;

  const amounts = [25, 50, 100, 250];

  const effectiveAmount = customAmount ? parseFloat(customAmount) || 0 : amount;

  const getImpactText = (amt) => {
    if (amt >= 250) return "Sponsors an entire community emergency food box drop for 10+ families.";
    if (amt >= 100) return "Covers emergency utility support & full bulk grocery pantry restocking.";
    if (amt >= 50) return "Equips two children with full backpacks, uniforms, and hygiene care packs.";
    return "Feeds a local Baton Rouge family of 4 for an entire weekend.";
  };

  const handleDonate = (e) => {
    e.preventDefault();
    if (effectiveAmount <= 0) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setDonationSuccess(true);
      processDonation(effectiveAmount, isMonthly, dedication);
    }, 1200);
  };

  const resetAndClose = () => {
    setDonationSuccess(false);
    setActiveModal(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-0 sm:p-4 animate-fade-in">
      <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[92vh] flex flex-col overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="p-4 border-b border-purple-100 flex items-center justify-between bg-gradient-to-r from-purple-50 via-white to-purple-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-sm">
              <Heart size={16} fill="currentColor" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-slate-900 text-lg">Give with Heart</h3>
              <p className="text-[11px] text-slate-500">100% Tax Deductible 501(c)(3) Giving</p>
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
          {donationSuccess ? (
            <div className="py-6 px-4 text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 text-brand-700 rounded-full flex items-center justify-center mx-auto shadow-inner animate-pulse-subtle">
                <Sparkles size={32} />
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-brand-700 bg-brand-50 px-3 py-1 rounded-full">
                  Blessing Received
                </span>
                <h4 className="font-serif text-2xl font-bold text-slate-900 mt-2">
                  Thank you, {donorName}!
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Your generous gift of <strong className="text-brand-800 font-bold">${effectiveAmount}{isMonthly ? '/month' : ''}</strong> is already spreading virtue and relief across our Baton Rouge community.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8F4FD] border border-purple-200/80 text-left space-y-2 text-xs">
                <div className="flex justify-between text-slate-700">
                  <span>Tax Receipt Reference:</span>
                  <strong className="font-mono text-slate-900">#VOV-GIFT-{(Math.random() * 100000).toFixed(0)}</strong>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>Impact Created:</span>
                  <span className="text-brand-700 font-medium">+{Math.round(effectiveAmount * 4)} Meals Funded</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>Virtue Points Earned:</span>
                  <span className="text-hope-gold font-bold">+{Math.round(effectiveAmount * 2)} pts</span>
                </div>
              </div>

              <button
                onClick={resetAndClose}
                className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm rounded-xl shadow-md transition-all active:scale-95"
              >
                Return to App
              </button>
            </div>
          ) : (
            <form onSubmit={handleDonate} className="space-y-4">
              {/* Amount Selection */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Choose an amount
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {amounts.map((amt) => (
                    <button
                      type="button"
                      key={amt}
                      onClick={() => {
                        setAmount(amt);
                        setCustomAmount('');
                      }}
                      className={`py-2.5 rounded-xl text-sm font-bold transition-all border ${
                        amount === amt && !customAmount
                          ? 'bg-brand-700 text-white border-brand-700 shadow-sm scale-102'
                          : 'bg-purple-50/60 text-slate-700 border-purple-100 hover:bg-purple-100'
                      }`}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>

                <div className="mt-2.5">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">
                      $
                    </span>
                    <input
                      type="number"
                      placeholder="Custom amount"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="w-full pl-8 pr-4 py-2 bg-purple-50/40 border border-purple-200/80 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium placeholder:text-slate-400"
                    />
                  </div>
                </div>
              </div>

              {/* Impact Banner */}
              <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-xl flex items-center gap-2.5">
                <span className="text-amber-600 text-base">💛</span>
                <p className="text-xs text-amber-900 font-medium">
                  <strong>${effectiveAmount} Impact:</strong> {getImpactText(effectiveAmount)}
                </p>
              </div>

              {/* Monthly recurring checkbox */}
              <label className="flex items-center gap-2.5 p-3 rounded-xl bg-purple-50/50 border border-purple-100 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isMonthly}
                  onChange={(e) => setIsMonthly(e.target.checked)}
                  className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500 border-purple-300"
                />
                <span className="text-xs font-semibold text-slate-800">
                  Make this a monthly blessing of hope
                </span>
              </label>

              {/* Dedication note */}
              <div>
                <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                  Optional Dedication or Prayer Note
                </label>
                <input
                  type="text"
                  placeholder="In honor of family, a loved one, or neighbor..."
                  value={dedication}
                  onChange={(e) => setDedication(e.target.value)}
                  className="w-full px-3 py-2 bg-purple-50/30 border border-purple-200/60 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              {/* Payment Details Simulation */}
              <div className="p-3 bg-[#FAF7FC] border border-purple-100 rounded-xl space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-700">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <CreditCard size={14} className="text-brand-600" />
                    Express Giving Card
                  </span>
                  <span className="text-[11px] text-slate-500">•••• 4242</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Charges will appear as <em>Voices of Virtue 501c3</em> on your statement.
                </p>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isProcessing || effectiveAmount <= 0}
                className="w-full py-3.5 bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm rounded-xl shadow-lg shadow-purple-600/25 flex items-center justify-center gap-2 active:scale-95 transition-all disabled:opacity-50"
              >
                {isProcessing ? (
                  <span className="inline-block animate-spin mr-2">⟳</span>
                ) : (
                  <Heart size={16} fill="currentColor" />
                )}
                Give ${effectiveAmount} with Heart
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <Lock size={12} />
                <span>Secure 256-bit encrypted giving</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
