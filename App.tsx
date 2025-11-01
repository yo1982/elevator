
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Maintenance from './components/Maintenance';
import Customers from './components/Customers';
import Contracts from './components/Contracts';
import Invoicing from './components/Invoicing';
import Employees from './components/Employees';
import Store from './components/Store';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'maintenance':
        return <Maintenance />;
      case 'customers':
        return <Customers />;
      case 'contracts':
        return <Contracts />;
      case 'invoicing':
        return <Invoicing />;
      case 'employees':
        return <Employees />;
      case 'store':
        return <Store />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-brand-gray-100 font-sans text-brand-gray-800">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header currentView={currentView} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-brand-gray-100 p-4 md:p-8">
          {renderView()}
        </main>
      </div>
    </div>
  );
};

export default App;
