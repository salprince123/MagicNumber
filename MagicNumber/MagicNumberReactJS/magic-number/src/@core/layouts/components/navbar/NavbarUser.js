// ** Dropdowns Imports
import UserDropdown from './UserDropdown'
import NavbarSearch from './NavbarSearch'
import NotificationDropdown from './NotificationDropdown'
import { Link } from 'react-router-dom'

// ** Third Party Components
import { Sun, Moon } from 'react-feather'
import { NavItem, NavLink, Button } from 'reactstrap'

const NavbarUser = props => {
  // ** Props
  const { skin, setSkin } = props

  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if (skin === 'dark') {
      return <Sun className='ficon' onClick={() => setSkin('light')} />
    } else {
      return <Moon className='ficon' onClick={() => setSkin('dark')} />
    }
  }

  return (
    <ul className='nav navbar-nav align-items-center ml-auto'>
      <NavItem className='d-none d-lg-block'>
        <NavLink className='nav-link-style'>
          <ThemeToggler />
        </NavLink>
      </NavItem>
      <NavbarSearch />
      <NotificationDropdown />
      <div className="px-1" />
      <Button.Ripple color='primary' className='mr-1' tag={Link} to='/find-number'>
        Find your number
      </Button.Ripple>
      <div className="px-0.5" />
      <Button.Ripple color='primary' className='mr-1' tag={Link} to='/pages/article/create'>
        Write Article
      </Button.Ripple>
      <UserDropdown />
    </ul>
  )
}
export default NavbarUser
