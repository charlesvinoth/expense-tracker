'use client'

interface AmountProps {
  value: number
}

const Amount: React.FC<AmountProps> = ({ value }) => {
  const formattedAmount = () =>
    new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)

  return <>{formattedAmount()}</>
}

export default Amount
