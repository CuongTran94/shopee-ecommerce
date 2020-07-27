import React from 'react';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import './styles.scss';

const ArrowCarousel = (props) => {
    const { classname, onClick, icon } = props;
    return (
        <div 
            className={classname}
            onClick={onClick}
        >
            {icon === "inext" ? <RightOutlined /> : <LeftOutlined />}
        </div>
    );
}

export default ArrowCarousel;