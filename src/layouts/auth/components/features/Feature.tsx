interface FeatureProps {
  title: string
  description: string
}

const Feature: React.FC<FeatureProps> = ({ title, description }) => {
  return (
    <div className='animate-fadeRightSlow text-center'>
      <h1 className='mb-2 mt-4 text-2xl font-bold'>{title}</h1>
      <p className='text-base text-gray-500'>{description}</p>
    </div>
  )
}

export default Feature
