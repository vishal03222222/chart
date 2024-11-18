import React from 'react';
import { Search, MoreVertical } from 'lucide-react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

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

function App() {
  const data = generateData();

  return (
    <div className="min-h-screen bg-[#1a2634] text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-medium mb-2">Recommendations</h1>
          <div className="flex gap-4">
            <button className="text-blue-400 border-b-2 border-blue-400 pb-1">
              Optimization opportunities
            </button>
            <button className="text-gray-400">PwrFrtz</button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="bg-[#0f1720] border border-gray-700 rounded-md pl-10 pr-4 py-2 w-64 text-sm focus:outline-none focus:border-blue-400"
            />
          </div>
          <button>
            <MoreVertical className="text-gray-400" />
          </button>
        </div>
      </div>

      <div className="w-full h-[600px]">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#2a3744" />
            <XAxis
              type="number"
              dataKey="frequency"
              name="Frequency"
              unit="Hz"
              domain={[30, 88]}
              tickCount={15}
              stroke="#4b5563"
            />
            <YAxis
              type="number"
              dataKey="pip"
              name="PIP"
              domain={[0, 6000]}
              tickCount={7}
              stroke="#4b5563"
            />
            <Scatter
              data={data.filter(d => d.type === 'Min PIP')}
              fill="#3b82f6"
              shape="triangle"
            />
            <Scatter
              data={data.filter(d => d.type === 'Max HZ')}
              fill="#60a5fa"
              shape="triangle"
            />
            <Scatter
              data={data.filter(d => d.type === 'Wells')}
              fill="#ffffff"
              shape="triangle"
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default App;