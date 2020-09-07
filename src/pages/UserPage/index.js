import React from 'react';
import styled from 'styled-components';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import ProfilePage from './Profile';
import PasswordChanging from './PasswordPage';
import Purchase from './PerchasePage';
import OrderDetailPage from './OrderDetailPage';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

const Container = styled.div`
  margin: 128px 75px;
`;

const StyledLayout = styled(Layout)`
  .ant-layout-header,
  .ant-layout-sider {
    background-color: white;
  }
`;

const StyledHeader = styled(Header)`
  height: 100px;
`;

const StyledContent = styled(Content)``;

const StyledSider = styled(Sider)`
  .ant-layout-sider-children {
    width: inherit;
  }
`;

const StyledFooter = styled(Footer)``;

const TopSider = styled.div`
  height: 100px;
`;

const StyledMenu = styled(Menu)`
  .ant-menu-submenu-arrow {
    display: none;
  }
`;

const UserPage = ({ match: { url } }) => {
  const history = useHistory();
  const handleClick = e => {
    history.push(`${url}/${e.key}`);
  };

  return (
    <Container>
      <StyledLayout>
        <StyledSider>
          <TopSider></TopSider>
          <StyledMenu
            onClick={handleClick}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <UserOutlined />
                  <span>Tài khoản của tôi</span>
                </span>
              }
            >
              <Menu.Item key="profile">Hồ sơ</Menu.Item>
              <Menu.Item key="password">Đổi mật khẩu</Menu.Item>
            </SubMenu>
            <Menu.Item key="purchase" icon={<ShoppingCartOutlined />}>
              Đơn mua
            </Menu.Item>
          </StyledMenu>
        </StyledSider>
        <StyledLayout>
          <Switch>
            <Route path={`${url}/profile`} component={ProfilePage} />
            <Route path={`${url}/password`} component={PasswordChanging} />
            <Route exact path={`${url}/purchase`} component={Purchase} />
            <Route
              exact
              path={`${url}/purchase/:id`}
              component={OrderDetailPage}
            />
          </Switch>
        </StyledLayout>
      </StyledLayout>
    </Container>
  );
};

export default UserPage;
