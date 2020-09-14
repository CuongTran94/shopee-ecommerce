import React from 'react';
import { Tabs, List, Card } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

const { TabPane } = Tabs;
const { Meta } = Card;

const data = [
    { title: '8 đôi giày đá bóng tốt nhất mà bạn không nên bỏ qua', avatar: 'https://shopee.vn/blog/wp-content/uploads/2020/07/giay-da-bong-tot-nhat-thumb-ngang-218x150.png' },
    { title: '8 đôi giày đá bóng tốt nhất mà bạn không nên bỏ qua', avatar: 'https://shopee.vn/blog/wp-content/uploads/2020/07/giay-da-bong-tot-nhat-thumb-ngang-218x150.png' },
    { title: '8 đôi giày đá bóng tốt nhất mà bạn không nên bỏ qua', avatar: 'https://shopee.vn/blog/wp-content/uploads/2020/07/giay-da-bong-tot-nhat-thumb-ngang-218x150.png' },
    { title: '8 đôi giày đá bóng tốt nhất mà bạn không nên bỏ qua', avatar: 'https://shopee.vn/blog/wp-content/uploads/2020/07/giay-da-bong-tot-nhat-thumb-ngang-218x150.png' },
    { title: '8 đôi giày đá bóng tốt nhất mà bạn không nên bỏ qua', avatar: 'https://shopee.vn/blog/wp-content/uploads/2020/07/giay-da-bong-tot-nhat-thumb-ngang-218x150.png' },
    { title: '8 đôi giày đá bóng tốt nhất mà bạn không nên bỏ qua', avatar: 'https://shopee.vn/blog/wp-content/uploads/2020/07/giay-da-bong-tot-nhat-thumb-ngang-218x150.png' },
];

const Related = props => {
    return (
        <div className="article-related">
            <Tabs defaultActiveKey="related">
                <TabPane tab="RELATED ARTICLES" key="related">
                    <List
                        grid={{ gutter: 20, column: 3 }}
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <Link to="">
                                    <Card
                                        cover={<img src={item.avatar} alt="" />}
                                        bordered={false}
                                    >
                                        <Meta title={item.title} />
                                    </Card>
                                </Link>
                            </List.Item>
                        )}
                    />
                </TabPane>
                <TabPane tab="MORE FROM AUTHOR" key="author" disabled>
                </TabPane>
            </Tabs>
        </div>
    );
};

Related.propTypes = {

};

export default Related;