import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import hotdeal1 from '../../../../assets/images/hotdeal_1.png';
import hotdeal2 from '../../../../assets/images/hotdeal_2.png';
import hotdeal3 from '../../../../assets/images/hotdeal_3.png';
import hotdeal4 from '../../../../assets/images/hotdeal_4.png';
import hotdeal5 from '../../../../assets/images/hotdeal_5.png';
import hotdeal6 from '../../../../assets/images/hotdeal_6.png';
import hotdeal7 from '../../../../assets/images/hotdeal_7.png';
import hotdeal8 from '../../../../assets/images/hotdeal_8.png';
import hotdeal9 from '../../../../assets/images/hotdeal_9.png';
import hotdeal10 from '../../../../assets/images/hotdeal_10.png';
import './styles.scss';

const HotDeal = () => {
    return (
        <div className="shopee-hotdeal">
            <div className="container">
                <Row justify="space-between" className="hotdeal">
                    <Col span={2}>
                        <div className="hotdeal-img">
                            <Link to="/">
                                <img src={hotdeal1} alt="" />
                            </Link>
                        </div>
                        <div className="hotdeal-text">
                            Freeship xtra
                        </div>
                    </Col>
                    <Col span={2}>
                        <div className="hotdeal-img">
                            <Link to="/">
                                <img src={hotdeal2} alt="" />
                            </Link>
                        </div>
                        <div className="hotdeal-text">
                            Giảm giá trăm tỷ
                        </div>
                    </Col>
                    <Col span={2}>
                        <div className="hotdeal-img">
                            <Link to="/">
                                <img src={hotdeal3} alt="" />
                            </Link>
                        </div>
                        <div className="hotdeal-text">
                            Hoàn xu đơn bất kỳ
                        </div>
                    </Col>
                    <Col span={2}>
                        <div className="hotdeal-img">
                            <Link to="/">
                                <img src={hotdeal4} alt="" />
                            </Link>
                        </div>
                        <div className="hotdeal-text">
                            Hàng quốc tế - đồng giá
                        </div>
                    </Col>
                    <Col span={2}>
                        <div className="hotdeal-img">
                            <Link to="/">
                                <img src={hotdeal5} alt="" />
                            </Link>
                        </div>
                        <div className="hotdeal-text">
                            Siêu thị điện tử
                        </div>
                    </Col>
                    <Col span={2}>
                        <div className="hotdeal-img">
                            <Link to="/">
                                <img src={hotdeal6} alt="" />
                            </Link>
                        </div>
                        <div className="hotdeal-text">
                            Shopee mum's club
                        </div>
                    </Col>
                    <Col span={2}>
                        <div className="hotdeal-img">
                            <Link to="/">
                                <img src={hotdeal7} alt="" />
                            </Link>
                        </div>
                        <div className="hotdeal-text">
                            Shopee mall
                        </div>
                    </Col>
                    <Col span={2}>
                        <div className="hotdeal-img">
                            <Link to="/">
                                <img src={hotdeal8} alt="" />
                            </Link>
                        </div>
                        <div className="hotdeal-text">
                            Deal sốc từ 1k
                        </div>
                    </Col>
                    <Col span={2}>
                        <div className="hotdeal-img">
                            <Link to="/">
                                <img src={hotdeal9} alt="" />
                            </Link>
                        </div>
                        <div className="hotdeal-text">
                            Miễn phí vận chuyển
                        </div>
                    </Col>
                    <Col span={2}>
                        <div className="hotdeal-img">
                            <Link to="/">
                                <img src={hotdeal10} alt="" />
                            </Link>
                        </div>
                        <div className="hotdeal-text">
                            Săn xu mỗi ngày
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default HotDeal;