import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../../components/Navbar';
import FormCommon from '../../components/Form';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, setLoading, setAuthError } from '../../redux/User/user.actions';
import { useLocation, useHistory } from 'react-router-dom';

const LoginPageContainer = (props) => {
    const checkLog = useSelector(state => state.user.authErr);
    const isLoading = useSelector(state => state.user.isLoading);
    const currentUser = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        if (currentUser) {
            const url = location.state ? location.state.prevLocation : '/';
            history.push(url);
        }
    }, [currentUser]);

    useEffect(() => {
        dispatch(setAuthError());
    }, []);

    const handleSignin = (user) => {
        const action = loginUser(user);
        dispatch(action);
    };

    const handleChangeLoading = () => {
        const action = setLoading();
        dispatch(action);
    };

    return (
        <div className="shopee-login">
            <NavBar isLogin={true} />
            <FormCommon
                isLogin={true}
                isError={checkLog}
                isLoading={isLoading}
                onAction={handleSignin}
                onSetLoading={handleChangeLoading}
            />
        </div>
    );
};

LoginPageContainer.propTypes = {

};

export default LoginPageContainer;