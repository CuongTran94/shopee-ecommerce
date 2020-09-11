import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import HeaderBlog from '../components/Header';

const ChannelBlogContainer = props => {
    return (
        <Layout>
            <HeaderBlog />
        </Layout>
    );
};

ChannelBlogContainer.propTypes = {

};

export default ChannelBlogContainer;