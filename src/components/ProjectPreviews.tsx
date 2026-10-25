import React from 'react';
import { 
  BarChart, 
  TrendingUp, 
  Database, 
  Layers, 
  Clock, 
  MapPin, 
  ShieldAlert, 
  Code, 
  Sparkles,
  Zap,
  CheckCircle2
} from 'lucide-react';

interface PreviewProps {
  type: 'ecommerce-bi' | 'food-delivery' | 'road-accident' | 'portfolio';
}

export const ProjectPreview: React.FC<PreviewProps> = ({ type }) => {
  switch (type) {
    case 'ecommerce-bi':
      return (
        <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-dark-950 via-dark-900 to-[#121629] p-4 rounded-xl border border-white/[0.08] relative overflow-hidden flex flex-col justify-between group-hover:border-electric-purple/40 transition-all duration-300">
          {/* Top Bar simulating Power BI ribbon */}
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[10px] text-slate-400 font-mono">
            <div className="flex items-center space-x-1.5 text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span className="font-semibold">Power BI • Star Schema Model</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
              MySQL Data Source
            </span>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-3 gap-2 my-2">
            <div className="bg-dark-850/80 p-2 rounded-lg border border-white/[0.06]">
              <span className="block text-[9px] text-slate-400 uppercase tracking-wider">Gross Sales</span>
              <span className="text-sm font-bold text-white font-mono">$482.6K</span>
              <span className="text-[9px] text-emerald-400 block font-medium">+18.4% YoY</span>
            </div>
            <div className="bg-dark-850/80 p-2 rounded-lg border border-white/[0.06]">
              <span className="block text-[9px] text-slate-400 uppercase tracking-wider">Retention</span>
              <span className="text-sm font-bold text-cyan-400 font-mono">72.8%</span>
              <span className="text-[9px] text-cyan-300 block font-medium">Cohort Recur</span>
            </div>
            <div className="bg-dark-850/80 p-2 rounded-lg border border-white/[0.06]">
              <span className="block text-[9px] text-slate-400 uppercase tracking-wider">DAX Measures</span>
              <span className="text-sm font-bold text-electric-violet font-mono">24 KPIs</span>
              <span className="text-[9px] text-purple-300 block font-medium">Auto Refreshed</span>
            </div>
          </div>

          {/* Simulated Chart Bars */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>Sales by Category & Geography</span>
              <span className="font-mono text-emerald-400">Star Schema: Fact_Sales</span>
            </div>
            <div className="h-10 flex items-end space-x-1.5 pt-1">
              {[45, 70, 55, 90, 65, 80, 95, 85, 100, 75].map((height, i) => (
                <div key={i} className="flex-1 bg-white/[0.05] rounded-t overflow-hidden h-full flex items-end">
                  <div 
                    className="w-full bg-gradient-to-t from-electric-purple to-electric-cyan rounded-t transition-all duration-500 group-hover:brightness-110"
                    style={{ height: `${height}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Drill-through Pill */}
          <div className="flex items-center justify-between text-[9px] text-slate-400 pt-1 font-mono">
            <span className="text-slate-400">Drill-through: Region → Customer Segment</span>
            <span className="text-electric-cyan">Dynamic Filtering: Active</span>
          </div>
        </div>
      );

    case 'food-delivery':
      return (
        <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-dark-950 via-dark-900 to-[#10192e] p-4 rounded-xl border border-white/[0.08] relative overflow-hidden flex flex-col justify-between group-hover:border-electric-blue/40 transition-all duration-300">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[10px] text-slate-400 font-mono">
            <div className="flex items-center space-x-1.5 text-electric-cyan">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-semibold">Regression Pipeline • ETA Estimation</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
              Scikit-learn Regressor
            </span>
          </div>

          {/* Model Metrics */}
          <div className="grid grid-cols-3 gap-2 my-2">
            <div className="bg-dark-850/80 p-2 rounded-lg border border-white/[0.06]">
              <span className="block text-[9px] text-slate-400 uppercase tracking-wider">Model Type</span>
              <span className="text-xs font-bold text-white font-mono">Random Forest</span>
              <span className="text-[9px] text-slate-500 block">vs Linear Baseline</span>
            </div>
            <div className="bg-dark-850/80 p-2 rounded-lg border border-white/[0.06]">
              <span className="block text-[9px] text-slate-400 uppercase tracking-wider">Evaluation</span>
              <span className="text-xs font-bold text-cyan-400 font-mono">MAE & RMSE</span>
              <span className="text-[9px] text-emerald-400 block">Tuned Hyperparams</span>
            </div>
            <div className="bg-dark-850/80 p-2 rounded-lg border border-white/[0.06]">
              <span className="block text-[9px] text-slate-400 uppercase tracking-wider">R² Score</span>
              <span className="text-xs font-bold text-electric-violet font-mono">High Fit</span>
              <span className="text-[9px] text-purple-300 block">Non-linear traffic</span>
            </div>
          </div>

          {/* Visual Wave / Scatter Plot Simulation */}
          <div className="relative h-12 bg-dark-950/60 rounded-lg p-2 border border-white/[0.04] flex items-center justify-between">
            <div className="space-y-1 w-full">
              <div className="flex justify-between text-[9px] text-slate-400 font-mono">
                <span>Distance + Weather + Traffic Conditions</span>
                <span className="text-emerald-400">Predicted ETA: 24.5 min</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden flex">
                <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 h-full w-[78%] rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono pt-1">
            <span>Features: Distance, Traffic Density, Prep Time</span>
            <span className="text-electric-blue">Scaling: RobustScaler</span>
          </div>
        </div>
      );

    case 'road-accident':
      return (
        <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-dark-950 via-dark-900 to-[#181124] p-4 rounded-xl border border-white/[0.08] relative overflow-hidden flex flex-col justify-between group-hover:border-rose-500/40 transition-all duration-300">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[10px] text-slate-400 font-mono">
            <div className="flex items-center space-x-1.5 text-rose-400">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span className="font-semibold">UK STATS19 • Accident Severity</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20">
              Multi-Class Classifier
            </span>
          </div>

          {/* Feature Importance Simulation */}
          <div className="space-y-1.5 my-2">
            <div className="flex justify-between text-[9px] text-slate-400 font-mono">
              <span>Top Severity Feature Drivers</span>
              <span className="text-rose-400">Relative Weight</span>
            </div>
            {[
              { label: 'Speed Limit & Junction Type', pct: 85, color: 'from-rose-500 to-amber-500' },
              { label: 'Lighting & Weather Condition', pct: 68, color: 'from-purple-500 to-rose-500' },
              { label: 'Vehicle Type & Road Surface', pct: 54, color: 'from-blue-500 to-indigo-500' }
            ].map((item, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="flex justify-between text-[9px] text-slate-300">
                  <span>{item.label}</span>
                  <span className="font-mono text-slate-400">{item.pct}%</span>
                </div>
                <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${item.color} rounded-full`} style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Model Metrics */}
          <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono pt-1 border-t border-white/[0.06]">
            <span>Decision Tree & Random Forest</span>
            <span className="text-emerald-400 font-semibold">Metrics: F1, Recall, Precision</span>
          </div>
        </div>
      );

    case 'portfolio':
    default:
      return (
        <div className="w-full h-48 sm:h-56 bg-gradient-to-br from-dark-950 via-dark-900 to-[#0e1629] p-4 rounded-xl border border-white/[0.08] relative overflow-hidden flex flex-col justify-between group-hover:border-electric-cyan/40 transition-all duration-300">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[10px] text-slate-400 font-mono">
            <div className="flex items-center space-x-1.5 text-electric-cyan">
              <Code className="w-3.5 h-3.5" />
              <span className="font-semibold">React + TypeScript Architecture</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
              Vite 6 Fast Bundler
            </span>
          </div>

          {/* Tech Spec Cards */}
          <div className="grid grid-cols-3 gap-2 my-2">
            <div className="bg-dark-850/80 p-2 rounded-lg border border-white/[0.06] text-center">
              <span className="block text-[9px] text-slate-400 uppercase">Lighthouse</span>
              <span className="text-sm font-bold text-emerald-400 font-mono">100 / 100</span>
              <span className="text-[9px] text-slate-500">Fast SSR/SPA</span>
            </div>
            <div className="bg-dark-850/80 p-2 rounded-lg border border-white/[0.06] text-center">
              <span className="block text-[9px] text-slate-400 uppercase">Responsive</span>
              <span className="text-sm font-bold text-cyan-400 font-mono">Tailwind</span>
              <span className="text-[9px] text-slate-500">Fluid Grid</span>
            </div>
            <div className="bg-dark-850/80 p-2 rounded-lg border border-white/[0.06] text-center">
              <span className="block text-[9px] text-slate-400 uppercase">Animation</span>
              <span className="text-sm font-bold text-electric-violet font-mono">Canvas & CSS</span>
              <span className="text-[9px] text-slate-500">Subtle Glow</span>
            </div>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {['TypeScript Strict', 'Framer Motion', 'Zero Clutter', 'Resume PDF Hook'].map((tag, i) => (
              <span key={i} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono pt-1 border-t border-white/[0.06]">
            <span>Clean Component Modularity</span>
            <span className="text-emerald-400">Production Build Ready</span>
          </div>
        </div>
      );
  }
};
