import React from 'react';
import { Typography, Tag, List, Space, Comment } from 'antd';
import PropTypes from 'prop-types';
import { StarFilled, LikeOutlined } from '@ant-design/icons';
import moment from 'moment';
import avatarUser from '../../../../assets/images/avatar.png';
import './styles.scss';

const { Title } = Typography;
const listData = [];
const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

for(let i = 0; i < 20; i++) {
    listData.push({
        actions: [<IconText icon={LikeOutlined} text="Hữu ích" key="list-vertical-like-o" />],
        author: 'Cuong Tran',
        avatar: avatarUser,
        content: (
            <p>Nunc sed ultricies mi. Suspendisse semper vitae risus porta venenatis. In elementum eleifend ante eu lacinia. Donec ornare placerat enim, ut maximus lorem tristique eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas egestas enim at tellus faucibus molestie. Nullam vel molestie arcu.</p>
        ),
        datetime: (
            <span>{moment().format('YYYY-MM-DD HH:mm:ss')}</span>
        )
    })
}

const ProductReview = () => {
    const renderListComment = () => {
        return (
            <div className="product-review-comment">
                <List 
                    className="product-review-comment-list"
                    itemLayout="horizontal"
                    dataSource={listData}
                    renderItem={item => (
                        <li>
                            <Comment 
                                actions={item.actions}
                                author={item.author}
                                avatar={item.avatar}
                                content={item.content}
                                datetime={item.datetime}
                            />
                        </li>
                    )}
                />
            </div>
        );
    }

    return (
        <div className="product-detail-review">
            <div className="container">
                <div className="detail-page-inner product-review">
                    <Title className="product-review-title" level={4}>Đánh giá sản phẩm</Title>
                    <div className="product-review-rate">
                        <div className="product-review-rate-overview">
                            <div className ="product-review-rate-score">
                                <span className="main-score">5.0</span>
                                <span>trên 5</span>
                            </div>
                            <div className="product-review-rate-star">
                                <StarFilled />
                                <StarFilled />
                                <StarFilled />
                                <StarFilled />
                                <StarFilled />
                            </div>
                        </div>
                        <div className="product-review-rate-filter">
                            <Tag className="star-item active">Tất cả</Tag>
                            <Tag className="star-item">5 Sao (54)</Tag>
                            <Tag className="star-item">4 Sao (12)</Tag>
                            <Tag className="star-item">3 Sao (22)</Tag>
                            <Tag className="star-item">2 Sao (32)</Tag>
                            <Tag className="star-item">1 Sao (0)</Tag>
                        </div>                        
                    </div>
                    {renderListComment()}
                </div>
            </div>
        </div>
    );
};

ProductReview.propTypes = {
    
};

export default ProductReview;