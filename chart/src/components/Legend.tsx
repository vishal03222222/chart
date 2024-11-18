import React from 'react';

type LegendItemProps = {
  color: string;
  label: string;
};

const LegendItem = ({ color, label }: LegendItemProps) => (
  <div className="flex items-center gap-2">
    <svg width="12" height="12" viewBox="0 0 12 12">
      <path
        d="M6 2L10 8H2L6 2Z"
        fill={color}
        transform="rotate(0, 6, 6)"
      />
    </svg>
    <span className="text-sm text-gray-300">{label}</span>
  </div>
);

export const Legend = () => (
  <div className="flex gap-6 justify-center mt-4">
    <LegendItem color="#3b82f6" label="Min PIP" />
    <LegendItem color="#a855f7" label="Max HZ" />
    <LegendItem color="#ffffff" label="Wells" />
  </div>
);