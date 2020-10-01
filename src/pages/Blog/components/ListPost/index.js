import React, { useState, useEffect } from 'react';
import { List, Skeleton, Typography, Button } from 'antd';
import PropTypes from 'prop-types';
import Avatar from 'antd/lib/avatar/avatar';
import { Link } from 'react-router-dom';
import './styles.scss';

const { Title } = Typography;

const ListPost = props => {
  const [loading, setLoading] = useState(true);
  const { listPosts, handleNextPage, handleLoadMore, error } = props;

  const loadmore = loading ? (
    <div className="load-more">
      <Button disabled={error} type="primary" onClick={handleLoadMore}>
        Load more
      </Button>
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
