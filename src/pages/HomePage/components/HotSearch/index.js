import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import './styles.scss';
import hotseach1 from '../../../../assets/images/hotsearch_1.jpg';
import hotseach2 from '../../../../assets/images/hotsearch_2.jpg';
import hotseach3 from '../../../../assets/images/hotsearch_3.jpg';
import hotseach4 from '../../../../assets/images/hotsearch_4.jpg';
import hotseach5 from '../../../../assets/images/hotsearch_5.jpg';

const gridStyle = {
    width: '20%'
};

const HotSearch = () => {
    return (
        <div className="container">
            <div className="hot-search">
                <Card title="Xu hướng tìm kiếm" extra={<Link to="/" className="more">Xem thêm</Link>}>
                    <Card.Grid hoverable={false} style={gridStyle}>
                        <Link to="/" className="hot-search-item">
                            <div className="hot-search-content">
                                <div className="hot-search-title">Đầm nữ</div>
                                <div className="hot-search-desc">2tr+ sản phẩm</div>
                            </div>
                            <div className="hot-search-img">
                                <img src={hotseach1} alt="" />
                            </div>                            
                        </Link>
                    </Card.Grid>
                    <Card.Grid hoverable={false} style={gridStyle}>
                        <Link to="/" className="hot-search-item">
                            <div className="hot-search-content">
                                <div className="hot-search-title">Đầm nữ</div>
                                <div className="hot-search-desc">2tr+ sản phẩm</div>
                            </div>
                            <div className="hot-search-img">
                                <img src={hotseach2} alt="" />
                            </div>                            
                        </Link>
                    </Card.Grid>
                    <Card.Grid hoverable={false} style={gridStyle}>
                        <Link to="/" className="hot-search-item">
                            <div className="hot-search-content">
                                <div className="hot-search-title">Đầm nữ</div>
                                <div className="hot-search-desc">2tr+ sản phẩm</div>
                            </div>
                            <div className="hot-search-img">
                                <img src={hotseach3} alt="" />
                            </div>                            
                        </Link>
                    </Card.Grid>
                    <Card.Grid hoverable={false} style={gridStyle}>
                        <Link to="/" className="hot-search-item">
                            <div className="hot-search-content">
                                <div className="hot-search-title">Đầm nữ</div>
                                <div className="hot-search-desc">2tr+ sản phẩm</div>
                            </div>
                            <div className="hot-search-img">
                                <img src={hotseach4} alt="" />
                            </div>                            
                        </Link>
                    </Card.Grid>
                    <Card.Grid hoverable={false} style={gridStyle}>
                        <Link to="/" className="hot-search-item">
                            <div className="hot-search-content">
                                <div className="hot-search-title">Đầm nữ</div>
                                <div className="hot-search-desc">2tr+ sản phẩm</div>
                            </div>
                            <div className="hot-search-img">
                                <img src={hotseach5} alt="" />
                            </div>                            
                        </Link>
                    </Card.Grid>
                </Card>
            </div>
        </div>
    );
};

export default HotSearch;