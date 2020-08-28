import React from 'react';
import styled from 'styled-components';
import {
  Form,
  Input,
  Button,
  Radio,
  Typography,
  DatePicker,
  Layout
} from 'antd';
import {useSelector, useDispatch} from "react-redux";

import StyleButton from '../../../components/Button/index';
import { StyledItem, StyledLayout } from '../components';

const { Header, Content } = Layout;

const { Title } = Typography;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
};

const tailLayout = {
  wrapperCol: { offset: 6, span: 16 }
};

const Container = styled.div``;

const ProfilePage = () => {



  const onFinish = values => {
    console.log(values);
  };

  return (
    <Container>
      <StyledLayout>
        <Header style={{ height: '100px' }}>
          <Title level={3}>Hồ sơ của tôi</Title>
        </Header>

        <Content>
          <Form onFinish={onFinish} {...layout} name="form-shipping">
            <StyledItem label="Tên đăng nhập">
              <span>nhaphan0073</span>
            </StyledItem>

            <StyledItem
              label="Tên"
              name="name"
              rules={[
                { required: true, message: 'Please input your username!' }
              ]}
            >
              <Input style={{ width: ' 300px' }} />
            </StyledItem>
            <StyledItem label="Số điện thoại" name="phone_number">
              <span>0329313111</span>
            </StyledItem>
            <StyledItem label="Email" name="email">
              <span>nhaphan0073@gmail.com</span>
            </StyledItem>

            <StyledItem label="Giới tính" name="gender">
              <Radio.Group value="male">
                <Radio value="male">Nam</Radio>
                <Radio value="female">Nữ</Radio>
                <Radio value="diverse">Khác</Radio>
              </Radio.Group>
            </StyledItem>

            <StyledItem label="Ngày sinh">
              <DatePicker />
            </StyledItem>
            <StyledItem {...tailLayout}>
              <StyleButton htmlType="submit">Lưu</StyleButton>
            </StyledItem>
          </Form>
        </Content>
      </StyledLayout>
    </Container>
  );
};

export default ProfilePage;
