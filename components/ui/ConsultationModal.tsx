'use client';
import { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  initialService?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  title = 'Get a Free Consultation',
  initialService
}: ModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: initialService || 'Flexible Endoscope Repair',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#06162d]/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle2 size={56} className="mx-auto text-sky-500 mb-4" />
            <h3 className="text-2xl font-bold text-[#06162d] mb-2">Thank You!</h3>
            <p className="text-slate-600 text-sm">
              Your inquiry has been received. Our biomedical engineering team will contact you shortly.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <span className="text-xs font-bold tracking-widest text-sky-600 uppercase">
                AJ Medical Equipment Trading
              </span>
              <h2 className="text-2xl font-bold text-[#06162d] mt-1">{title}</h2>
              <p className="text-slate-500 text-sm mt-1">
                Speak directly with certified technicians for servicing, repairs, and quotes.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Hospital / Clinic</label>
                  <input
                    type="text"
                    placeholder="Facility name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="you@hospital.ae"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Equipment / Service Needed</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all bg-white"
                >
                  <option value="Flexible Endoscope Repair">Flexible Endoscope Repair</option>
                  <option value="Rigid Endoscope Repair">Rigid Endoscope Repair</option>
                  <option value="Karl Storz Equipment Servicing">Karl Storz Equipment Servicing</option>
                  <option value="Ultrasound Probe Repair">Ultrasound Probe Repair</option>
                  <option value="Board Level Repair">Board Level Repair</option>
                  <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC / PPM)</option>
                  <option value="Medical Equipment Supply">Medical Equipment Supply</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Requirement / Notes</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about the issue, model or serial number..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#06162d] text-white font-semibold text-sm rounded-full flex items-center justify-center gap-2 hover:bg-[#0c2b57] transition-all shadow-md hover:shadow-lg"
              >
                <span>Submit Request</span>
                <Send size={15} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
