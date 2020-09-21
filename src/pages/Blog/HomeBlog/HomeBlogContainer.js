import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Layout } from 'antd';
import FeaturePost from './components/FeaturePost';
import ListPost from '../components/ListPost';
import HeaderBlog from '../components/Header';
import { fetchPosts } from '../../../redux/Blog/blog.actions';

const HomeBlogContainer = props => {
  const posts = useSelector(state => state.blog.posts);
  const mainPost = useSelector(state => state.blog.mainPost);
  const subPosts = useSelector(state => state.blog.subPosts);
  const listPosts = useSelector(state => state.blog.listPosts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  

  return (
    <Layout>
      <HeaderBlog />
      <FeaturePost mainPost={mainPost} subPosts={subPosts} />
      <ListPost listPosts={listPosts} />
    </Layout>
  );
};

HomeBlogContainer.propTypes = {};

export default HomeBlogContainer;
