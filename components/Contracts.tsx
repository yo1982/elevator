
import React from 'react';
import Table from './common/Table';
import { Contract } from '../types';

const mockContracts: Contract[] = [
  { id: 'CTR-001', customerId: 'C001', customerName: 'City Tower', serviceLevel: 'Premium', startDate: '2023-01-01', endDate: '2024-12-31', status: 'Active' },
  { id: 'CTR-002', customerId: 'C002', customerName: 'Grand Hotel', serviceLevel: 'Standard', startDate: '2022-08-15', endDate: '2024-08-14', status: 'Active' },
  { id: 'CTR-003', customerId: 'C003', customerName: 'Tech Park One', serviceLevel: 'Basic', startDate: '2023-06-01', endDate: '2024-05-31', status: 'Active' },
  { id: 'CTR-004', customerId: 'C004', customerName: 'Plaza Corp', serviceLevel: 'Premium', startDate: '2022-11-01', endDate: '2023-10-31', status: 'Expired' },
  { id: 'CTR-005', customerId: 'C005', customerName: 'Riverfront Apartments', serviceLevel: 'Standard', startDate: '2024-09-01', endDate: '2025-08-31', status: 'Pending' },
];

const StatusBadge: React.FC<{ status: Contract['status'] }> = ({ status }) => {
    const colorMap = {
      'Active': 'bg-green-100 text-green-800',
      'Expired': 'bg-red-100 text-red-800',
      'Pending': 'bg-yellow-100 text-yellow-800',
    };
    return <span className={`px-2 py-1 text-xs font-medium rounded-full ${colorMap[status]}`}>{status}</span>;
  };

const Contracts: React.FC = () => {
  const columns = ['Contract ID', 'Customer Name', 'Service Level', 'Start Date', 'End Date', 'Status'];
  const data = mockContracts.map(contract => [
    contract.id,
    contract.customerName,
    contract.serviceLevel,
    contract.startDate,
    contract.endDate,
    <StatusBadge status={contract.status} key={contract.id}/>,
  ]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-brand-gray-700">Service Contracts</h3>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default Contracts;
