import React from 'react';
import { Link } from 'react-router-dom';
import adv1 from '../../assets/images/advertisement_1.jpg';
import './styles.scss';

const Banner = (props) => {
    const { classBanner } = props;

    return (
        <div className={classBanner}>
            <Link to="/">
                <img src={adv1} alt="" />
            </Link>
        </div>
    );
}

export default Banner;