import React from 'react';
import styled from 'styled-components';
import { Form, Input, Radio, Typography, DatePicker, Layout } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import StyleButton from '../../../components/Button/index';
import { StyledItem, StyledLayout, StyledHeader } from '../components';
import { updateUserInfo } from '../../../redux/User/user.actions';

const { Header, Content } = Layout;
const { TextArea } = Input;
const { Title } = Typography;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
};

const tailLayout = {
  wrapperCol: { offset: 6, span: 16 }
};

const Container = styled.div``;

const dateFormat = 'DD/MM/YYYY';

const ProfilePage = () => {
  const user = useSelector(state => state.user.currentUser);
  const isLoading = useSelector(state => state.user.isLoading);
  const {
    username,
    fullName,
    gender,
    phoneNumber,
    email,
    address,
    dateOfBirth,
    id
  } = user;
  const dispatch = useDispatch();

  const onFinish = values => {
    const infoUser = {
      ...values,
      dateOfBirth: new Date(values.dateOfBirth)
    };
    dispatch(updateUserInfo(infoUser, id));
  };

  return (
    <Container>
      <StyledLayout>
        <StyledHeader>
          <Title level={3} style={{ marginBottom: 4 }}>Hồ sơ của tôi</Title>
          <span style={{ lineHeight: '17px', height: '17px' }}>Quản lý thông tin hồ sơ để bảo mật tài khoản</span>
        </StyledHeader>

        <Content>
          <Form
            initialValues={{
              username,
              fullName,
              gender,
              phoneNumber,
              email,
              address,
              dateOfBirth: moment(new Date(dateOfBirth.seconds * 1000))
            }}
            onFinish={onFinish}
            {...layout}
            name="form-shipping"
            style={{ marginTop: 24 }}
          >
            <StyledItem name="username" label="Tên đăng nhập">
              <Input style={{ width: ' 500px' }} disabled />
            </StyledItem>

            <StyledItem label="Tên" name="fullName">
              <Input style={{ width: ' 500px' }} />
            </StyledItem>

            <StyledItem label="Số điện thoại" name="phoneNumber" disabled>
              <Input style={{ width: ' 500px' }} />
            </StyledItem>
            <StyledItem label="Email" name="email">
              <Input style={{ width: ' 500px' }} disabled />
            </StyledItem>

            <StyledItem name="address" label="Địa chỉ">
              <TextArea style={{ width: '500px' }} />
            </StyledItem>

            <StyledItem label="Giới tính" name="gender">
              <Radio.Group value="male">
                <Radio value="male">Nam</Radio>
                <Radio value="female">Nữ</Radio>
                <Radio value="diverse">Khác</Radio>
              </Radio.Group>
            </StyledItem>

            <StyledItem name="dateOfBirth" label="Ngày sinh">
              <DatePicker style={{ width: ' 500px' }} format={dateFormat} />
            </StyledItem>

            <StyledItem {...tailLayout}>
              <StyleButton loading={isLoading} htmlType="submit">
                Lưu
              </StyleButton>
            </StyledItem>
          </Form>
        </Content>
      </StyledLayout>
    </Container>
  );
};

export default ProfilePage;
