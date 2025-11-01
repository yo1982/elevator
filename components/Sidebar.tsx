
import React from 'react';
import { View } from '../types';
import { DashboardIcon, MaintenanceIcon, CustomersIcon, ContractsIcon, InvoiceIcon, EmployeeIcon, StoreIcon } from './icons/Icons';

interface SidebarProps {
  currentView: View;
  setCurrentView: (view: View) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: DashboardIcon },
    { id: 'maintenance', label: 'Maintenance', icon: MaintenanceIcon },
    { id: 'customers', label: 'Customers', icon: CustomersIcon },
    { id: 'contracts', label: 'Contracts', icon: ContractsIcon },
    { id: 'invoicing', label: 'Invoicing', icon: InvoiceIcon },
    { id: 'employees', label: 'Employees', icon: EmployeeIcon },
    { id: 'store', label: 'Store', icon: StoreIcon },
  ] as const;

  return (
    <aside className="w-64 bg-brand-gray-900 text-brand-gray-100 flex flex-col">
      <div className="h-20 flex items-center justify-center bg-brand-gray-900 border-b border-brand-gray-800">
        <h1 className="text-2xl font-bold text-white tracking-wider">ELEVATE</h1>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            className={`w-full flex items-center px-4 py-3 text-left text-lg rounded-lg transition-colors duration-200 ${
              currentView === item.id
                ? 'bg-brand-blue text-white'
                : 'text-brand-gray-300 hover:bg-brand-gray-700 hover:text-white'
            }`}
          >
            <item.icon className="h-6 w-6 mr-4" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-brand-gray-800">
          <div className="flex items-center">
              <img src="https://picsum.photos/id/237/40/40" alt="User" className="h-10 w-10 rounded-full"/>
              <div className="ml-3">
                  <p className="text-sm font-medium text-white">Admin User</p>
                  <p className="text-xs text-brand-gray-400">admin@elevate.com</p>
              </div>
          </div>
      </div>
    </aside>
  );
};

export default Sidebar;
