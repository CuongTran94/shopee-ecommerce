import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Tag, Row, Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import {
    TwitterOutlined,
    GoogleOutlined,
    FacebookOutlined,
    LinkedinOutlined,
} from '@ant-design/icons';
import PropTypes from 'prop-types';
import './styles.scss';
import Related from '../Related';

const { Title } = Typography;

const Article = props => {
    return (
        <div className="container">
            <Row gutter={30}>
                <Col lg={16}>
                    <div className="article">
                        <div className="article-cate">
                            <Link to="">Phong cách sống</Link>
                        </div>
                        <div className="artile-title">
                            <Title level={1}>Top 8 sách hay về nuôi dạy con bố mẹ không nên bỏ qua</Title>
                            <div className="article-meta">
                                <span className="article-meta-author">Admin</span>
                                <span className="article-meta-date">September 4, 2020</span>
                                <div className="article-meta-comment">
                                    <FontAwesomeIcon icon={faCommentAlt} /> 422
                                </div>
                                <div className="article-meta-view">
                                    <FontAwesomeIcon icon={faEye} /> 1921
                                </div>
                            </div>
                        </div>
                        <div className="article-social">
                            <Tag icon={<FacebookOutlined />} color="#3b5999">
                                Facebook
                            </Tag>
                            <Tag icon={<TwitterOutlined />} color="#55acee">
                                Twitter
                            </Tag>
                            <Tag icon={<GoogleOutlined />} color="#cd201f">
                                Google
                            </Tag>
                            <Tag icon={<LinkedinOutlined />} color="#55acee">
                                LinkedIn
                            </Tag>
                        </div>
                        <div className="article-main">
                            <p><span style={{ fontWeight: 400 }}>Chắc hẳn bạn đã từng nghe đến những quyển tiểu thuyết kinh điển của Trung Quốc như: Tây Du Ký, Tam Quốc Diễn Nghĩa, Thủy Hử hay Hồng Lâu Mộng,…hoặc là những cuốn ngôn tình làm điên đảo giới trẻ Việt từ xưa đến nay. Nhưng bạn hãy thử một lần cầm trên tay quyển sách “Bạn đắt giá bao nhiêu?” của nhà văn Vãn Tình. Bạn sẽ tìm được những cái “thật” của cuộc sống qua từng câu chữ. Từ đó có thể nhìn thấy những chiêm nghiệm cuộc sống của một nữ nhà văn trẻ và chính bản thân bạn trong đó. Hãy cùng </span><b>review sách “Bạn Đắt Giá Bao Nhiêu?”</b><span style={{ fontWeight: 400 }}>&nbsp;của nhà văn Vãn Tình để có cái nhìn sâu sắc hơn nhé!</span></p>
                            <h2><span style={{ fontWeight: 400 }}>Đôi nét về nhà văn Vãn Tình</span></h2>
                            <p><span style={{ fontWeight: 400 }}>Vãn Tình là nhà văn quen thuộc đối với những độc giả trẻ Việt Nam khi tiếp cận văn học, văn hóa Trung Quốc. Tuy là nữ nhà văn trẻ của Trung Quốc nhưng những trang viết của tác giả lại thu hút người đọc bởi cái nhìn, cách đánh giá về cuộc sống một cách sâu sắc của một người có vốn kinh nghiệm cũng như sự trải nghiệm dày dặn.&nbsp;</span></p>
                        </div>
                    </div>
                    <Related />
                </Col>
                <Col lg={8}></Col>
            </Row>
        </div>
    );
};

Article.propTypes = {

};

export default Article;