// ** Navigation sections imports
import apps from './apps'
import pages from './pages'
import others from './others'
import dashboards from './dashboards'

// ** Merge & Export
export default [...dashboards, ...apps, ...pages, ...others]
