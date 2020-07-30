import React from 'react';
import { Row, Col, Typography, List  } from 'antd';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagramSquare } from "@fortawesome/free-brands-svg-icons"
import './styles.scss';

const { Title } = Typography;

const cskh = [
    'Trung Tâm Trợ Giúp',
    'Shopee Blog',
    'Shopee Mall',
    'Hướng Dẫn Mua Hàng',
    'Hướng Dẫn Bán Hàng',
    'Thanh Toán',
    'Shopee Xu',
    'Vận Chuyển',
    'Trả Hàng & Hoàn Tiền',
    'Chăm Sóc Khách Hàng',
    'Chính Sách Bảo Hành'
];

const shopee = [
    'Giới Thiệu Về Shopee Việt Nam',
    'Tuyển Dụng',
    'Điều Khoản Shopee',
    'Chính Sách Bảo Mật',
    'Chính Hãng',
    'Kênh Người Bán',
    'Flash Sales',
    'Chương Trình Tiếp Thị Liên Kết Shopee',
    'Liên Hệ Với Truyền Thông'
];

const social = [
    {title: 'Facebook', icon: <FontAwesomeIcon icon={faFacebook} />},
    {title: 'Instagram', icon: <FontAwesomeIcon icon={faInstagramSquare} />},
    {title: 'LinkedIn', icon: <FontAwesomeIcon icon={faLinkedin} />},
]

const Footer = () => {
    return (
        <footer className="footer">
            <div className="policy">
                <div className="container">
                    <Row gutter={16}>
                        <Col span={6}>
                            <Title level={4}>Chăm sóc khách hàng</Title>
                            <List
                                bordered={false}
                                dataSource={cskh}
                                renderItem={item => (
                                    <List.Item>
                                        <Link to="/">
                                            {item}
                                        </Link>
                                    </List.Item>
                                )}
                            />
                        </Col>
                        <Col span={4}>
                            <Title level={4}>Về shopee</Title>
                            <List
                                bordered={false}
                                dataSource={shopee}
                                renderItem={item => (
                                    <List.Item>
                                        <Link to="/">
                                            {item}
                                        </Link>                                        
                                    </List.Item>
                                )}
                            />
                        </Col>
                        <Col span={4}>
                            <Title level={4}>Thanh toán</Title>
                            <div className="footer-img payment"></div>
                            <Title level={4}>Đơn vị vẫn chuyển</Title>
                            <div className="footer-img transport"></div>
                        </Col>
                        <Col span={4}>
                            <Title level={4}>Theo dõi chúng tôi trên</Title>
                            <List
                                bordered={false}
                                dataSource={social}
                                renderItem={item => (
                                    <List.Item>
                                        <Link to="/">
                                            <span className="footer-icon">{item.icon}</span>
                                            <span>{item.title}</span>
                                        </Link>                                        
                                    </List.Item>
                                )}
                            />                           
                        </Col>
                        <Col span={6}>
                            <Title level={4}>Tải ứng dụng Shopee ngay thôi</Title>
                            <div className="footer-img app-store"></div>
                        </Col>
                    </Row>
                </div>
            </div>
        </footer>
    );
}

export default Footer;