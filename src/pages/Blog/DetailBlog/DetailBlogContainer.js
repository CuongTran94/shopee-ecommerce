import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import Article from './components/Article';
import HeaderBlog from '../components/Header';

const DetailBlogContainer = props => {
    return (
        <Layout className="shopee-article">
            <HeaderBlog />
            <Article />
        </Layout>
    );
};

DetailBlogContainer.propTypes = {

};

export default DetailBlogContainer;