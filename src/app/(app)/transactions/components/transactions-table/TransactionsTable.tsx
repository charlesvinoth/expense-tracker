import { Table, Tbody, Td, Th, Thead, Tr } from '@/components/base'
import Amount from '@/components/common/Amount'
import { Transaction } from '@/types'
import TransactionTypeChip from '../TransactionTypeChip'
import QuickActions from './QuickActions'

const transactions: Transaction[] = [
  {
    id: '2d0ecf7a-2a59-4a96-9285-b36d8e4c8a25',
    createdAt: '2024-11-01T08:33:45',
    createdBy: 'Charles Vinoth',
    updatedAt: '2024-11-01T08:33:45',
    updatedBy: 'Charles Vinoth',
    amount: 915.34,
    type: 'Expense',
    category: 'Utilities',
    description: 'Electricity bill.',
    paymentMethod: 'UPI',
    recurring: false,
    familyMember: 'Common',
  },
  {
    id: 'fd39c348-b55d-491b-987b-e351647c90e3',
    createdAt: '2024-11-01T14:17:53',
    createdBy: 'Charles Vinoth',
    updatedAt: '2024-11-01T14:17:53',
    updatedBy: 'Charles Vinoth',
    amount: 85456.5,
    type: 'Income',
    category: 'Salary',
    description: 'Monthly salary',
    paymentMethod: 'Online',
    recurring: false,
    familyMember: 'Charles Vinoth',
  },
  {
    id: '99da334c-93df-438c-8e3c-98701b18da33',
    createdAt: '2024-11-04T09:23:12',
    createdBy: 'Charles Vinoth',
    updatedAt: '2024-11-04T09:23:12',
    updatedBy: 'Charles Vinoth',
    amount: 1182.21,
    type: 'Expense',
    category: 'Healthcare',
    description: 'Purchase of prescription medicine.',
    paymentMethod: 'Cash',
    recurring: false,
    familyMember: 'Leslie Prabakar',
  },
  {
    id: 'bb6cbfb6-bb48-4fa7-9937-8467bc5cfc54',
    createdAt: '2024-11-07T12:45:33',
    createdBy: 'Charles Vinoth',
    updatedAt: '2024-11-07T12:45:33',
    updatedBy: 'Charles Vinoth',
    amount: 1000,
    type: 'Saving',
    category: 'RD',
    description: '',
    paymentMethod: 'UPI',
    recurring: true,
    recurringFrequency: 'Yearly',
    recurringStartDate: '2024-01-01',
    recurringEndDate: '2026-01-01',
    familyMember: 'Common',
  },
  {
    id: 'abdf77b1-3c68-4731-b703-e25b6caba877',
    createdAt: '2024-11-11T17:21:43',
    createdBy: 'Charles Vinoth',
    updatedAt: '2024-11-11T17:21:43',
    updatedBy: 'Charles Vinoth',
    amount: 528.99,
    type: 'Expense',
    category: 'Groceries',
    description: '',
    paymentMethod: 'UPI',
    recurring: false,
    familyMember: 'Common',
  },
  {
    id: '1f7f8b72-5b59-44da-ae19-77df928b8f9a',
    createdAt: '2024-11-14T10:12:00',
    createdBy: 'Charles Vinoth',
    updatedAt: '2024-11-14T10:12:00',
    updatedBy: 'Charles Vinoth',
    amount: 2500,
    type: 'Lending',
    category: 'Other',
    description: 'Loaned to a family member.',
    paymentMethod: 'UPI',
    recurring: false,
    familyMember: 'Edwin Vinith',
  },
  {
    id: '27649e6c-7047-465e-8327-0e3e2cf23e23',
    createdAt: '2024-11-15T08:45:10',
    createdBy: 'Charles Vinoth',
    updatedAt: '2024-11-15T08:45:10',
    updatedBy: 'Charles Vinoth',
    amount: 12000,
    type: 'Income',
    category: 'Freelancing',
    description: 'Payment for website development project.',
    paymentMethod: 'Online',
    recurring: false,
    familyMember: 'Charles Vinoth',
  },
  {
    id: '4c7d851e-0f8a-438e-80c6-8428c726013f',
    createdAt: '2024-11-16T15:30:22',
    createdBy: 'Charles Vinoth',
    updatedAt: '2024-11-16T15:30:22',
    updatedBy: 'Charles Vinoth',
    amount: 75.0,
    type: 'Expense',
    category: 'Entertainment',
    description: 'Movie night tickets.',
    paymentMethod: 'UPI',
    recurring: false,
    familyMember: 'Common',
  },
  {
    id: '90f80f0f-e2f6-4f9b-8856-2a4b282a6907',
    createdAt: '2024-11-17T18:00:30',
    createdBy: 'Charles Vinoth',
    updatedAt: '2024-11-17T18:00:30',
    updatedBy: 'Charles Vinoth',
    amount: 10000.0,
    type: 'Saving',
    category: 'PPF',
    description: 'Savings contribution.',
    paymentMethod: 'Card',
    recurring: false,
    familyMember: 'Common',
  },
  {
    id: '2a9fd8e7-4b47-4db8-a536-21261e1f7f87',
    createdAt: '2024-11-20T11:11:11',
    createdBy: 'Charles Vinoth',
    updatedAt: '2024-11-20T11:11:11',
    updatedBy: 'Charles Vinoth',
    amount: 4000,
    type: 'Expense',
    category: 'Groceries',
    description: 'Monthly grocery shopping.',
    paymentMethod: 'Card',
    recurring: false,
    familyMember: 'Charles Vinoth',
  },
]

const TransactionsTable = () => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>#</Th>
          <Th>Type</Th>
          <Th className='text-right'>Amount</Th>
          <Th>Category</Th>
          <Th>Payment Method</Th>
          <Th>Family Member</Th>
          <Th>Date</Th>
          <Th className='w-20' />
        </Tr>
      </Thead>

      <Tbody>
        {transactions.map((transaction, index) => (
          <Tr key={index}>
            <Td>{index + 1}</Td>

            <Td>
              <TransactionTypeChip type={transaction.type} />
            </Td>

            <Td className='text-right font-medium text-gray-900 dark:text-gray-50'>
              {<Amount value={transaction.amount} />}
            </Td>

            <Td>{transaction.category}</Td>
            <Td>{transaction.paymentMethod}</Td>
            <Td>{transaction.familyMember}</Td>
            <Td>21 Nov 2024</Td>

            <Td>
              <QuickActions />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default TransactionsTable
