import Chip from '@/components/common/Chip'
import { TransactionType } from '@/types'

interface TransactionTypeChipProps {
  type: TransactionType
}

const TransactionTypeChip: React.FC<TransactionTypeChipProps> = ({ type }) => {
  const getColor = () => {
    switch (type) {
      case 'Expense':
        return 'tertiary'
      case 'Debt':
        return 'tertiary'
      case 'Lending':
        return 'secondary'
      default:
        return 'primary'
    }
  }

  return <Chip label={type} color={getColor()} />
}

export default TransactionTypeChip
