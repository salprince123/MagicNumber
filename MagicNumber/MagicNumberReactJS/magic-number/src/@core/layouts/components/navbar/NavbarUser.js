// ** Dropdowns Imports
import UserDropdown from './UserDropdown'
import NavbarSearch from './NavbarSearch'
import NotificationDropdown from './NotificationDropdown'
import { Link } from 'react-router-dom'

// ** Third Party Components
import { Sun, Moon } from 'react-feather'
import { NavItem, NavLink, Button } from 'reactstrap'
import { useState } from 'react'
import { isUserLoggedIn } from '@utils'

const NavbarUser = props => {
  // ** Props
  const { skin, setSkin } = props
  const [author, setAuthor]= useState(JSON.parse(localStorage.getItem('userData')))
  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if (skin === 'dark') {
      return <Sun className='ficon' onClick={() => setSkin('light')} />
    } else {
      return <Moon className='ficon' onClick={() => setSkin('dark')} />
    }
  }
  if (isUserLoggedIn() !== null) {
    return(
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
       Tra cứu nhân số học
      </Button.Ripple>
      <div className="px-0.5" />
      {author['username'] != "Guest" ? (
      <Button.Ripple color='primary' className='mr-1' tag={Link} to='/pages/article/create'>
        Viết bài
      </Button.Ripple>
      ):<></>}
      <UserDropdown />
    </ul>
    )
  }
  else {
    return(
<ul className='nav navbar-nav align-items-center ml-auto'>
      <NavItem className='d-none d-lg-block'>
        <NavLink className='nav-link-style'>
          <ThemeToggler />
        </NavLink>
      </NavItem>
      <NavbarSearch />
      <div className="px-1" />
      <Button.Ripple color='primary' className='mr-1' tag={Link} to='/find-number'>
        Tra cứu nhân số học
      </Button.Ripple>
      <div className="px-0.5" />
      <Button.Ripple color='primary' className='mr-1' tag={Link} to='/login'>
        Đăng nhập
      </Button.Ripple>
    </ul>
    )
  }
}
export default NavbarUser
