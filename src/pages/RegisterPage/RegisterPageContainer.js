import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../../components/Navbar';
import FormCommon from '../../components/Form';
import { signUpUser, setLoading, setAuthError } from '../../redux/User/user.actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const RegisterPageContainer = () => {
    const checkLog = useSelector(state => state.user.authErr);
    const isLoading = useSelector(state => state.user.isLoading);
    const currentUser = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSignup = (user) => {
        const action = signUpUser(user);
        dispatch(action);
    };

    const handleChangeLoading = () => {
        const action = setLoading();
        dispatch(action);
    };

    useEffect(() => {
        dispatch(setAuthError());
    }, []);

    useEffect(() => {
        if (currentUser) {
            history.push('/');
        }
    }, [currentUser]);

    return (
        <div className="shopee-register">
            <NavBar
                isLogin={false}
            />
            <FormCommon
                isLogin={false}
                isError={checkLog}
                isLoading={isLoading}
                onSetLoading={handleChangeLoading}
                onAction={handleSignup}
            />
        </div>
    );
};

RegisterPageContainer.propTypes = {

};

export default RegisterPageContainer;