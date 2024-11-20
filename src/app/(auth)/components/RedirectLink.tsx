import Link from 'next/link'

interface RedirectLinkProps {
  label: string
  route: string
  routeLabel: string
}

const RedirectLink: React.FC<RedirectLinkProps> = ({
  label,
  route,
  routeLabel,
}) => {
  return (
    <p className='mt-8 flex items-center justify-center gap-1 text-center text-gray-500'>
      {label}
      <Link
        href={route}
        className='font-semibold text-primary-600 outline-none hover:underline focus-visible:underline'
      >
        {routeLabel}
      </Link>
    </p>
  )
}

export default RedirectLink
