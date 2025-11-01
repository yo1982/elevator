
import React from 'react';
import Table from './common/Table';
import { MaintenanceJob } from '../types';

const mockMaintenanceJobs: MaintenanceJob[] = [
  { id: 'M001', elevatorId: 'E101', customerName: 'City Tower', address: '123 Main St', scheduledDate: '2024-08-15', technician: 'John Doe', status: 'Completed' },
  { id: 'M002', elevatorId: 'E203', customerName: 'Grand Hotel', address: '456 Oak Ave', scheduledDate: '2024-08-18', technician: 'Jane Smith', status: 'Pending' },
  { id: 'M003', elevatorId: 'E102', customerName: 'City Tower', address: '123 Main St', scheduledDate: '2024-08-20', technician: 'John Doe', status: 'In Progress' },
  { id: 'M004', elevatorId: 'E401', customerName: 'Tech Park One', address: '789 Pine Rd', scheduledDate: '2024-08-22', technician: 'Peter Jones', status: 'Pending' },
  { id: 'M005', elevatorId: 'E501', customerName: 'Plaza Corp', address: '101 Maple Ln', scheduledDate: '2024-08-25', technician: 'Jane Smith', status: 'Cancelled' },
];

const StatusBadge: React.FC<{ status: MaintenanceJob['status'] }> = ({ status }) => {
  const colorMap = {
    'Completed': 'bg-green-100 text-green-800',
    'Pending': 'bg-yellow-100 text-yellow-800',
    'In Progress': 'bg-blue-100 text-blue-800',
    'Cancelled': 'bg-red-100 text-red-800',
  };
  return <span className={`px-2 py-1 text-xs font-medium rounded-full ${colorMap[status]}`}>{status}</span>;
};


const Maintenance: React.FC = () => {
  const columns = ['Job ID', 'Customer', 'Address', 'Scheduled Date', 'Technician', 'Status'];
  const data = mockMaintenanceJobs.map(job => [
    job.id,
    job.customerName,
    job.address,
    job.scheduledDate,
    job.technician,
    <StatusBadge status={job.status} key={job.id} />,
  ]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-brand-gray-700">All Maintenance Jobs</h3>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default Maintenance;
