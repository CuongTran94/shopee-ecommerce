import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Typography, Button, Input, Divider, Modal } from "antd";
import {
  StarFilled,
  MinusOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
  CheckCircleTwoTone
} from "@ant-design/icons";
import "./styles.scss";
import { addToCart } from "../../../../redux/Cart/cart.actions";

const { Title } = Typography;

const ProductInfo = (props) => {
  const history = useHistory();
  const { pro_name, pro_price, pro_avatar, id, dispatch, currentUser } = props;

  const [pro_quantity, setPro_quantity] = useState(1);
  const handleIncrement = () => {
    if (pro_quantity > 99) {
      setPro_quantity(100);
      return;
    }
    setPro_quantity(pro_quantity + 1);
  };

  const handleDecrement = () => {
    if (pro_quantity < 2) {
      setPro_quantity(1);
      return;
    }
    setPro_quantity(pro_quantity - 1);
  };

  const handleOnChange = (event) => {
    const quantity = event.target.value;
    if (quantity > 100) {
      setPro_quantity(100);
      return;
    }
    if (quantity < 1) {
      setPro_quantity(1);
      return;
    }
    setPro_quantity(quantity);
  };

  const handleAddToCart = (cart) => {
    if (!currentUser) {
      history.push("/login");
      return;
    }
    messageAddCart();
    dispatch(addToCart(cart));
  };

  const messageAddCart = () => {
    const modal = Modal.success({
      content: 'Sản phẩm đã được thêm vào giỏ hàng',
      centered: true,
      width: 340,
      okButtonProps: { hidden: true },
      icon: <CheckCircleTwoTone twoToneColor="#00BFA5" />,
      className: 'success-add-cart'
    });

    setTimeout(() => {
      modal.destroy();
    }, 2000);
  }

  return (
    <div className="detail-product-info">
      <div className="container">
        <div className="detail-page-inner product-info">
          <Row>
            <Col md={{ span: 10 }}>
              <div className="detail-pro-media">
                <div className="detail-pro-img">
                  <div className="img-avatar">
                    <img alt="" src={pro_avatar} />
                  </div>
                  <div className="img-thumbnail">
                    <div className="img-item">
                      <img
                        src="https://cf.shopee.vn/file/774edf403570f7bc2661df65d0f86771_tn"
                        alt=""
                      />
                    </div>
                    <div className="img-item">
                      <img
                        src="https://cf.shopee.vn/file/774edf403570f7bc2661df65d0f86771_tn"
                        alt=""
                      />
                    </div>
                    <div className="img-item">
                      <img
                        src="https://cf.shopee.vn/file/774edf403570f7bc2661df65d0f86771_tn"
                        alt=""
                      />
                    </div>
                    <div className="img-item">
                      <img
                        src="https://cf.shopee.vn/file/774edf403570f7bc2661df65d0f86771_tn"
                        alt=""
                      />
                    </div>
                    <div className="img-item">
                      <img
                        src="https://cf.shopee.vn/file/774edf403570f7bc2661df65d0f86771_tn"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="detail-pro-share">
                  <div className="detail-pro-social">
                    <div>Chia sẽ:</div>
                    <Button
                      shape="circle"
                      icon={<span className="icon-share icon-share-mes"></span>}
                    />
                    <Button
                      shape="circle"
                      icon={<span className="icon-share icon-share-fb"></span>}
                    />
                    <Button
                      shape="circle"
                      icon={<span className="icon-share icon-share-gp"></span>}
                    />
                    <Button
                      shape="circle"
                      icon={<span className="icon-share icon-share-pr"></span>}
                    />
                    <Button
                      shape="circle"
                      icon={<span className="icon-share icon-share-tw"></span>}
                    />
                  </div>
                  <div className="detail-pro-liked">
                    <HeartOutlined />
                    <span>Đã thích (62)</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={{ span: 14 }}>
              <div className="detail-pro-info">
                <Title level={3} className="detail-pro-title">
                  {pro_name}
                </Title>
                <div className="detail-pro-review">
                  <div className="rv-text star-rate">
                    <span className="rv-text-border star-rate-num">5</span>
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                  </div>
                  <div className="rv-text">
                    <span className="rv-num rv-text-border">4,2k</span>
                    <span>Đánh giá</span>
                  </div>
                  <div className="rv-text">
                    <span className="rv-num rv-text-border">5,4k</span>
                    <span>Đã bán</span>
                  </div>
                </div>
                <div className="detail-pro-price">
                  <span className="old-price">
                    <span className="small">đ</span>
                    {pro_price}
                  </span>
                  <span className="new-price">
                    <span className="small">đ</span>
                    {pro_price}
                  </span>
                  <span className="discount-price">10% giảm</span>
                </div>
                <div className="detail-shipping">
                  <div className="detail-shipping-meta">Vận chuyển</div>
                  <div className="detail-shipping-main">
                    <div className="detail-shipping-text free">
                      <div className="text-black">Miễn Phí Vận Chuyển</div>
                      <div>
                        Miễn Phí Vận Chuyển khi đơn đạt giá trị tối thiểu
                      </div>
                    </div>
                    <div className="detail-shipping-text delivery">
                      <div className="text-black">Vận Chuyển Tới Đà Nẵng</div>
                      <div>Phí Vận Chuyển đ45.000</div>
                    </div>
                  </div>
                </div>
                <div className="detail-quantity">
                  <span className="detail-shipping-meta">Số lượng</span>
                  <div className="detail-number">
                    <Button
                      onClick={handleDecrement}
                      icon={<MinusOutlined />}
                    />
                    <Input value={pro_quantity} onChange={handleOnChange} />
                    <Button onClick={handleIncrement} icon={<PlusOutlined />} />
                  </div>
                  <span>100 sản phẩm</span>
                </div>
                <div className="detail-btn-buy">
                  <Button
                    onClick={() => {
                      handleAddToCart({
                        pro_id: id,
                        pro_name,
                        pro_price,
                        pro_avatar,
                        pro_quantity,
                        userID: currentUser.id,
                      });
                    }}
                    icon={<ShoppingCartOutlined />}
                    className="btn-cart"
                  >
                    Thêm vào giỏ hàng
                  </Button>
                  <Button className="btn-bought">Mua ngay</Button>
                </div>
                <Divider />
                <div className="detail-policy">
                  <span className="detail-policy-protect text-black">
                    Shopee đảm bảo
                  </span>
                  <span>3 Ngày Trả Hàng / Hoàn Tiền</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
