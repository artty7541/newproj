import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import Overview from 'src/pages/Overview.vue'
import UserProfile from 'src/pages/UserProfile.vue'
import TableList from 'src/pages/TableList.vue'
import Typography from 'src/pages/Typography.vue'
import Icons from 'src/pages/Icons.vue'
import Maps from 'src/pages/Maps.vue'
import Notifications from 'src/pages/Notifications.vue'
import Upgrade from 'src/pages/Upgrade.vue'
import Edit from '../pages/UserProfile/form-edit.vue'
import Creapp from '../pages/UserProfile/form-create.vue'
import Editadd from '../pages/UserProfile/editadmin.vue'
import Apppro from '../pages/UserProfile/Addproduct.vue'
import Info from '../pages/UserProfile/Info.vue'
const routes = [
  {
    path: '/',
    component: DashboardLayout,
   
  },
    
  {
    path: '/admin',
    component: DashboardLayout,
    
    children: [
      {
        path: 'icon/Info',
        name: 'Info',
        component: Info
      },
      
      {
        path: 'maps/Addproduct',
        name: 'Apppro',
        component: Apppro
      },
      {
        path: 'typography/editadmin',
        name: 'Editadd',
        component: Editadd
      },
      {
      path: 'typography/form-create',
      name: 'Creapp',
      component: Creapp
    },

      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'table-list',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps,
      },
      {
        path: 'maps/form-edit',
        name: 'Maps',
        component: Edit,
         
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
    
      {
        path: 'upgrade',
        name: 'Upgrade to PRO',
        component: Upgrade
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
