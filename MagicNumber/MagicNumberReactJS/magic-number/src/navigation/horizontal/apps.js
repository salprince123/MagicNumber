import { Box, Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User } from 'react-feather'

export default [
  {
    id: 'apps',
    title: 'Apps',
    icon: <Box />,
    children: [
      {
        id: 'chat',
        title: 'Chat',
        icon: <MessageSquare />,
        navLink: '/apps/chat'
      },      
      {
        id: 'users',
        title: 'User',
        icon: <User />,
        children: [
          {
            id: 'list',
            title: 'List',
            icon: <Circle />,
            navLink: '/apps/user/list'
          },
          {
            id: 'view',
            title: 'View',
            icon: <Circle />,
            navLink: '/apps/user/view'
          },
          {
            id: 'edit',
            title: 'Edit',
            icon: <Circle />,
            navLink: '/apps/user/edit'
          }
        ]
      }
    ]
  }
]
