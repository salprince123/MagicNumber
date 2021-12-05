// ** Routes Imports
import PagesRoutes from './Pages'
import DashboardRoutes from './Dashboards'

// ** Document title
const TemplateTitle = '%s - Web Name'

// ** Default Route
const DefaultRoute = '/home'

// ** Merge Routes
const Routes = [
  ...DashboardRoutes,
  ...PagesRoutes
]

export { DefaultRoute, TemplateTitle, Routes }
