import styled from 'styled-components';
import { device } from '../../style/breakpoint';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.mobileL} {
    flex-direction: row;
  }
`;
