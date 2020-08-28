import styled from 'styled-components';
import { Form, Input, Layout } from 'antd';

const StyledLayout = styled(Layout)`
  padding-left: 100px;
  background-color: white;
`;

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
  margin-top: 25px;
`;

export { StyledInputPassword, StyledItem, Container, StyledLayout };
