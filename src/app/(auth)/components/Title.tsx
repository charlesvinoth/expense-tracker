interface TitleProps {
  children: React.ReactNode
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <h1 className='mb-2 text-2xl font-bold'>{children}</h1>
}

export default Title
