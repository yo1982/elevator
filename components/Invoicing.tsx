
import React from 'react';
import Table from './common/Table';
import { Invoice } from '../types';

const mockInvoices: Invoice[] = [
  { id: 'INV-001', customerName: 'City Tower', contractId: 'CTR-001', amount: 2500.00, issueDate: '2024-07-01', dueDate: '2024-07-31', status: 'Paid' },
  { id: 'INV-002', customerName: 'Grand Hotel', contractId: 'CTR-002', amount: 1250.00, issueDate: '2024-07-15', dueDate: '2024-08-15', status: 'Unpaid' },
  { id: 'INV-003', customerName: 'Tech Park One', contractId: 'CTR-003', amount: 750.00, issueDate: '2024-06-01', dueDate: '2024-07-01', status: 'Overdue' },
  { id: 'INV-004', customerName: 'City Tower', contractId: 'CTR-001', amount: 2500.00, issueDate: '2024-06-01', dueDate: '2024-06-30', status: 'Paid' },
  { id: 'INV-005', customerName: 'Plaza Corp', contractId: 'CTR-004', amount: 3000.00, issueDate: '2023-10-01', dueDate: '2023-10-31', status: 'Paid' },
];

const StatusBadge: React.FC<{ status: Invoice['status'] }> = ({ status }) => {
    const colorMap = {
      'Paid': 'bg-green-100 text-green-800',
      'Unpaid': 'bg-yellow-100 text-yellow-800',
      'Overdue': 'bg-red-100 text-red-800',
    };
    return <span className={`px-2 py-1 text-xs font-medium rounded-full ${colorMap[status]}`}>{status}</span>;
  };


const Invoicing: React.FC = () => {
  const columns = ['Invoice ID', 'Customer Name', 'Amount', 'Issue Date', 'Due Date', 'Status'];
  const data = mockInvoices.map(invoice => [
    invoice.id,
    invoice.customerName,
    `$${invoice.amount.toFixed(2)}`,
    invoice.issueDate,
    invoice.dueDate,
    <StatusBadge status={invoice.status} key={invoice.id} />,
  ]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
       <h3 className="text-xl font-semibold mb-4 text-brand-gray-700">Invoices</h3>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default Invoicing;
