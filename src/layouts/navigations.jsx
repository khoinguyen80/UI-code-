import { FileOutlined, PieChartOutlined } from '@ant-design/icons'

export const navigations = [
  {
    key: 1,
    label: 'Dashboard',
    icon: <PieChartOutlined />,
    route: '/dashboard',
  },
  {
    key: 2,
    label: 'Requests',
    icon: <FileOutlined />,
    route: '/requests',
    children: [
      {
        key: 3,
        label: 'List requests',
        icon: <PieChartOutlined />,
        route: '/requests/list',
      },
      {
        key: 4,
        label: 'Send requests',
        icon: <PieChartOutlined />,
        route: '/requests/create',
      },
    ],
  },
  {
    key: 5,
    label: 'Users',
    icon: <PieChartOutlined />,
    route: '/users',
    children: [
      {
        key: 6,
        label: 'List users',
        icon: <PieChartOutlined />,
        route: '/users/list',
      },
      {
        key: 7,
        label: 'Create users',
        icon: <PieChartOutlined />,
        route: '/users/create',
      },
    ],
  },
]
