import styled from 'styled-components';
import { Button } from 'antd';
import { SHOPEE_ORANGE, SHOPEE_WHITE } from '../../constants/color';

const StyledButton = styled(Button)`
  height: 36px;
  background: ${SHOPEE_ORANGE};
  color: ${SHOPEE_WHITE};
  text-transform: capitalize;
  &:hover,
  &:focus {
    color: ${SHOPEE_WHITE};
    background: ${SHOPEE_ORANGE};
    border-color: ${SHOPEE_ORANGE};
  }
`;

export default StyledButton;
