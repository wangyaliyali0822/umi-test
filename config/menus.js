import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';

const menus = [
  {
    key: 'home',
    label: '首页',
    icon: <LaptopOutlined />,
    path: '/home',
  },
  {
    key: 'map-type',
    label: '地图类',
    icon: <NotificationOutlined />,
    children: [
      {
        key: 'map',
        label: '百度地图',
        path: '/map',
      },
    ],
  },
  {
    key: 'table-type',
    label: 'table类',
    icon: <UserOutlined />,
    children: [
      {
        key: 'list',
        label: '列表',
        path: '/list',
      },
    ],
  },
];

export default menus;
