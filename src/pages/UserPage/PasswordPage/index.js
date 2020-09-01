import React, { useEffect } from 'react';
import { Form, Layout } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import StyledButton from '../../../components/Button';
import { StyledItem, StyledInputPassword } from '../components';
import { changePassword, logoutUser } from '../../../redux/User/user.actions';
import { handleSuccess, handleError } from './Modal';
import { ruleRequired, matchRule } from './Rule';
import { layout, tailLayout } from './Layout';

const { Header, Content } = Layout;

const PasswordChanging = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.user.isLoading);
  const error = useSelector(state => state.user.error);
  const success = useSelector(state => state.user.success) || false;
  const onFinish = values => {
    dispatch(changePassword(values.newPassword, values.currentPassword));
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    if (error) {
      handleError(error);
      return;
    }
    if (success) {
      handleSuccess(handleLogout);
    }
  }, [error, success]);

  return (
    <Layout>
      <Header style={{ height: '100px' }}>
        <h2>Đổi mật khẩu</h2>
      </Header>
      <Content>
        <Form {...layout} name="basic" onFinish={onFinish}>
          <StyledItem
            label="Mật khẩu hiện tại"
            name="currentPassword"
            rules={ruleRequired}
            hasFeedback
          >
            <StyledInputPassword />
          </StyledItem>
          <StyledItem
            label="Mật khẩu mới"
            name="newPassword"
            rules={ruleRequired}
          >
            <StyledInputPassword />
          </StyledItem>
          <StyledItem
            label="Xác nhận mật khẩu"
            name="confirmPassword"
            dependencies={['newPassword']}
            hasFeedback
            rules={matchRule}
          >
            <StyledInputPassword />
          </StyledItem>

          <StyledItem {...tailLayout}>
            <StyledButton loading={isLoading} type="primary" htmlType="submit">
              Submit
            </StyledButton>
          </StyledItem>
        </Form>
      </Content>
    </Layout>
  );
};

export default PasswordChanging;
