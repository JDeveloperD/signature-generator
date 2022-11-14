import styled from 'styled-components';

export const Text = styled.div`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translate(0%, -50%);
  width: 200px;
  font-size: 12px;
  padding: 1.25rem 1.5rem;
  border-radius: 4px;
  background: white;
  color: ${({ theme }) => theme.colors['dark-800']};
  transition: 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  visibility: 0;
  opacity: 0;
  pointer-events: none;

  &::before {
    content: '';
    display: block;
    position: absolute;
    right: -16px;
    top: 50%;
    transform: translateY(-50%);
    border-left: 8px solid white;
    border-right: 8px solid transparent;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
  }
`;

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.purlple};
  width: 18px;
  height: 18px;
  font-size: 13px;
  border-radius: 50%;
  position: relative;
  display: block;
  margin-left: auto;
  text-align: center;

  &:hover {
    ${Text} {
      transform: translate(-10%, -50%);
      opacity: 1;
      visibility: visible;
    }
  }
`;
