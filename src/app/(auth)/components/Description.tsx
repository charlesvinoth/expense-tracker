interface DescriptionProps {
  children: React.ReactNode
}

const Description: React.FC<DescriptionProps> = ({ children }) => {
  return <p className='mb-10 text-gray-500'>{children}</p>
}

export default Description
