
import React, { useState } from 'react';
import Table from './common/Table';
import { Employee, Attendance } from '../types';

const mockEmployees: Employee[] = [
  { id: 'E001', name: 'John Doe', role: 'Technician', email: 'john.d@elevate.com', phone: '555-1111', status: 'Active' },
  { id: 'E002', name: 'Jane Smith', role: 'Technician', email: 'jane.s@elevate.com', phone: '555-2222', status: 'Active' },
  { id: 'E003', name: 'Peter Jones', role: 'Manager', email: 'peter.j@elevate.com', phone: '555-3333', status: 'Active' },
  { id: 'E004', name: 'Mary Johnson', role: 'Admin', email: 'mary.j@elevate.com', phone: '555-4444', status: 'Inactive' },
];

const mockAttendance: Attendance[] = [
  { id: 'A001', employeeId: 'E001', employeeName: 'John Doe', date: '2024-08-12', clockIn: '08:02', clockOut: '17:05', status: 'Clocked Out' },
  { id: 'A002', employeeId: 'E002', employeeName: 'Jane Smith', date: '2024-08-12', clockIn: '08:30', clockOut: null, status: 'Clocked In' },
  { id: 'A003', employeeId: 'E003', employeeName: 'Peter Jones', date: '2024-08-12', clockIn: '09:00', clockOut: '17:30', status: 'Clocked Out' },
  { id: 'A004', employeeId: 'E001', employeeName: 'John Doe', date: '2024-08-11', clockIn: '07:58', clockOut: '16:55', status: 'Clocked Out' },
];

type ActiveTab = 'roster' | 'attendance';

const StatusBadge: React.FC<{ status: string; type: 'employee' | 'attendance' }> = ({ status, type }) => {
    const colorMapEmployee = {
      'Active': 'bg-green-100 text-green-800',
      'Inactive': 'bg-gray-100 text-gray-800',
    };
    const colorMapAttendance = {
        'Clocked In': 'bg-green-100 text-green-800',
        'Clocked Out': 'bg-gray-100 text-gray-800',
    }
    const colorMap = type === 'employee' ? colorMapEmployee : colorMapAttendance;
    return <span className={`px-2 py-1 text-xs font-medium rounded-full ${colorMap[status as keyof typeof colorMap]}`}>{status}</span>;
};


const Employees: React.FC = () => {
    const [activeTab, setActiveTab] = useState<ActiveTab>('roster');

    const employeeColumns = ['Employee ID', 'Name', 'Role', 'Email', 'Phone', 'Status'];
    const employeeData = mockEmployees.map(emp => [
        emp.id,
        emp.name,
        emp.role,
        emp.email,
        emp.phone,
        <StatusBadge status={emp.status} type="employee" key={emp.id} />,
    ]);

    const attendanceColumns = ['Employee Name', 'Date', 'Clock In', 'Clock Out', 'Status'];
    const attendanceData = mockAttendance.map(att => [
        att.employeeName,
        att.date,
        att.clockIn,
        att.clockOut || '-',
        <StatusBadge status={att.status} type="attendance" key={att.id} />,
    ]);

  return (
    <div className="space-y-6">
       <div className="flex border-b border-brand-gray-200">
           <button 
                onClick={() => setActiveTab('roster')} 
                className={`px-6 py-3 text-lg font-medium ${activeTab === 'roster' ? 'border-b-2 border-brand-blue text-brand-blue' : 'text-brand-gray-500'}`}
            >
                Employee Roster
            </button>
            <button 
                onClick={() => setActiveTab('attendance')}
                className={`px-6 py-3 text-lg font-medium ${activeTab === 'attendance' ? 'border-b-2 border-brand-blue text-brand-blue' : 'text-brand-gray-500'}`}
            >
                Attendance Log
            </button>
       </div>
       
        {activeTab === 'roster' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-brand-gray-700">All Employees</h3>
                <Table columns={employeeColumns} data={employeeData} />
            </div>
        )}

        {activeTab === 'attendance' && (
             <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-brand-gray-700">Daily Attendance</h3>
                <Table columns={attendanceColumns} data={attendanceData} />
            </div>
        )}
    </div>
  );
};

export default Employees;
