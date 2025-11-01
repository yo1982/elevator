
import React from 'react';
import { View } from '../types';
import { PlusIcon } from './icons/Icons';

interface HeaderProps {
  currentView: View;
}

const Header: React.FC<HeaderProps> = ({ currentView }) => {
    const title = currentView.charAt(0).toUpperCase() + currentView.slice(1);
  return (
    <header className="h-20 bg-white shadow-md flex items-center justify-between px-8">
      <h2 className="text-3xl font-bold text-brand-gray-800">{title}</h2>
      <button className="flex items-center justify-center bg-brand-blue hover:bg-brand-blue-light text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 shadow-sm">
        <PlusIcon className="h-5 w-5 mr-2" />
        Add New
      </button>
    </header>
  );
};

export default Header;
