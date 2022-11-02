// 约定式路由时的全局布局文件

import React, { useState, useEffect } from 'react';
import { Layout, Breadcrumb, Menu, Button } from 'antd';
import { history, useLocation } from 'umi';
import menus from '../../config/menus';
import './style.less';
const { Header, Footer, Sider, Content } = Layout;
export default function index(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState(['home']);
  const [openKeys, setOpenKeys] = useState(['home']);
  const loaction = useLocation();

  useEffect(() => {
    menus.map((item) => {
      if (item.children) {
        item.children.map((i) => {
          if (i.path === loaction.pathname) {
            setSelectedKeys([i.key]);
            setOpenKeys([item.key]);
          }
        });
      } else {
        if (item.path === loaction.pathname) {
          setSelectedKeys([item.key]);
          setOpenKeys([item.key]);
        }
      }
    });
  }, [loaction]);

  if (props.location.pathname === '/login') {
    return 'login';
  }

  return (
    <Layout className="container">
      <Sider
        width={200}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        {/* <img src='https://img2.baidu.com/it/u=3686996184,463827598&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666285200&t=aa1e4a384774a974ce3718adc1802377' alt='logo' style={{width:'100%', height:'64px'}}></img> */}
        <Menu
          mode="inline"
          style={{ height: '100%', borderRight: 0 }}
          items={menus}
          theme="dark"
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          onClick={(e) => {
            const { key, item } = e;
            setSelectedKeys([key]);
            history.push(item.props.path);
          }}
          onOpenChange={(keys) => setOpenKeys(keys)}
        />
      </Sider>
      <Layout>
        <Header className="header">
          <Button type="link" onClick={() => history.push('/login')}>
            登录
          </Button>
        </Header>
        <Layout style={{ padding: '0 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content className="content">{props.children}</Content>
        </Layout>
        <Footer className="footer">王雅丽的 umi demo</Footer>
      </Layout>
    </Layout>
  );
}
