import styled from 'styled-components';

const Color = styled.input.attrs({ type: 'color' })`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  border-style: none;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  &::-webkit-color-swatch {
    border: none;
    border-radius: 50%;
  }
`;

const Input = styled.input.attrs({ type: 'text' })`
  text-transform: uppercase;
  border-radius: 4px;
  border-style: none;
  max-width: 100px;
  color: ${({ theme }) => theme.colors['dark-800']};
  padding: 0.25rem 1rem;
`;

export default {
  Color,
  Input,
};
