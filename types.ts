
export type View = 'dashboard' | 'maintenance' | 'customers' | 'contracts' | 'invoicing' | 'employees' | 'store';

export interface Customer {
  id: string;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  memberSince: string;
}

export interface Contract {
  id: string;
  customerId: string;
  customerName: string;
  serviceLevel: 'Basic' | 'Standard' | 'Premium';
  startDate: string;
  endDate: string;
  status: 'Active' | 'Expired' | 'Pending';
}

export interface MaintenanceJob {
  id: string;
  elevatorId: string;
  customerName: string;
  address: string;
  scheduledDate: string;
  technician: string;
  status: 'Pending' | 'In Progress' | 'Completed' | 'Cancelled';
}

export interface Invoice {
  id: string;
  customerName: string;
  contractId: string;
  amount: number;
  issueDate: string;
  dueDate: string;
  status: 'Paid' | 'Unpaid' | 'Overdue';
}

export interface Employee {
  id: string;
  name: string;
  role: 'Technician' | 'Admin' | 'Manager';
  email: string;
  phone: string;
  status: 'Active' | 'Inactive';
}

export interface Attendance {
  id: string;
  employeeId: string;
  employeeName: string;
  date: string;
  clockIn: string;
  clockOut: string | null;
  status: 'Clocked In' | 'Clocked Out';
}

export interface SparePart {
  id: string;
  name: string;
  sku: string;
  quantity: number;
  location: string;
  supplier: string;
  price: number;
}
