import MenuItem from './MenuItem'

const Menu = () => {
  const menus = [
    {
      icon: 'icon-[material-symbols--dashboard-outline-rounded]',
      label: 'Dashboard',
      route: '/',
    },
    {
      icon: 'icon-[material-symbols--article-outline-rounded]',
      label: 'Transactions',
      route: '/transactions',
    },
    {
      icon: 'icon-[material-symbols--savings-outline-rounded]',
      label: 'Savings',
      route: '/savings',
    },
    {
      icon: 'icon-[material-symbols--account-balance-outline-rounded]',
      label: 'Debts',
      route: '/debts',
    },
    {
      icon: 'icon-[material-symbols--currency-rupee-circle-outline-rounded]',
      label: 'Lendings',
      route: '/lendings',
    },
    {
      icon: 'icon-[material-symbols--calculate-outline-rounded]',
      label: 'Budgets',
      route: '/budgets',
    },
    {
      icon: 'icon-[material-symbols--target]',
      label: 'Goals',
      route: '/goals',
    },
    {
      icon: 'icon-[material-symbols--settings-outline-rounded]',
      label: 'Settings',
      route: '/settings',
    },
  ]

  return (
    <ul className='my-1 h-full space-y-3 px-3.5'>
      {menus.map((menu) => (
        <MenuItem
          key={menu.label}
          icon={menu.icon}
          label={menu.label}
          route={menu.route}
        />
      ))}
    </ul>
  )
}

export default Menu
