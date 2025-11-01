
import React from 'react';

interface CardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

const Card: React.FC<CardProps> = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-brand-gray-500">{title}</p>
        <p className="text-3xl font-bold text-brand-gray-800">{value}</p>
      </div>
      <div className={`p-4 rounded-full ${color}`}>
        {icon}
      </div>
    </div>
  );
};

export default Card;
