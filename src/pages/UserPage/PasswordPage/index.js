import React, { useEffect } from 'react';
import { Form, Layout, Typography } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import StyledButton from '../../../components/Button';
import { StyledItem, StyledInputPassword, StyledLayout, StyledHeader } from '../components';
import { changePassword, logoutUser } from '../../../redux/User/user.actions';
import { handleSuccess, handleError } from './Modal';
import { ruleRequired, matchRule } from './Rule';
import { layout, tailLayout } from './Layout';

const { Header, Content } = Layout;
const { Title } = Typography;

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
    <StyledLayout>
      <StyledHeader>
        <Title level={3} style={{ marginBottom: 4 }}>Đổi mật khẩu</Title>
        <span style={{ lineHeight: '17px', height: '17px' }}>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</span>
      </StyledHeader>
      <Content>
        <Form {...layout} name="basic" onFinish={onFinish} style={{ marginTop: 24 }}>
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
    </StyledLayout>
  );
};

export default PasswordChanging;
