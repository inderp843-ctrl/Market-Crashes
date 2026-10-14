import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell
} from 'recharts';

interface ComparisonDataPoint {
  name: string;
  shortName: string;
  decline: number; // positive number for magnitude or negative
  recoveryMonths: number;
  durationMonths: number;
}

interface ComparisonChartProps {
  data: ComparisonDataPoint[];
  metric: 'decline' | 'recovery' | 'both';
}

export const ComparisonChart: React.FC<ComparisonChartProps> = ({ data, metric }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
      <div className="pb-4 border-b border-slate-100 mb-4">
        <h4 className="font-serif-title font-bold text-slate-900 text-lg">
          {metric === 'decline'
            ? 'Peak-to-Trough Decline Comparison (%)'
            : metric === 'recovery'
            ? 'Months Required to Recover Previous High'
            : 'Magnitude of Decline vs. Recovery Duration'}
        </h4>
        <p className="text-xs text-slate-500 mt-1">
          {metric === 'decline'
            ? 'Verified percentage loss from highest cycle closing peak to lowest cycle closing trough.'
            : metric === 'recovery'
            ? 'Approximate calendar months until the index first closed at or above its previous all-time peak.'
            : 'Comparative historical metrics across selected events.'}
        </p>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 25 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis
              dataKey="shortName"
              stroke="#64748b"
              fontSize={11}
              interval={0}
              angle={-20}
              textAnchor="end"
            />
            <YAxis
              stroke="#64748b"
              fontSize={11}
              tickFormatter={(v) => (metric === 'decline' ? `${v}%` : `${v} mo`)}
            />
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  const item = payload[0].payload as ComparisonDataPoint;
                  return (
                    <div className="bg-slate-900 text-white text-xs p-3 rounded-lg shadow-xl border border-slate-700">
                      <p className="font-bold text-slate-200">{item.name}</p>
                      <div className="mt-2 space-y-1">
                        <p className="text-rose-400 font-mono-numbers">
                          Peak-to-Trough Decline: <span className="font-bold">-{Math.abs(item.decline)}%</span>
                        </p>
                        <p className="text-blue-400 font-mono-numbers">
                          Drop Duration: <span className="font-bold">{item.durationMonths} months</span>
                        </p>
                        <p className="text-emerald-400 font-mono-numbers">
                          Recovery Time: <span className="font-bold">{item.recoveryMonths} months</span>
                        </p>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            {metric === 'decline' ? (
              <Bar dataKey="decline" name="Decline (%)" radius={[4, 4, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={Math.abs(entry.decline) > 50 ? '#be123c' : '#f43f5e'}
                  />
                ))}
              </Bar>
            ) : metric === 'recovery' ? (
              <Bar dataKey="recoveryMonths" name="Recovery (Months)" fill="#3b82f6" radius={[4, 4, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-rec-${index}`}
                    fill={entry.recoveryMonths > 100 ? '#1e3a8a' : '#3b82f6'}
                  />
                ))}
              </Bar>
            ) : (
              <>
                <Legend verticalAlign="top" height={36} wrapperStyle={{ fontSize: '12px' }} />
                <Bar dataKey="decline" name="Decline (%)" fill="#e11d48" radius={[4, 4, 0, 0]} />
                <Bar dataKey="recoveryMonths" name="Recovery (Months)" fill="#0284c7" radius={[4, 4, 0, 0]} />
              </>
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
