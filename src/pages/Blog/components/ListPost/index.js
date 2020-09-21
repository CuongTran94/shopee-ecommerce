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
  const { listPosts } = props;

  const loadmore = loading ? (
    <div className="load-more">
      <Button>Load more</Button>
    </div>
  ) : null;

  return (
    <div className="list-post">
      <div className="container">
        <List
          itemLayout="horizontal"
          dataSource={listPosts}
          loadMore={loadmore}
          renderItem={post => (
            <List.Item>
              <Skeleton avatar title={false} loading={false} active>
                <List.Item.Meta
                  avatar={<img src={post.mediumUrl} />}
                  title={
                    <Link to={`/blog/detail/${post.slug}`}>
                      <Title level={3}>{post.title}</Title>
                    </Link>
                  }
                  description="Với thương hiệu nổi đình đám tại Nhật Bản, Muji nhanh chóng nhận được sự yêu thích và chào đón tại thị trường Việt Nam. Đặc biệt là sự kiện ra mắt cửa hàng trải nghiệm Muji Việt Nam..."
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

ListPost.propTypes = {};

export default ListPost;
