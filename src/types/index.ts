export interface Item {
  id: string
  createdAt: string
  createdBy: string
  updatedAt: string
  updatedBy: string
}

export type TransactionType =
  | 'Expense'
  | 'Income'
  | 'Saving'
  | 'Debt'
  | 'Lending'

export interface Transaction extends Item {
  amount: number
  type: TransactionType
  category: string
  description?: string
  paymentMethod: 'Cash' | 'Card' | 'UPI' | 'Online'
  recurring: boolean
  recurringFrequency?: 'Daily' | 'Weekly' | 'Monthly' | 'Yearly'
  recurringStartDate?: string
  recurringEndDate?: string
  familyMember: string
}
