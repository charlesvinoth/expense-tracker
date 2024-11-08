import MenuItem from './MenuItem'

const Menu = () => {
  const menus = [
    {
      icon: 'icon-[material-symbols--dashboard-outline-rounded]',
      activeIcon: 'icon-[material-symbols--dashboard-rounded]',
      label: 'Dashboard',
      route: '/',
    },
    {
      icon: 'icon-[material-symbols--receipt-outline-rounded]',
      activeIcon: 'icon-[material-symbols--receipt-rounded]',
      label: 'Transactions',
      route: '/transactions',
    },
    {
      icon: 'icon-[material-symbols--savings-outline-rounded]',
      activeIcon: 'icon-[material-symbols--savings-rounded]',
      label: 'Savings',
      route: '/savings',
    },
    {
      icon: 'icon-[material-symbols--payments-outline-rounded]',
      activeIcon: 'icon-[material-symbols--payments-rounded]',
      label: 'Debts',
      route: '/debts',
    },
    {
      icon: 'icon-[material-symbols--money-bag-outline-rounded]',
      activeIcon: 'icon-[material-symbols--money-bag-rounded]',
      label: 'Lendings',
      route: '/lendings',
    },
    {
      icon: 'icon-[material-symbols--calculate-outline-rounded]',
      activeIcon: 'icon-[material-symbols--calculate-rounded]',
      label: 'Budgets',
      route: '/budgets',
    },
  ]

  return (
    <ul className='h-full space-y-3 px-3.5'>
      {menus.map((menu) => (
        <MenuItem
          key={menu.label}
          icon={menu.icon}
          activeIcon={menu.activeIcon}
          label={menu.label}
          route={menu.route}
        />
      ))}
    </ul>
  )
}

export default Menu
