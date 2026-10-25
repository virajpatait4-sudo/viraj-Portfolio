import React from 'react';
import { 
  BarChart, 
  Clock, 
  ShieldAlert
} from 'lucide-react';

interface PreviewProps {
  type: 'ecommerce-bi' | 'road-accident' | 'food-delivery';
}

export const ProjectPreview: React.FC<PreviewProps> = ({ type }) => {
  switch (type) {
    case 'ecommerce-bi':
      return (
        <div className="w-full h-44 sm:h-48 bg-dark-950 rounded-xl border border-white/[0.08] p-4 flex flex-col justify-between overflow-hidden relative group/preview">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-xs">
            <span className="font-mono text-purple-400 font-medium">Power BI • Star Schema</span>
            <span className="text-[11px] text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded">MySQL Backend</span>
          </div>

          <div className="grid grid-cols-3 gap-2 my-1">
            <div className="bg-dark-900/90 p-2 rounded-lg border border-white/[0.05]">
              <span className="text-[10px] text-slate-400 block">Sales Analysis</span>
              <span className="text-sm font-semibold text-white font-mono">Gross KPIs</span>
            </div>
            <div className="bg-dark-900/90 p-2 rounded-lg border border-white/[0.05]">
              <span className="text-[10px] text-slate-400 block">Retention</span>
              <span className="text-sm font-semibold text-cyan-400 font-mono">Cohort Trends</span>
            </div>
            <div className="bg-dark-900/90 p-2 rounded-lg border border-white/[0.05]">
              <span className="text-[10px] text-slate-400 block">Inventory</span>
              <span className="text-sm font-semibold text-purple-400 font-mono">Stock Velocity</span>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>Drill-through Filtering & Visualizations</span>
              <span className="font-mono text-emerald-400">DAX Measures</span>
            </div>
            <div className="h-6 flex items-end space-x-1">
              {[40, 65, 50, 85, 60, 75, 95, 70, 90, 80].map((val, i) => (
                <div key={i} className="flex-1 bg-white/[0.04] rounded-t h-full flex items-end">
                  <div 
                    className="w-full bg-gradient-to-t from-purple-600 to-cyan-500 rounded-t transition-all duration-300" 
                    style={{ height: `${val}%` }} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'road-accident':
      return (
        <div className="w-full h-44 sm:h-48 bg-dark-950 rounded-xl border border-white/[0.08] p-4 flex flex-col justify-between overflow-hidden relative group/preview">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-xs">
            <div className="flex items-center space-x-1.5 text-rose-400">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span className="font-mono font-medium">UK STATS19 Dataset</span>
            </div>
            <span className="text-[11px] text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded">Supervised Classification</span>
          </div>

          <div className="space-y-1.5 my-1">
            <div className="flex justify-between text-[10px] text-slate-400 font-mono">
              <span>Feature Importance Rank</span>
              <span className="text-slate-300">Random Forest</span>
            </div>
            {[
              { label: 'Speed Limit & Junction Details', width: '85%', color: 'from-rose-500 to-purple-500' },
              { label: 'Light Conditions & Weather', width: '70%', color: 'from-purple-500 to-indigo-500' },
              { label: 'Vehicle Types & Road Surface', width: '55%', color: 'from-blue-500 to-cyan-500' }
            ].map((bar, i) => (
              <div key={i} className="space-y-0.5">
                <div className="flex justify-between text-[10px] text-slate-300">
                  <span>{bar.label}</span>
                  <span className="font-mono text-slate-400 text-[9px]">{bar.width}</span>
                </div>
                <div className="w-full bg-dark-900 h-1.5 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${bar.color} rounded-full`} style={{ width: bar.width }} />
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono pt-1 border-t border-white/[0.04]">
            <span>Decision Trees & Random Forest</span>
            <span className="text-cyan-400">Accuracy, F1 & Recall</span>
          </div>
        </div>
      );

    case 'food-delivery':
    default:
      return (
        <div className="w-full h-44 sm:h-48 bg-dark-950 rounded-xl border border-white/[0.08] p-4 flex flex-col justify-between overflow-hidden relative group/preview">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-xs">
            <div className="flex items-center space-x-1.5 text-cyan-400">
              <Clock className="w-3.5 h-3.5" />
              <span className="font-mono font-medium">Regression ETA Model</span>
            </div>
            <span className="text-[11px] text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded">Scikit-learn</span>
          </div>

          <div className="grid grid-cols-3 gap-2 my-1">
            <div className="bg-dark-900/90 p-2 rounded-lg border border-white/[0.05]">
              <span className="text-[10px] text-slate-400 block">Baseline</span>
              <span className="text-xs font-semibold text-white font-mono">Linear Reg</span>
            </div>
            <div className="bg-dark-900/90 p-2 rounded-lg border border-white/[0.05]">
              <span className="text-[10px] text-slate-400 block">Non-Linear</span>
              <span className="text-xs font-semibold text-purple-400 font-mono">Random Forest</span>
            </div>
            <div className="bg-dark-900/90 p-2 rounded-lg border border-white/[0.05]">
              <span className="text-[10px] text-slate-400 block">Validation</span>
              <span className="text-xs font-semibold text-cyan-400 font-mono">MAE / RMSE</span>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>Factors: Distance, Weather & Road Traffic</span>
              <span className="text-cyan-400 font-mono">R² Evaluation</span>
            </div>
            <div className="w-full bg-dark-900 h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 h-full w-[76%] rounded-full" />
            </div>
          </div>
        </div>
      );
  }
};
