import mock from './mock'
import './tables/datatables'
import './autoComplete/autoComplete'
import './navbar/navbarSearch'
import './apps/email'
import './apps/chat'
import './apps/userList'
import './apps/eCommerce'
import './pages/account-settings'
import './pages/profile'
import './pages/blog-data'
import './jwt'

mock.onAny().passThrough()
