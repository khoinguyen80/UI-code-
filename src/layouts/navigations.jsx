import { FileOutlined, PieChartOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

export const navigations = [
  {
    key: 1,
    label: 'Account',
    icon: <FileOutlined />,
    type: 'group',
    children: [
      {
        key: 2,
        label: <Link to='/dashboard'>Dashboard</Link>,
        icon: <PieChartOutlined />,
        path: 'dashboard',
      },
      {
        key: 3,
        label: <Link to='/requests'>Requests</Link>,
        icon: <PieChartOutlined />,
        path: 'requests',
      },
      {
        key: 4,
        label: <Link to='/daysoff'>Day off</Link>,
        icon: <PieChartOutlined />,
        path: 'daysoff',
      },
    ],
  },
  {
    key: 5,
    label: 'Manager',
    icon: <PieChartOutlined />,
    type: 'group',
    children: [
      {
        key: 6,
        label: <Link to='members'>Members</Link>,
        icon: <PieChartOutlined />,
        path: 'members',
      },
      {
        key: 7,
        label: <Link to='manager/groups'>Groups</Link>,
        icon: <PieChartOutlined />,
        path: 'manager/groups',
      },
      {
        key: 8,
        label: <Link to='manager/notification'>Notifications</Link>,
        icon: <PieChartOutlined />,
        path: 'manager/notification',
      },
      {
        key: 9,
        label: <Link to='sync'>Sync</Link>,
        icon: <PieChartOutlined />,
        path: 'sync',
      },
    ],
  },
  {
    key: 10,
    label: 'Administrator',
    icon: <PieChartOutlined />,
    type: 'group',
    children: [
      {
        key: 11,
        label: <Link to='workspaces'>Workspaces</Link>,
        icon: <PieChartOutlined />,
        path: 'workspaces',
      },
    ],
  },
  {
    key: 12,
    label: 'Staff',
    icon: <PieChartOutlined />,
    type: 'group',
    children: [
      {
        key: 13,
        label: <Link to='staff/create-request'>Create Request</Link>,
        icon: <PieChartOutlined />,
        path: 'create-request',
      },
      {
        key: 14,
        label: <Link to='/staff/list-request'>List Request</Link>,
        icon: <PieChartOutlined />,
        path: 'list-request',
      },
    ],
  },
]
