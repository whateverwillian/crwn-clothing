import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
  padding: 10px;
  cursor: pointer;
`

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;