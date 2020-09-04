import styled from 'styled-components';
import { Form, Input, Layout } from 'antd';

import { SHOPEE_ORANGE } from '../../../constants/color';

const { Header, Content, Footer } = Layout;

const StyledLayout = styled(Layout)`
  padding-left: 100px;
  background-color: white;
`;

const SytledHeader = styled(Header)`
  height: 100px;
`;
const StyledContent = styled(Content)``;

const StyledItem = styled(Form.Item)`
  width: 500px;

  .ant-form-item-required,
  label {
    color: #757575;
    margin-right: 10px;
    &::before,
    &::after {
      content: none !important;
    }
  }
`;

const StyledInputPassword = styled(Input.Password)`
  height: 40px;
  .ant-input {
    border-color: red !important;
  }
`;

const Container = styled.div`
  margin-top: 50px;
`;

const StylePrice = styled.div`
  color: ${SHOPEE_ORANGE};
  font-size: ${props => props.fontSize}px;
`;

export {
  StyledInputPassword,
  StyledItem,
  Container,
  StyledLayout,
  SytledHeader,
  StyledContent,
  StylePrice
};
