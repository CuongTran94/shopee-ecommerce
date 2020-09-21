import React, { useEffect } from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchPostDetail,
  fetchPostDetailSuccess
} from '../../../redux/Blog/blog.actions';
import Article from './components/Article';
import HeaderBlog from '../components/Header';

const DetailBlogContainer = props => {
  const { slug } = props.match.params;
  const postDetail = useSelector(state => state.blog.postDetail);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostDetail(slug));
  }, []);
  return (
    <Layout className="shopee-article">
      <HeaderBlog />
      <Article postDetail={postDetail} />
    </Layout>
  );
};

DetailBlogContainer.propTypes = {};

export default DetailBlogContainer;
