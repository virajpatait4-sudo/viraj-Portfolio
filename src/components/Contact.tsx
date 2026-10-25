import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  FileDown, 
  Copy, 
  Check, 
  Send, 
  Sparkles,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleDownload = () => {
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.7, x: 0.5 },
      colors: ['#8b5cf6', '#3b82f6', '#06b6d4']
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger confetti
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6, x: 0.5 },
      colors: ['#8b5cf6', '#06b6d4', '#10b981']
    });

    // Prepare mailto link to open user's real email client with subject & body prefilled
    const mailtoSubject = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    );
    const mailtoBody = encodeURIComponent(
      `Hi Viraj,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent from Portfolio`
    );

    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-electric-cyan font-semibold">
            <Mail className="w-4 h-4" />
            <span>Recruiter Outreach & Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Interested in discussing internship opportunities, engineering projects, or technical collaborations? Feel free to reach out directly through any of my verified channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct verified contact channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-dark-900/80 border border-white/[0.08] hover:border-electric-purple/40 shadow-xl space-y-4 backdrop-blur-sm transition-all">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-xl bg-electric-purple/20 text-electric-violet">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider">
                      Direct Email
                    </span>
                    <span className="text-sm font-bold text-white">
                      {personalInfo.email}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-xl bg-gradient-to-r from-electric-purple to-electric-blue text-white text-xs font-semibold hover:brightness-110 transition-all"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center space-x-1.5 py-2 px-3 rounded-xl bg-dark-850 hover:bg-dark-800 text-slate-300 text-xs font-medium border border-white/[0.08] transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
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

            {/* LinkedIn & GitHub Direct Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-dark-900/80 border border-white/[0.08] hover:border-blue-500/40 hover:bg-dark-850/80 transition-all space-y-3 group"
              >
                <div className="flex items-center justify-between text-slate-400 group-hover:text-blue-400">
                  <LinkedinIcon className="w-6 h-6" />
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">LinkedIn Profile</span>
                  <span className="text-[11px] text-slate-400 font-mono truncate block">
                    in/viraj-patait-067a9b22b
                  </span>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-dark-900/80 border border-white/[0.08] hover:border-purple-500/40 hover:bg-dark-850/80 transition-all space-y-3 group"
              >
                <div className="flex items-center justify-between text-slate-400 group-hover:text-purple-400">
                  <GithubIcon className="w-6 h-6" />
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">GitHub Profile</span>
                  <span className="text-[11px] text-slate-400 font-mono truncate block">
                    virajpatait4-sudo
                  </span>
                </div>
              </a>
            </div>

            {/* Location & University Card */}
            <div className="p-5 rounded-2xl bg-dark-900/80 border border-white/[0.08] flex items-center space-x-3.5">
              <div className="p-3 rounded-xl bg-dark-850 border border-white/[0.06] text-emerald-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-xs space-y-0.5">
                <span className="text-slate-400 font-mono uppercase tracking-wider block text-[10px]">
                  Campus Base & Relocation
                </span>
                <span className="font-bold text-white block">
                  Vellore Institute of Technology (VIT), Vellore
                </span>
                <span className="text-slate-400 block text-[11px]">
                  Open to remote roles & on-site internship relocation
                </span>
              </div>
            </div>

            {/* Resume Download Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-dark-900 via-dark-850 to-dark-900 border border-electric-purple/30 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white flex items-center space-x-1.5">
                  <FileDown className="w-4 h-4 text-electric-cyan" />
                  <span>Resume Document</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Verified PDF
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Official single-source resume containing full educational, technical, and project details.
              </p>
              <a
                href={personalInfo.resumeDownloadUrl}
                download={personalInfo.resumeFileName}
                onClick={handleDownload}
                className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-electric-purple to-electric-blue hover:from-electric-violet hover:to-electric-indigo text-white text-xs font-semibold shadow-md transition-all"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Working Contact & Message Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-dark-900/80 border border-white/[0.08] shadow-2xl backdrop-blur-sm space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4 text-electric-cyan" />
                    <span>Send a Direct Message</span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    Dispatches directly to <span className="font-mono text-slate-300">{personalInfo.email}</span>
                  </p>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Active Inbox</span>
                </span>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-dark-950/80 border border-emerald-500/30 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-white">Opening Email Client...</h4>
                    <p className="text-xs text-slate-300 max-w-md mx-auto">
                      Your message has been pre-formatted for <strong className="text-white">{personalInfo.email}</strong>. If your email application didn't open automatically, you can send directly to the address above.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 rounded-xl bg-dark-850 hover:bg-dark-800 text-slate-300 text-xs font-semibold border border-white/[0.08] transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 block">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-950/80 border border-white/[0.08] focus:border-electric-purple focus:outline-none text-white text-xs placeholder:text-slate-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 block">
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. s.jenkins@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-950/80 border border-white/[0.08] focus:border-electric-purple focus:outline-none text-white text-xs placeholder:text-slate-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Data Science Internship Opportunity – Summer 2025"
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950/80 border border-white/[0.08] focus:border-electric-purple focus:outline-none text-white text-xs placeholder:text-slate-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share project details, job role, or collaboration request..."
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950/80 border border-white/[0.08] focus:border-electric-purple focus:outline-none text-white text-xs placeholder:text-slate-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-xl bg-gradient-to-r from-electric-purple via-electric-indigo to-electric-blue hover:from-electric-violet hover:to-electric-indigo text-white text-sm font-semibold shadow-lg shadow-electric-purple/25 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Viraj</span>
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
