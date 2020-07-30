import React from 'react';
import './styles.scss';
import { List, Card } from 'antd';
import { Link } from 'react-router-dom';
import product1 from '../../assets/images/product_1.jpg';
import product2 from '../../assets/images/product_2.jpg';
import product3 from '../../assets/images/product_3.jpg';
import product4 from '../../assets/images/product_4.jpg';
import product5 from '../../assets/images/product_5.jpg';
import product6 from '../../assets/images/product_6.jpg';
const { Meta } = Card;

const data = [
    {
      title: "Nước tẩy trang cho mọi loại da L'Oreal Paris 3-in-1 Micellar Water 400ml",
      img: product1
    },
    {
      title: "Kính cường lực iphone 6 6s 7 8 6 plus 6s plus 7 Plus 8 Plus X Xr XsMax 11 11 pro 11 pro max - 10D",
      img: product2
    },
    {
      title: "Bộ ga giường và vỏ gối , Bộ ga trải giường chọn mẫu theo phân loại",
      img: product3
    },
    {
      title: "Chống nắng serum 3 trong 1 Senka White Beauty CC 40g",
      img: product4
    },
    {
        title: "[MKB Gift] Tặng Ba Mẹ Bí Quyết: Comfort Cho Da Nhạy Cảm, Nước Giặt Omo Dịu Nhẹ Trên Da, Nước Lau Sàn Sunlight Hương Hoa",
        img: product5
    },
    {
        title: "Váy 2 dây, đầm xuông - chất đũi lụa trơn basic nữ - VDX",
        img: product6
    },
    {
        title: "Bộ ga giường và vỏ gối , Bộ ga trải giường chọn mẫu theo phân loại",
        img: product3
    },
    {
        title: "Nước tẩy trang cho mọi loại da L'Oreal Paris 3-in-1 Micellar Water 400ml",
        img: product1
    },
    {
        title: "[MKB Gift] Tặng Ba Mẹ Bí Quyết: Comfort Cho Da Nhạy Cảm, Nước Giặt Omo Dịu Nhẹ Trên Da, Nước Lau Sàn Sunlight Hương Hoa",
        img: product5
    },
    {
        title: "Kính cường lực iphone 6 6s 7 8 6 plus 6s plus 7 Plus 8 Plus X Xr XsMax 11 11 pro 11 pro max - 10D",
        img: product2
    },
    {
        title: "Chống nắng serum 3 trong 1 Senka White Beauty CC 40g",
        img: product4
    },
    {
        title: "Váy 2 dây, đầm xuông - chất đũi lụa trơn basic nữ - VDX",
        img: product6
    },
    {
        title: "Nước tẩy trang cho mọi loại da L'Oreal Paris 3-in-1 Micellar Water 400ml",
        img: product1
    },
    {
        title: "Kính cường lực iphone 6 6s 7 8 6 plus 6s plus 7 Plus 8 Plus X Xr XsMax 11 11 pro 11 pro max - 10D",
        img: product2
    },
    {
        title: "Bộ ga giường và vỏ gối , Bộ ga trải giường chọn mẫu theo phân loại",
        img: product3
    },
    {
        title: "Chống nắng serum 3 trong 1 Senka White Beauty CC 40g",
        img: product4
    },
    {
        title: "[MKB Gift] Tặng Ba Mẹ Bí Quyết: Comfort Cho Da Nhạy Cảm, Nước Giặt Omo Dịu Nhẹ Trên Da, Nước Lau Sàn Sunlight Hương Hoa",
        img: product5
    },
    {
        title: "Váy 2 dây, đầm xuông - chất đũi lụa trơn basic nữ - VDX",
        img: product6
    },
    {
        title: "Bộ ga giường và vỏ gối , Bộ ga trải giường chọn mẫu theo phân loại",
        img: product3
    },
    {
        title: "Nước tẩy trang cho mọi loại da L'Oreal Paris 3-in-1 Micellar Water 400ml",
        img: product1
    },
    {
        title: "[MKB Gift] Tặng Ba Mẹ Bí Quyết: Comfort Cho Da Nhạy Cảm, Nước Giặt Omo Dịu Nhẹ Trên Da, Nước Lau Sàn Sunlight Hương Hoa",
        img: product5
    },
    {
        title: "Kính cường lực iphone 6 6s 7 8 6 plus 6s plus 7 Plus 8 Plus X Xr XsMax 11 11 pro 11 pro max - 10D",
        img: product2
    },
    {
        title: "Chống nắng serum 3 trong 1 Senka White Beauty CC 40g",
        img: product4
    },
    {
        title: "Váy 2 dây, đầm xuông - chất đũi lụa trơn basic nữ - VDX",
        img: product6
    },
];

const ListProduct = () => {

    const renderDescription = () => {
        return (
            <React.Fragment>
                <div className="desc-right">
                    <span className="text">đ</span>
                    <span className="price">10.000</span>
                </div>
                <div className="sale">
                    Đã bán 84,1k
                </div>                
            </React.Fragment>            
        );
    };

    return (
        <List
            className="list-product" 
            grid={{column: 6}}
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <Link to="/">
                        <Card 
                            cover={<img alt="" src={item.img} />}
                            bordered={false}
                            className="list-product-card"
                        >
                            <Meta title={item.title} description={renderDescription()} />
                        </Card>
                    </Link>
                </List.Item>
            )}
        />
    );
};

export default ListProduct;