import React from 'react';
import { Typography } from 'antd';
import brand from '../../assets/images/shopee-logo2.png';
import './styles.scss';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const NavBar = () => {
    return (
        <div className="navbar-wrap">
            <div className="container navbar">
                <div className="navbar-brand">
                    <Link to="/">
                        <img src={brand} alt="logo" />
                        <Title level={3}>Đăng nhập</Title>
                    </Link>                    
                </div>
                <div className="navbar-help">
                    Cần trợ giúp?
                </div>
            </div>
        </div>
    );
};

export default NavBar;