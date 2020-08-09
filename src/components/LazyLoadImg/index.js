import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import imgHolder from '../../assets/images/img-default.svg';
import './styles.scss';

const LazyLoadImg = (props) => {
    const { url, alt } = props;

    const renderPlaceHol = () => {
        return (
            <div className="img-wrap">
                <div className="img-placehol"></div>
            </div>
        );
    };

    return (
        <div>
            <LazyLoad throttle={500} placeholder={renderPlaceHol()}>
                <img src={url} alt={alt} />
            </LazyLoad>
        </div>
    );
};

export default LazyLoadImg;