
import React from 'react';
import Table from './common/Table';
import { Customer } from '../types';

const mockCustomers: Customer[] = [
  { id: 'C001', name: 'City Tower', contactPerson: 'Alice Johnson', email: 'alice@citytower.com', phone: '555-1234', address: '123 Main St, Metropolis', memberSince: '2020-01-15' },
  { id: 'C002', name: 'Grand Hotel', contactPerson: 'Bob Williams', email: 'bob@grandhotel.com', phone: '555-5678', address: '456 Oak Ave, Gotham', memberSince: '2019-03-22' },
  { id: 'C003', name: 'Tech Park One', contactPerson: 'Charlie Brown', email: 'charlie@techpark.com', phone: '555-8765', address: '789 Pine Rd, Star City', memberSince: '2021-06-10' },
  { id: 'C004', name: 'Plaza Corp', contactPerson: 'Diana Prince', email: 'diana@plazacorp.com', phone: '555-4321', address: '101 Maple Ln, Central City', memberSince: '2022-11-01' },
];

const Customers: React.FC = () => {
  const columns = ['Customer ID', 'Name', 'Contact Person', 'Email', 'Phone', 'Member Since'];
  const data = mockCustomers.map(customer => [
    customer.id,
    customer.name,
    customer.contactPerson,
    customer.email,
    customer.phone,
    customer.memberSince,
  ]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-brand-gray-700">Customer List</h3>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default Customers;
