import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col, Typography } from 'antd';
import './styles.scss';

const { Title } = Typography;

const PresentChannel = props => {
    return (
        <div className="present-blog">
            <div className="container">
                <Row gutter={10}>
                    <Col lg={24}>
                        <div className="present-blog-title">
                            <Title level={2}>Phong cách ngôi sao</Title>
                        </div>
                        <div className="present-blog-description">
                            Thời trang luôn là một trong những chủ đề được quan tâm và theo dõi nhiều nhất. Ai cũng muốn ăn mặc đẹp; không lỗi thời. Do đó, lựa chọn được style thời trang phù hợp với vóc người và nhãn hiệu hợp túi tiền luôn là ưu tiên hàng đầu của những người thích ăn mặc đẹp. Đến với Star Style; bạn sẽ biết được xu hướng mặc đẹp 2019 – Cập nhật các bí quyết mặc đẹp từ các ngôi sao và người nổi tiếng; tin tức; hình ảnh; video về các gu thời trang HOT nhất hiện nay.
                        </div>
                    </Col>
                </Row>
                <Row gutter={10}>
                    <Col lg={12}>
                        <div className="present-blog-big present-blog-thumb">
                            <Link to="" className="present-blog-thumb__link">
                                <img src="https://shopee.vn/blog/wp-content/uploads/2020/08/my-pham-moji-534x462.jpg" alt="" />
                            </Link>
                            <Title level={3}>
                                <Link to="">So sánh BHA của Paula Choice và BHA the Ordinay</Link>
                            </Title>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="present-blog-medium present-blog-thumb">
                            <Link to="" className="present-blog-thumb__link">
                                <img src="https://shopee.vn/blog/wp-content/uploads/2020/08/my-pham-moji-534x462.jpg" alt="" />
                            </Link>
                            <Title level={3}>
                                <Link to="">So sánh BHA của Paula Choice và BHA the Ordinay</Link>
                            </Title>
                        </div>
                        <div className="present-blog-medium present-blog-thumb">
                            <Link to="" className="present-blog-thumb__link">
                                <img src="https://shopee.vn/blog/wp-content/uploads/2020/08/my-pham-moji-534x462.jpg" alt="" />
                            </Link>
                            <Title level={3}>
                                <Link to="">So sánh BHA của Paula Choice và BHA the Ordinay</Link>
                            </Title>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

PresentChannel.propTypes = {

};

export default PresentChannel;