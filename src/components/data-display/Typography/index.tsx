import { Color } from '@styled/styled';
import styled from 'styled-components';

const Typography = styled.p<{ color?: Color }>`
  color: ${({ color, theme }) => color && theme.colors[color]};
`;

export default Typography;
