import { Breadcrumb, Layout, Menu } from 'antd'
import { useState } from 'react'
import styled from 'styled-components'
import { navigations } from './navigations'

const { Header, Content, Footer, Sider } = Layout

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  margin: 16px;

  span {
    font-weight: bold;
    font-size: 16px;
    background: -webkit-linear-gradient(#eee, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
const MainLayouts = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout
      style={{
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
      }}
    >
      <Sider
        collapsible
        breakpoint='lg'
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <LogoStyled>
          {collapsed ? <span>SS</span> : <span>ShootingStars</span>}
        </LogoStyled>
        <Menu
          defaultSelectedKeys={['1']}
          items={navigations}
          mode='inline'
          theme='dark'
        />
      </Sider>
      <Layout className='site-layout'>
        <Header
          style={{
            padding: 0,
            background: '#FFFFFF',
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 3600,
              background: '#FFFFFF',
              overflowY: 'auto',
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default MainLayouts
