import React, { useState } from 'react';
import { List, Skeleton, Typography, Button } from 'antd';
import PropTypes from 'prop-types';
import Avatar from 'antd/lib/avatar/avatar';
import { Link } from 'react-router-dom';
import './styles.scss';

const { Title } = Typography;

const data = [
    { title: 'Muji Việt Nam và top sản phẩm HOT nhất đến từ thương hiệu này' },
    { title: 'So sánh BHA của Paula Choice và BHA the Ordinay' },
    { title: 'So sánh BHA của Paula Choice và BHA the Ordinay 1' },
    { title: 'So sánh BHA của Paula Choice và BHA the Ordinay 2' },
    { title: 'So sánh BHA của Paula Choice và BHA the Ordinay 3' },
    { title: 'So sánh BHA của Paula Choice và BHA the Ordinay 4' },
    { title: 'So sánh BHA của Paula Choice và BHA the Ordinay 5' },
    { title: 'So sánh BHA của Paula Choice và BHA the Ordinay 6' },
    { title: 'So sánh BHA của Paula Choice và BHA the Ordinay 6' },
    { title: 'So sánh BHA của Paula Choice và BHA the Ordinay 6' }
];

const ListPost = props => {
    const [loading, setLoading] = useState(true);
    const loadmore = loading ? (
        <div className="load-more">
            <Button>Load more</Button>
        </div>
    ) : null;

    return (
        <div className="list-post">
            <div className="container">
                <List
                    itemLayout='horizontal'
                    dataSource={data}
                    loadMore={loadmore}
                    renderItem={item => (
                        <List.Item>
                            <Skeleton avatar title={false} loading={item.loading} active>
                                <List.Item.Meta
                                    avatar={
                                        <img src="https://shopee.vn/blog/wp-content/uploads/2020/08/muji-viet-nam-1068x712.jpg" />
                                    }
                                    title={<Link to=""><Title level={3}>{item.title}</Title></Link>}
                                    description='Với thương hiệu nổi đình đám tại Nhật Bản, Muji nhanh chóng nhận được sự yêu thích và chào đón tại thị trường Việt Nam. Đặc biệt là sự kiện ra mắt cửa hàng trải nghiệm Muji Việt Nam...'
                                />
                            </Skeleton>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );
};

ListPost.propTypes = {

};

export default ListPost;