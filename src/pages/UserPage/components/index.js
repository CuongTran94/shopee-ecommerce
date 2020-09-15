import styled from 'styled-components';
import { Form, Input, Layout } from 'antd';

import { SHOPEE_ORANGE } from '../../../constants/color';

const { Header, Content, Footer } = Layout;

const StyledLayout = styled(Layout)`  
  background-color: white;
  padding: 0 30px;
`;

const StyledHeader = styled(Header)`
    height: 80px;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid #EFEFEF;
    background: #fff;
`;
const StyledContent = styled(Content)``;

const StyledItem = styled(Form.Item)`
  width: 500px;

  .ant-form-item-required,
  label {
    font-size: 15px;
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
  StyledHeader,
  StyledContent,
  StylePrice
};
