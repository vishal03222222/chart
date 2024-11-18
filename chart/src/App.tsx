import React from 'react';
import { Search, MoreVertical } from 'lucide-react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Label, ReferenceLine } from 'recharts';
import { Legend } from './components/Legend';

const generateData = () => {
  const data = [];
  for (let i = 0; i < 150; i++) {
    data.push({
      frequency: 30 + Math.random() * 58,
      pip: Math.random() * 5000,
      type: Math.random() > 0.5 ? 'Min PIP' : Math.random() > 0.5 ? 'Max HZ' : 'Wells'
    });
  }
  return data;
};

const data = generateData();

const CustomDot = (props: any) => {
  const { cx, cy, fill } = props;
  return (
    <path
      d="M0,-5 L5,5 L-5,5 Z"
      transform={`translate(${cx},${cy})`}
      fill={fill}
      className="custom-dot"
    />
  );
};

function App() {
  return (
    <div className="min-h-screen bg-[#1a2634] text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Recommendations</h1>
          <div className="flex gap-4">
            <button className="text-blue-400 border-b-2 border-blue-400 pb-1">
              Optimization opportunities
            </button>
            <button className="text-gray-400">PwrFrtz</button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search"
              className="bg-[#0f1720] border border-gray-700 rounded-lg pl-10 pr-4 py-2 w-64 focus:outline-none focus:border-blue-400"
            />
          </div>
          <button className="text-gray-400 hover:text-white">
            <MoreVertical size={24} />
          </button>
        </div>
      </div>
      
      <div className="w-full h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{ top: 20, right: 20, bottom: 50, left: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#2a3744" />
            <XAxis
              type="number"
              dataKey="frequency"
              name="Frequency"
              unit="Hz"
              domain={[30, 88]}
              tickCount={15}
              stroke="#ff4444"
              tick={{ fill: '#9ca3af' }}
            >
              <Label
                value="Frequency (Hz)"
                position="bottom"
                offset={20}
                style={{ fill: '#9ca3af' }}
              />
            </XAxis>
            <YAxis
              type="number"
              dataKey="pip"
              name="PIP"
              domain={[0, 6000]}
              tickCount={7}
              stroke="#22c55e"
              tick={{ fill: '#9ca3af' }}
            />
            <ReferenceLine 
              x={73} 
              stroke="#22c55e" 
              strokeWidth={2}
              label={{ 
                value: "73 Hz",
                position: "top",
                fill: "#22c55e"
              }}
            />
            <ReferenceLine 
              y={1000} 
              stroke="#ff4444" 
              strokeWidth={2}
              label={{ 
                value: "1000 PIP",
                position: "right",
                fill: "#ff4444"
              }}
            />
            <Scatter
              name="Min PIP"
              data={data.filter(d => d.type === 'Min PIP')}
              fill="#3b82f6"
              shape={<CustomDot />}
            />
            <Scatter
              name="Max HZ"
              data={data.filter(d => d.type === 'Max HZ')}
              fill="#a855f7"
              shape={<CustomDot />}
            />
            <Scatter
              name="Wells"
              data={data.filter(d => d.type === 'Wells')}
              fill="#ffffff"
              shape={<CustomDot />}
            />
          </ScatterChart>
        </ResponsiveContainer>
        <Legend />
      </div>
    </div>
  );
}

export default App;