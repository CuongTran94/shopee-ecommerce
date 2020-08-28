import React from 'react';
import { Form, Layout } from 'antd';
import StyledButton from '../../../components/Button';
import { StyledItem, StyledInputPassword } from '../components';

const { Header, Content } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

const PasswordChanging = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  return (
    <Layout>
      <Header style={{ height: '100px' }}>
        <h2>Đổi mật khẩu</h2>
      </Header>
      <Content>
        <Form {...layout} name="basic" onFinish={onFinish}>
          <StyledItem
            label="Mật khẩu hiện tại"
            name="current-password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <StyledInputPassword />
          </StyledItem>
          <StyledItem
            label="Mật khẩu mới"
            name="new-password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <StyledInputPassword />
          </StyledItem>
          <StyledItem
            label="Xác nhận mật khẩu"
            name="confirm-password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <StyledInputPassword />
          </StyledItem>

          <StyledItem {...tailLayout}>
            <StyledButton type="primary" htmlType="submit">
              Submit
            </StyledButton>
          </StyledItem>
        </Form>
      </Content>
    </Layout>
  );
};

export default PasswordChanging;
