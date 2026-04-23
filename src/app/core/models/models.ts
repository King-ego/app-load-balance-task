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
  companyId: string
  points: number
}
