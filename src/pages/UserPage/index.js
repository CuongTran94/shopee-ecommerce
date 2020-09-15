import React from 'react';
import styled from 'styled-components';
import { Route, Switch, useHistory, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { UserOutlined, ShoppingCartOutlined, EditOutlined } from '@ant-design/icons';

import ProfilePage from './Profile';
import PasswordChanging from './PasswordPage';
import Purchase from './PerchasePage';
import OrderDetailPage from './OrderDetailPage';
import avaDefault from '../../assets/images/avatar-default.png';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

const Container = styled.div`
  margin: 138px auto 50px auto;
  overflow: hidden;
  width: 1200px;
`;

const StyledLayout = styled(Layout)`
  background: #f5f5f5;
  
  .ant-layout-sider {
    background-color: transparent;
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
  padding: 0 34px 12px 24px;
  display: flex;
  border-bottom: 1px solid #EFEFEF;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 8px;
  }

  a {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    color: #333;
  }
`;

const StyledMenu = styled(Menu)`
  background: transparent;
  font-size: 15px;

  .ant-menu-submenu-arrow {
    display: none;
  }

  .ant-menu-submenu-selected {
    color: #fb5533;
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: transparent;
  }

  .ant-menu-item-selected {
    color: #fb5533;   
    background-color: transparent !important; 

    &:after {
      border-right: 0;
    }
  }

  .ant-menu-submenu > .ant-menu {
    background: transparent;
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
          <TopSider>
            <img src={avaDefault} alt="" />
            <Link to="/">
              <span>Cuong Tran</span>
              <span><EditOutlined /> Sửa Hồ Sơ</span>
            </Link>
          </TopSider>
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
