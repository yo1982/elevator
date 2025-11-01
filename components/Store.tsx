
import React from 'react';
import Table from './common/Table';
import { SparePart } from '../types';

const mockSpareParts: SparePart[] = [
  { id: 'SP001', name: 'Door Sensor', sku: 'DS-2024', quantity: 5, location: 'Shelf A1', supplier: 'Lift Parts Inc.', price: 150.00 },
  { id: 'SP002', name: 'Brake Coil', sku: 'BC-110V', quantity: 12, location: 'Shelf A2', supplier: 'Global Elevators', price: 450.50 },
  { id: 'SP003', name: 'Guide Shoe', sku: 'GS-T9', quantity: 25, location: 'Bin B3', supplier: 'Lift Parts Inc.', price: 75.25 },
  { id: 'SP004', name: 'Push Button - Up', sku: 'PB-UP-L', quantity: 2, location: 'Bin C1', supplier: 'Component Masters', price: 25.00 },
  { id: 'SP005', name: 'Control Board v2', sku: 'CB-V2-XYZ', quantity: 8, location: 'Shelf A3', supplier: 'Global Elevators', price: 1200.00 },
];

const QuantityBadge: React.FC<{ quantity: number }> = ({ quantity }) => {
    const badgeClass = quantity <= 5 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800';
    const text = quantity <= 5 ? 'Low Stock' : 'In Stock';
    return (
        <div className="flex items-center">
            <span className="mr-3 text-brand-gray-800 font-medium">{quantity}</span>
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${badgeClass}`}>{text}</span>
        </div>
    );
};

const Store: React.FC = () => {
  const columns = ['Part ID', 'Name', 'SKU', 'Quantity', 'Location', 'Supplier', 'Price'];
  const data = mockSpareParts.map(part => [
    part.id,
    part.name,
    part.sku,
    <QuantityBadge quantity={part.quantity} key={part.id} />,
    part.location,
    part.supplier,
    `$${part.price.toFixed(2)}`,
  ]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-brand-gray-700">Spare Parts Inventory</h3>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default Store;
