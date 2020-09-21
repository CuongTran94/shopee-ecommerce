import React from 'react';
import { Row, Col, Typography } from 'antd';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import './styles.scss';

const { Content } = Layout;
const { Title } = Typography;

const FeaturePost = props => {
  const { mainPost, subPosts } = props;
  const history = useHistory();
  const subPostElements = subPosts.map(post => {
    return (
      <div key={post.id} className="feature-post-right__item">
        <Link to={`/blog/detail/${mainPost.slug}`}>
          <img src={post.smallUrl} />
          <Title level={4}>{post.title}</Title>
        </Link>
      </div>
    );
  });

  return (
    <Content>
      <div className="container">
        <div className="main-blog feature-post">
          <Row gutter={20}>
            <Col span={16}>
              <div className="feature-post-left">
                <Link to={`/blog/detail/${mainPost.slug}`}>
                  <img src={mainPost.largeUrl} />
                  <Title level={2} className="feature-post-left__title">
                    {mainPost.title}
                  </Title>
                  <p className="feature-post-left__description">
                    Giáo dục con cái là cả một quá trình dài mà bố mẹ nào cũng
                    phải trải qua. Con được giáo dục tốt là phải phát triển tốt
                    từ tư duy đến nhân cách. Chính vì vậy mà nhiều...
                  </p>
                </Link>
              </div>
            </Col>
            <Col span={8}>
              <div className="feature-post-right">{subPostElements}</div>
            </Col>
          </Row>
        </div>
      </div>
    </Content>
  );
};

FeaturePost.propTypes = {};

export default FeaturePost;
