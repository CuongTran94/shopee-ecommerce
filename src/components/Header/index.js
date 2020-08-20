import React, { useEffect } from 'react';
import { Row, Col, Menu, Input, Tooltip, Popover, Badge } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCart } from '../../redux/Cart/cart.actions';
import logo from '../../assets/images/shopee-logo.png';
import cart from '../../assets/images/cart.png';
import './styles.scss';
import { logoutUser } from '../../redux/User/user.actions';
import CartPopover from '../CartPopover';
import { getTotalQuantity } from '../../utils/cart';

const { Search } = Input;

const content = <CartPopover />;

const Header = () => {
  const currentUser = useSelector(state => state.user.currentUser) || {};
  const products = useSelector(state => state.cart.products);
  const dispatch = useDispatch();
  const quantity = getTotalQuantity(products);

  useEffect(() => {
    if (currentUser.id !== undefined) {
      dispatch(fetchCart(currentUser.id));
    }
  }, [currentUser]);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const renderTooltip = () => {
    return (
      <div className="ant-tooltip-wrap">
        <Link to="/" className="ant-tooltip-item">
          Tài khoản của tôi
        </Link>
        <Link to="/" className="ant-tooltip-item">
          Đơn mua
        </Link>
        <div className="ant-tooltip-item" onClick={() => handleLogout()}>
          Đăng xuất
        </div>
      </div>
    );
  };

  return (
    <div className="shopee-top shop">
      <div className="container">
        <Row className="topbar">
          <Col md={{ span: 8 }}>
            <Menu mode="horizontal" className="topbar-left">
              <Menu.Item key="client">
                <Link to="/#">kênh người bán</Link>
              </Menu.Item>
              <Menu.Item key="dowload">
                <Link to="/#">tải ứng dụng</Link>
              </Menu.Item>
              <Menu.Item key="connect">
                <Link to="/#">kết nối</Link>
                <Link to="/#" className="topbar-icon topbar-ic-fab"></Link>
                <Link to="/#" className="topbar-icon topbar-ic-ins"></Link>
              </Menu.Item>
            </Menu>
          </Col>
          <Col md={{ span: 16 }}>
            <Menu mode="horizontal" className="topbar-right">
              <Menu.Item key="noti">
                <i className="topbar-icon topbar-ic-noti"></i>
                <Link to="/#">thông báo</Link>
              </Menu.Item>
              <Menu.Item key="help">
                <QuestionCircleOutlined className="topbar-ic-que" />
                <Link to="/#">trợ giúp</Link>
              </Menu.Item>
              {!currentUser ? (
                [
                  <Menu.Item key="signup">
                    <Link to="/signup">đăng ký</Link>
                  </Menu.Item>,
                  <Menu.Item key="signin">
                    <Link to="/login">đăng nhập</Link>
                  </Menu.Item>
                ]
              ) : (
                <Menu.Item>
                  <Tooltip
                    placement="bottom"
                    title={renderTooltip}
                    color="white"
                  >
                    <Link to="/account">{currentUser.username}</Link>
                  </Tooltip>
                </Menu.Item>
              )}
            </Menu>
          </Col>
        </Row>
        <Row className="header">
          <Col md={{ span: 4 }}>
            <Link to="/#" className="header-img">
              <img src={logo} alt="logo" className="header-logo" />
            </Link>
          </Col>
          <Col md={{ span: 16 }}>
            <Search
              placeholder="tìm sản phẩm, thương hiêu, và tên shop"
              onSearch={value => console.log(value)}
              className="header-search"
            />
          </Col>
          <Col md={{ span: 4 }}>
            <div className="header-img header-mt">
              <Badge count={quantity}>
                <Popover
                  placement="bottomRight"
                  content={content}
                  trigger="hover"
                >
                  <img src={cart} alt="cart" className="header-cart" />
                </Popover>
              </Badge>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
