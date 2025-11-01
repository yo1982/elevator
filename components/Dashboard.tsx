
import React from 'react';
import Card from './common/Card';
import { MaintenanceIcon, InvoiceIcon, EmployeeIcon, StoreIcon } from './icons/Icons';

const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          title="Pending Maintenance"
          value="12"
          icon={<MaintenanceIcon className="h-8 w-8 text-white" />}
          color="bg-yellow-500"
        />
        <Card
          title="Overdue Invoices"
          value="5"
          icon={<InvoiceIcon className="h-8 w-8 text-white" />}
          color="bg-red-500"
        />
        <Card
          title="Employees Clocked In"
          value="8"
          icon={<EmployeeIcon className="h-8 w-8 text-white" />}
          color="bg-green-500"
        />
        <Card
          title="Low Stock Parts"
          value="3"
          icon={<StoreIcon className="h-8 w-8 text-white" />}
          color="bg-indigo-500"
        />
      </div>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-brand-gray-700">Recent Activity</h3>
            <ul>
                <li className="flex items-center justify-between py-3 border-b border-brand-gray-200">
                    <div>
                        <p className="font-medium text-brand-gray-800">Maintenance completed for 'City Tower'</p>
                        <p className="text-sm text-brand-gray-500">Technician: John Doe</p>
                    </div>
                    <span className="text-sm text-brand-gray-400">2 hours ago</span>
                </li>
                 <li className="flex items-center justify-between py-3 border-b border-brand-gray-200">
                    <div>
                        <p className="font-medium text-brand-gray-800">Invoice #INV-007 sent to 'Plaza Corp'</p>
                        <p className="text-sm text-brand-gray-500">Amount: $1,250.00</p>
                    </div>
                    <span className="text-sm text-brand-gray-400">5 hours ago</span>
                </li>
                <li className="flex items-center justify-between py-3">
                    <div>
                        <p className="font-medium text-brand-gray-800">New customer 'Riverfront Apartments' added</p>
                        <p className="text-sm text-brand-gray-500">Contract: Premium</p>
                    </div>
                    <span className="text-sm text-brand-gray-400">1 day ago</span>
                </li>
            </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
             <h3 className="text-xl font-semibold mb-4 text-brand-gray-700">Upcoming Contracts Renewal</h3>
             <ul>
                <li className="py-2">
                    <p className="font-medium text-brand-gray-800">Grand Hotel</p>
                    <p className="text-sm text-brand-gray-500">Expires in 5 days</p>
                </li>
                <li className="py-2">
                    <p className="font-medium text-brand-gray-800">Tech Park One</p>
                    <p className="text-sm text-brand-gray-500">Expires in 12 days</p>
                </li>
                <li className="py-2">
                    <p className="font-medium text-brand-gray-800">Metro Lofts</p>
                    <p className="text-sm text-brand-gray-500">Expires in 25 days</p>
                </li>
             </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
