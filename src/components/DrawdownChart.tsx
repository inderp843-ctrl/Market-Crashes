import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine
} from 'recharts';
import { ChartDataPoint } from '../types';

interface DrawdownChartProps {
  data: ChartDataPoint[];
  title?: string;
  subtitle?: string;
  baselineDescription?: string;
  currency?: string;
  unitLabel?: string;
}

export const DrawdownChart: React.FC<DrawdownChartProps> = ({
  data,
  title = 'Historical Index Trajectory & Drawdown',
  subtitle = 'Normalized index values (100 = Market Peak)',
  baselineDescription,
  currency = 'USD'
}) => {
  if (!data || data.length === 0) {
    return (
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center text-slate-500 text-sm">
        No chart trajectory data available for this historical episode.
      </div>
    );
  }

  // Find min point (trough)
  const minPoint = data.reduce(
    (min, p) => (p.value < min.value ? p : min),
    data[0]
  );

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
        <div>
          <h4 className="font-serif-title font-bold text-slate-900 text-base sm:text-lg">
            {title}
          </h4>
          <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            Trough Level: {minPoint.value}%
          </span>
        </div>
      </div>

      <div className="h-72 w-full pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="crashGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#e11d48" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#e11d48" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis
              dataKey="date"
              stroke="#64748b"
              fontSize={11}
              tickLine={false}
              axisLine={{ stroke: '#cbd5e1' }}
            />
            <YAxis
              stroke="#64748b"
              fontSize={11}
              tickLine={false}
              axisLine={{ stroke: '#cbd5e1' }}
              domain={[0, 'auto']}
              tickFormatter={(v) => `${v}`}
            />
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  const item = payload[0].payload as ChartDataPoint;
                  return (
                    <div className="bg-slate-900 text-white text-xs p-3 rounded-lg shadow-xl border border-slate-700">
                      <p className="font-semibold text-slate-300 font-mono">{label}</p>
                      <p className="text-rose-400 font-bold text-sm mt-1">
                        Indexed Value: {item.value}%
                      </p>
                      {item.actualValue && (
                        <p className="text-slate-200 text-xs">
                          Index Close: <span className="font-mono-numbers">{item.actualValue.toLocaleString()} {currency}</span>
                        </p>
                      )}
                      {item.label && (
                        <p className="text-amber-300 text-[11px] mt-1 italic border-t border-slate-700 pt-1">
                          {item.label}
                        </p>
                      )}
                    </div>
                  );
                }
                return null;
              }}
            />
            <ReferenceLine y={100} stroke="#94a3b8" strokeDasharray="3 3" label={{ value: 'Peak (100)', fill: '#64748b', fontSize: 10, position: 'right' }} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#e11d48"
              strokeWidth={2.5}
              fillOpacity={1}
              fill="url(#crashGradient)"
              activeDot={{ r: 6, fill: '#be123c', stroke: '#fff', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {baselineDescription && (
        <p className="text-[11px] text-slate-400 mt-3 pt-2 border-t border-slate-100 italic">
          * {baselineDescription}
        </p>
      )}
    </div>
  );
};
