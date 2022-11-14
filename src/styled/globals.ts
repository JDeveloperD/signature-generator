import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  .bg-gradient {
    background: ${({ theme }) => theme.colors.gradient} !important;
  }
`;
