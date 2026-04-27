export enum UserRole {
  SYSTEM_ADMIN = 'SYSTEM_ADMIN',
  COMPANY_ADMIN = 'COMPANY_ADMIN',
  MEMBER = 'MEMBER'
}

export enum TaskStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  OVERDUE = 'OVERDUE'
}

export interface User {
  id: string
  username: string
  email: string
  role: UserRole
  companyId?: string
  points: number
}

export interface Company {
  id: string
  name: string
  adminId: string
  memberCount: number
  createdAt: Date
}

export interface Task {
  id: string
  title: string
  description: string
  points: number
  penalty: number
  assignedTo: string
  dueDate: Date
  status: TaskStatus
  companyId: string
}

export interface Reward {
  id: string
  title: string
  description: string
  pointsCost: number
  companyId: string
}

export interface Penalty {
  id: string
  reason: string
  points: number
  appliedTo: string
  companyId: string
  createdAt: Date
}

export interface Transaction {
  id: string
  userId: string
  points: number
  type: 'EARN' | 'SPEND' | 'PENALTY'
  description: string
  createdAt: Date
}

export interface Metrics {
  totalCompanies: number
  totalUsers: number
  totalTasksCompleted: number
  totalPointsDistributed: number
}
