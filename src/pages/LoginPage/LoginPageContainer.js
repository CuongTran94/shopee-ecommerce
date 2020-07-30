import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../../components/Navbar';
import FormCommon from '../../components/Form';

const LoginPageContainer = () => {
    return (
        <div className="shopee-login">
            <NavBar />
            <FormCommon />
        </div>
    );
};

LoginPageContainer.propTypes = {
    
};

export default LoginPageContainer;