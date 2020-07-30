import React from 'react';
import { Card } from 'antd';
import './styles.scss';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import cate1 from '../../../../assets/images/cate_1.png';
import cate2 from '../../../../assets/images/cate_2.png';
import cate3 from '../../../../assets/images/cate_3.png';
import cate4 from '../../../../assets/images/cate_4.png';
import cate5 from '../../../../assets/images/cate_5.png';
import cate6 from '../../../../assets/images/cate_6.png';
import cate7 from '../../../../assets/images/cate_7.png';
import cate8 from '../../../../assets/images/cate_8.png';
import cate9 from '../../../../assets/images/cate_9.png';
import cate10 from '../../../../assets/images/cate_10.png';
import cate11 from '../../../../assets/images/cate_11.png';
import cate12 from '../../../../assets/images/cate_12.png';
import cate13 from '../../../../assets/images/cate_13.png';
import cate14 from '../../../../assets/images/cate_14.png';
import cate15 from '../../../../assets/images/cate_15.png';
import cate16 from '../../../../assets/images/cate_16.png';
import cate17 from '../../../../assets/images/cate_17.png';
import cate18 from '../../../../assets/images/cate_18.png';
import cate19 from '../../../../assets/images/cate_19.png';
import cate20 from '../../../../assets/images/cate_20.png';

const { Title } = Typography;

const gridStyle = {
    width: '10%',
    textAlign: 'center',
};

const Category = () => {
    return (
        <div className="home-category-list home-category">
            <div className="container">
                <Card title="Danh mục" style={{textTransform: 'uppercase'}}>
                <Card.Grid style={gridStyle}>
                    <Link to="/">
                        <div className="home-category-img">
                            <img src={cate1} alt="" />
                        </div>
                        <div className="home-category-title">
                            <Title level={4}>Thời trang nam</Title>
                        </div>
                    </Link>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                    <Link to="/">
                        <div className="home-category-img">
                            <img src={cate2} alt="" />
                        </div>
                        <div className="home-category-title">
                            <Title level={4}>Điện Thoại & Phụ Kiện</Title>
                        </div>
                    </Link>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                    <Link to="/">
                        <div className="home-category-img">
                            <img src={cate3} alt="" />
                        </div>
                        <div className="home-category-title">
                            <Title level={4}>Thiết Bị Điện Tử</Title>
                        </div>
                    </Link>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                    <Link to="/">
                        <div className="home-category-img">
                            <img src={cate4} alt="" />
                        </div>
                        <div className="home-category-title">
                            <Title level={4}>Máy tính & Laptop</Title>
                        </div>
                    </Link>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                    <Link to="/">
                        <div className="home-category-img">
                            <img src={cate5} alt="" />
                        </div>
                        <div className="home-category-title">
                            <Title level={4}>Máy ảnh - Máy quay phim</Title>
                        </div>
                    </Link>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                    <Link to="/">
                        <div className="home-category-img">
                            <img src={cate6} alt="" />
                        </div>
                        <div className="home-category-title">
                            <Title level={4}>Đồng Hồ</Title>
                        </div>
                    </Link>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                    <Link to="/">
                        <div className="home-category-img">
                            <img src={cate7} alt="" />
                        </div>
                        <div className="home-category-title">
                            <Title level={4}>Giày Dép Nam</Title>
                        </div>
                    </Link>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                    <Link to="/">
                        <div className="home-category-img">
                            <img src={cate8} alt="" />
                        </div>
                        <div className="home-category-title">
                            <Title level={4}>Thiết Bị Điện Gia Dụng</Title>
                        </div>
                    </Link>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                    <Link to="/">
                        <div className="home-category-img">
                            <img src={cate9} alt="" />
                        </div>
                        <div className="home-category-title">
                            <Title level={4}>Thể Thao & Du Lịch</Title>
                        </div>
                    </Link>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                    <Link to="/">
                        <div className="home-category-img">
                            <img src={cate10} alt="" />
                        </div>
                        <div className="home-category-title">
                            <Title level={4}>Ô tô - xe máy - xe đạp</Title>
                        </div>
                    </Link>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                    <Link to="/">
                        <div className="home-category-img">
                            <img src={cate11} alt="" />
                        </div>
                        <div className="home-category-title">
                            <Title level={4}>Thời Trang Nữ</Title>
                        </div>
                    </Link>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                    <Link to="/">
                        <div className="home-category-img">
                            <img src={cate12} alt="" />
                        </div>
                        <div className="home-category-title">
                            <Title level={4}>Mẹ & Bé</Title>
                        </div>
                    </Link>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                    <Link to="/">
                        <div className="home-category-img">
                            <img src={cate13} alt="" />
                        </div>
                        <div className="home-category-title">
                            <Title level={4}>Nhà Cửa & Đời Sống</Title>
                        </div>
                    </Link>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                    <Link to="/">
                        <div className="home-category-img">
                            <img src={cate14} alt="" />
                        </div>
                        <div className="home-category-title">
                            <Title level={4}>Sức Khỏe & Sắc Đẹp</Title>
                        </div>
                    </Link>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                    <Link to="/">
                        <div className="home-category-img">
                            <img src={cate15} alt="" />
                        </div>
                        <div className="home-category-title">
                            <Title level={4}>Giày Dép Nữ</Title>
                        </div>
                    </Link>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                    <Link to="/">
                        <div className="home-category-img">
                            <img src={cate16} alt="" />
                        </div>
                        <div className="home-category-title">
                            <Title level={4}>Túi Ví</Title>
                        </div>
                    </Link>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                    <Link to="/">
                        <div className="home-category-img">
                            <img src={cate17} alt="" />
                        </div>
                        <div className="home-category-title">
                            <Title level={4}>Phụ Kiện Thời Trang</Title>
                        </div>
                    </Link>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                    <Link to="/">
                        <div className="home-category-img">
                            <img src={cate18} alt="" />
                        </div>
                        <div className="home-category-title">
                            <Title level={4}>Bách Hoá Online</Title>
                        </div>
                    </Link>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                    <Link to="/">
                        <div className="home-category-img">
                            <img src={cate19} alt="" />
                        </div>
                        <div className="home-category-title">
                            <Title level={4}>Voucher & Dịch vụ</Title>
                        </div>
                    </Link>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                    <Link to="/">
                        <div className="home-category-img">
                            <img src={cate20} alt="" />
                        </div>
                        <div className="home-category-title">
                            <Title level={4}>Nhà Sách Online</Title>
                        </div>
                    </Link></Card.Grid>                
            </Card>
            </div>
        </div>
    );
}

export default Category;