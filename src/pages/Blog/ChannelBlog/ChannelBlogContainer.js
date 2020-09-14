import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import HeaderBlog from '../components/Header';
import PresentChannel from './components/PresentChannel';
import ListPost from '../components/ListPost';

const ChannelBlogContainer = props => {
    return (
        <Layout>
            <HeaderBlog />
            <PresentChannel />
            <ListPost />
        </Layout>
    );
};

ChannelBlogContainer.propTypes = {

};

export default ChannelBlogContainer;