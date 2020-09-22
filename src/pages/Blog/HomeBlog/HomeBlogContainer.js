import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Layout } from 'antd';
import FeaturePost from './components/FeaturePost';
import ListPost from '../components/ListPost';
import HeaderBlog from '../components/Header';
import {
  fetchPosts,
  fetchPostsFirstLoad,
  fetchPostsLoadMore
} from '../../../redux/Blog/blog.actions';

const HomeBlogContainer = props => {
  const posts = useSelector(state => state.blog.posts);
  const mainPost = useSelector(state => state.blog.mainPost);
  const subPosts = useSelector(state => state.blog.subPosts);
  const listPosts = useSelector(state => state.blog.listPosts);
  const lastVisible = useSelector(state => state.blog.lastVisible);
  const postsInfinite = useSelector(state => state.blog.postsInfinite);
  const error = useSelector(state => state.blog.error);

  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchPostsFirstLoad());
  }, []);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handleLoadMore = () => {
    dispatch(fetchPostsLoadMore(lastVisible));
  };

  return (
    <Layout>
      <HeaderBlog />
      <FeaturePost mainPost={mainPost} subPosts={subPosts} />
      <ListPost
        error={error}
        handleLoadMore={handleLoadMore}
        handleNextPage={handleNextPage}
        listPosts={postsInfinite}
      />
    </Layout>
  );
};

HomeBlogContainer.propTypes = {};

export default HomeBlogContainer;
