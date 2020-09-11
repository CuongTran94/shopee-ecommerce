import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import logo from '../../../../assets/images/logo-blog.png';
import './styles.scss';

const { Header } = Layout;

class HeaderBlog extends Component {
    constructor() {
        super();
        this.state = {
            show: true,
            scroll: 0
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        this.setState({
            scroll: document.body.getBoundingClientRect().top,
            show: document.body.getBoundingClientRect().top > this.state.scroll
        })
    }

    getStyle = () => {
        if (this.state.show) {
            return {
                transform: 'translate3d(0, 0, 0)',
            };
        } else {
            return {
                transform: 'translate3d(0, -80px, 0)'
            };
        }
    }

    render() {
        return (
            <Header
                className='header-wrap header-blog'
                style={this.getStyle()}
            >
                <div className="container">
                    <div className="header-blog-logo">
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="header-blog-menu">
                        <Menu mode="horizontal">
                            <Menu.Item>
                                <Link to="">Thời trang</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="">Khỏe & đẹp</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="">Phong cách sống</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="">Góc công nghệ</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="">Reviews</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="">
                                    <ShoppingCartOutlined />
                                    Shop
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </div>
                </div>
            </Header >
        );
    }
}

export default HeaderBlog;