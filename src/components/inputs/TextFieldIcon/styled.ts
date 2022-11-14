import styled from 'styled-components';

const Wrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 0.5rem;
`;

const PencilIcon = styled.span`
  opacity: 0;
  transform: scale(0);
  transition: all 0.2s ease-in-out;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
`;

const Input = styled.input`
  width: 90%;
  background: transparent;
  border-style: none;
  color: ${({ theme }) => theme.colors.white};

  &::placeholder {
    color: #c3c3c3;
  }

  &:focus {
    outline: none;
  }

  &:focus + ${PencilIcon} {
    transform: scale(1);
    opacity: 1;
  }
`;

export default {
  Wrapper,
  PencilIcon,
  Label,
  Input,
};
