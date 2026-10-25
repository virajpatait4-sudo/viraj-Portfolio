import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  FileDown, 
  Copy, 
  Check, 
  Send,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7, x: 0.5 },
      colors: ['#8b5cf6', '#3b82f6', '#06b6d4']
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6, x: 0.5 },
      colors: ['#8b5cf6', '#06b6d4', '#10b981']
    });

    const subject = encodeURIComponent(formData.subject || `Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(`From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`);

    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold block">
            Get In Touch
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Contact
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
            Feel free to reach out directly regarding internship opportunities, technical collaborations, or questions about my projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct verified channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Email */}
            <div className="p-6 rounded-2xl bg-dark-900 border border-white/[0.08] space-y-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-xl bg-purple-600/20 text-purple-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Direct Email
                  </span>
                  <span className="text-sm font-bold text-white font-mono">
                    {personalInfo.email}
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-1">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-medium transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>

                <button
                  onClick={handleCopy}
                  className="flex items-center space-x-1.5 py-2 px-3 rounded-xl bg-dark-950 hover:bg-dark-850 text-slate-300 text-xs font-medium border border-white/[0.08] transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-dark-900 border border-white/[0.08] hover:border-blue-500/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3">
                  <LinkedinIcon className="w-5 h-5 text-blue-400" />
                  <div>
                    <span className="text-xs font-bold text-white block">LinkedIn</span>
                    <span className="text-[10px] text-slate-400 font-mono">viraj-patait</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-dark-900 border border-white/[0.08] hover:border-purple-500/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3">
                  <GithubIcon className="w-5 h-5 text-purple-400" />
                  <div>
                    <span className="text-xs font-bold text-white block">GitHub</span>
                    <span className="text-[10px] text-slate-400 font-mono">virajpatait4-sudo</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400 transition-colors" />
              </a>
            </div>

            {/* Location */}
            <div className="p-4 rounded-2xl bg-dark-900 border border-white/[0.08] flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-xs">
                <span className="text-slate-400 font-mono uppercase text-[10px] block">Location</span>
                <span className="text-white font-medium">{personalInfo.location}</span>
              </div>
            </div>

            {/* Resume Download Box */}
            <div className="p-5 rounded-2xl bg-dark-900 border border-purple-500/20 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white flex items-center space-x-1.5">
                  <FileDown className="w-4 h-4 text-cyan-400" />
                  <span>Resume Document</span>
                </span>
                <span className="text-[10px] font-mono text-cyan-400">PDF Format</span>
              </div>
              <p className="text-xs text-slate-400">
                Download my complete resume with verified academic scores and project details.
              </p>
              <a
                href={personalInfo.resumeDownloadUrl}
                download="Viraj_Rajkumar_Patait_Resume.pdf"
                onClick={handleDownload}
                className="w-full flex items-center justify-center space-x-2 py-2 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-medium transition-colors"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Message Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-2xl bg-dark-900 border border-white/[0.08] shadow-lg space-y-5">
              <div className="space-y-1 pb-3 border-b border-white/[0.06]">
                <h3 className="text-base font-bold text-white">
                  Send a Message
                </h3>
                <p className="text-xs text-slate-400">
                  Prepares an email to dispatch directly to <span className="font-mono text-slate-300">{personalInfo.email}</span>.
                </p>
              </div>

              {sent ? (
                <div className="p-6 rounded-xl bg-dark-950 border border-emerald-500/20 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Message Prepared</h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Your email client has been opened with your drafted message. You can also write directly to <strong className="text-white">{personalInfo.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-3 py-1.5 rounded-lg bg-dark-850 hover:bg-dark-800 text-slate-300 text-xs font-medium border border-white/[0.08] transition-colors cursor-pointer"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-slate-300 block">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2 rounded-xl bg-dark-950 border border-white/[0.08] focus:border-purple-500 focus:outline-none text-white text-xs placeholder:text-slate-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono text-slate-300 block">
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2 rounded-xl bg-dark-950 border border-white/[0.08] focus:border-purple-500 focus:outline-none text-white text-xs placeholder:text-slate-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300 block">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Internship Opportunity"
                      className="w-full px-3.5 py-2 rounded-xl bg-dark-950 border border-white/[0.08] focus:border-purple-500 focus:outline-none text-white text-xs placeholder:text-slate-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-300 block">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your message here..."
                      className="w-full px-3.5 py-2 rounded-xl bg-dark-950 border border-white/[0.08] focus:border-purple-500 focus:outline-none text-white text-xs placeholder:text-slate-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Email to Viraj</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
