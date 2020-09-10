import React from 'react';
import PropTypes from 'prop-types';
import HeaderBlog from '../components/Header';
import { Layout } from 'antd';
import FeaturePost from './components/FeaturePost';
import ListPost from '../components/ListPost';

const HomeBlogContainer = props => {
    return (
        <Layout>
            <HeaderBlog />
            <FeaturePost />
            <ListPost />
        </Layout>
    );
};

HomeBlogContainer.propTypes = {

};

export default HomeBlogContainer;