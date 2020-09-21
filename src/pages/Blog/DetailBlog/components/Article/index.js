import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Tag, Row, Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import HtmlToReactParser from 'html-to-react';
import moment from 'moment';

import {
  TwitterOutlined,
  GoogleOutlined,
  FacebookOutlined,
  LinkedinOutlined
} from '@ant-design/icons';

import PropTypes from 'prop-types';
import './styles.scss';
import Related from '../Related';
import { convertHtmlToReact } from '../../../../../utils/cart';

const { Title } = Typography;

const Article = props => {
  const { postDetail } = props;
  const { title, content, author, published } = postDetail;
  const convertedContent = convertHtmlToReact(content);
  const dateConvert = moment(published).format('MMMM DD, YYYY');
  return (
    <div className="container">
      <Row gutter={30}>
        <Col lg={16}>
          <div className="article">
            <div className="article-cate">
              <Link to="">Phong cách sống</Link>
            </div>
            <div className="artile-title">
              <Title level={1}>{title}</Title>
              <div className="article-meta">
                <span className="article-meta-author">{author}</span>
                <span className="article-meta-date">{dateConvert}</span>
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
            <div className="article-main">{convertedContent}</div>
          </div>
          <Related />
        </Col>
        <Col lg={8}></Col>
      </Row>
    </div>
  );
};

Article.propTypes = {};

export default Article;
