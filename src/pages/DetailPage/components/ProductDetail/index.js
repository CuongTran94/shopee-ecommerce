import React from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';
import './styles.scss';

const { Title } = Typography;

const ProductDetail = () => {
    return (
        <div className="detail-product-desc">
            <div className="container">
                <div className="detail-page-inner product-desc">
                    <Title className="product-desc-title" level={4}>Chi tiết sản phẩm</Title>
                    <div className="product-desc-specifi">
                        <div className="product-desc-row">
                            <div className="product-desc-item">Danh mục</div>
                            <div className="product-desc-item">Shopee</div>
                        </div>
                        <div className="product-desc-row">
                            <div className="product-desc-item">Thương hiệu</div>
                            <div className="product-desc-item">No brand</div>
                        </div>
                        <div className="product-desc-row">
                            <div className="product-desc-item">Bảo hành</div>
                            <div className="product-desc-item">1 tháng</div>
                        </div>
                        <div className="product-desc-row">
                            <div className="product-desc-item">Kho hàng</div>
                            <div className="product-desc-item">26390</div>
                        </div>
                        <div className="product-desc-row">
                            <div className="product-desc-item">Gửi từ</div>
                            <div className="product-desc-item">Thành Phố Đà Nẵng</div>
                        </div>
                    </div>
                    <Title className="product-desc-title" level={4}>Mô tả sản phẩm</Title>
                    <div className="product-desc-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus risus vitae nunc viverra, ut cursus dolor commodo. In non velit quis justo ultricies rhoncus. Duis eget placerat metus, ut ullamcorper nunc. Duis fringilla tristique malesuada. Maecenas lobortis nunc eu libero euismod sagittis. Sed diam ligula, posuere quis nibh vel, convallis maximus dolor. Fusce mattis, elit vitae faucibus tempor, nunc libero viverra eros, viverra dictum felis elit a purus. Duis diam lacus, tempus vel mattis lacinia, tristique eu nisl. Donec et gravida nisl, ut ullamcorper eros. Nulla vel bibendum erat. Cras ac orci non risus maximus accumsan sed a libero. Pellentesque condimentum libero ipsum, non aliquet arcu facilisis eleifend. Donec mattis laoreet lorem.</p>

                        <p>Fusce tempor fermentum libero, non facilisis purus sodales eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin fermentum mi non vehicula interdum. Pellentesque tempus leo ante, in interdum lectus egestas non. Donec et imperdiet turpis. Ut id ullamcorper lacus. Nullam odio ante, vulputate vestibulum enim eget, tincidunt eleifend massa.</p>

                        <p>Phasellus ultrices velit sed risus semper fermentum. Praesent varius ante dolor, id eleifend sapien faucibus in. Fusce vel orci sagittis, placerat sem a, faucibus nunc. Duis aliquam dui ac dignissim tincidunt. Donec tincidunt dui id odio elementum varius. Proin ac feugiat arcu. In vulputate ornare commodo. Duis facilisis euismod turpis, ac malesuada orci faucibus vitae. Quisque ut fermentum justo. Fusce a fringilla felis, sit amet mollis dolor. Phasellus dictum dictum tempus. Nulla quis mi ex. Donec ut diam pharetra, rutrum orci sit amet, rutrum quam.</p>

                        <p>Nunc sed ultricies mi. Suspendisse semper vitae risus porta venenatis. In elementum eleifend ante eu lacinia. Donec ornare placerat enim, ut maximus lorem tristique eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas egestas enim at tellus faucibus molestie. Nullam vel molestie arcu.</p>

                        <p>Aenean ipsum ex, volutpat ac massa vel, efficitur hendrerit ex. Pellentesque vel leo et leo viverra condimentum id ut leo. Sed lacinia neque justo. Vestibulum non elementum libero. Suspendisse vel sodales odio. Curabitur sit amet sem ut metus eleifend luctus et ut leo. Nulla facilisi. Praesent et quam et dolor bibendum consequat. Proin ornare leo eu enim feugiat, et placerat velit scelerisque. Fusce aliquam placerat tellus vitae aliquam. Pellentesque sit amet tellus sit amet dui volutpat elementum. Proin gravida euismod porta. Vestibulum ultrices justo lorem, id viverra elit suscipit non. Donec volutpat sem a nisi molestie faucibus. Integer eleifend, sem a cursus ornare, urna mi tincidunt est, aliquet tempor nibh diam eu est. In eget iaculis tortor.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductDetail.propTypes = {
    
};

export default ProductDetail;