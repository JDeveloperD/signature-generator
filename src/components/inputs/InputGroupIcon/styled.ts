import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  width: 100%;
`;

const Icon = styled.i`
  margin-right: 0.5rem;
  position: absolute;
  top: 1rem;
  color: ${({ theme }) => theme.colors['gray-600']};
`;

const Placeholder = styled.label`
  position: absolute;
  top: 1rem;
  left: 24px;
  color: ${({ theme }) => theme.colors['gray-600']};
  font-size: 14px;
`;

const Error = styled.small`
  width: 100%;
  color: ${({ theme }) => theme.colors.danger};
  margin-top: 0.5rem;
`;

const Input = styled.input`
  border: 0;
  width: 100%;
  border-radius: 0;
  padding: 1rem 0 1rem 1.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors['gray-200']};

  &.active {
    border-bottom-color: ${({ theme }) => theme.colors.success};
  }
  &.error {
    border-bottom-color: ${({ theme }) => theme.colors.danger};
  }

  &.error + ${Placeholder} {
    color: ${({ theme }) => theme.colors.danger};
  }

  &:focus {
    outline: none;
  }

  &:focus ~ ${Icon}, &.active ~ ${Icon} {
    color: ${({ theme }) => theme.colors.success};
  }

  &:focus + ${Placeholder}, &.active + ${Placeholder} {
    top: -10px;
    color: ${({ theme }) => theme.colors.success};
    font-size: 12px;
    transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;

export default {
  Wrapper,
  Icon,
  Placeholder,
  Error,
  Input,
};
