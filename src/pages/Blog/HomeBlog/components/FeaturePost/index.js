import React from 'react';
import { Row, Col, Typography } from 'antd';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import './styles.scss';

const { Content } = Layout;
const { Title } = Typography;

const FeaturePost = props => {
    return (
        <Content>
            <div className="container">
                <div className="main-blog feature-post">
                    <Row gutter={20}>
                        <Col span={16}>
                            <div className="feature-post-left">
                                <Link to="">
                                    <img src='https://shopee.vn/blog/wp-content/uploads/2020/09/sach-hay-ve-nuoi-day-con-696x463.jpg' />
                                    <Title level={2} className="feature-post-left__title">
                                        Top 8 sách hay về nuôi dạy con bố mẹ không nên bỏ qua
                                    </Title>
                                    <p className="feature-post-left__description">
                                        Giáo dục con cái là cả một quá trình dài mà bố mẹ nào cũng phải trải qua. Con được giáo dục tốt là phải phát triển tốt từ tư duy đến nhân cách. Chính vì vậy mà nhiều...
                                    </p>
                                </Link>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="feature-post-right">
                                <div className="feature-post-right__item">
                                    <Link to="">
                                        <img src="https://shopee.vn/blog/wp-content/uploads/2020/09/sach-hay-ve-nuoi-day-con-696x463.jpg" />
                                        <Title level={4}>
                                            Review sách “Khéo ăn nói sẽ có được thiên hạ” – Trác Nhã
                                        </Title>
                                    </Link>
                                </div>
                                <div className="feature-post-right__item">
                                    <Link to="">
                                        <img src="https://shopee.vn/blog/wp-content/uploads/2020/09/sach-hay-ve-nuoi-day-con-696x463.jpg" />
                                        <Title level={4}>
                                            Review sách “Khéo ăn nói sẽ có được thiên hạ” – Trác Nhã
                                        </Title>
                                    </Link>
                                </div>
                                <div className="feature-post-right__item">
                                    <Link to="">
                                        <img src="https://shopee.vn/blog/wp-content/uploads/2020/09/sach-hay-ve-nuoi-day-con-696x463.jpg" />
                                        <Title level={4}>
                                            Review sách “Khéo ăn nói sẽ có được thiên hạ” – Trác Nhã
                                        </Title>
                                    </Link>
                                </div>
                                <div className="feature-post-right__item">
                                    <Link to="">
                                        <img src="https://shopee.vn/blog/wp-content/uploads/2020/09/sach-hay-ve-nuoi-day-con-696x463.jpg" />
                                        <Title level={4}>
                                            Review sách “Khéo ăn nói sẽ có được thiên hạ” – Trác Nhã
                                        </Title>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Content>
    );
};

FeaturePost.propTypes = {

};

export default FeaturePost;