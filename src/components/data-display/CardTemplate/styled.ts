import styled, { css } from 'styled-components';

export const ButtonToggle = styled.button<{ active: boolean }>`
  width: 100%;
  height: 90px;
  position: relative;
  border: none;
  background: transparent;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  ${({ active }) =>
    active &&
    css`
      img {
        filter: brightness(70%);
      }
    `}
`;

export const Check = styled.span<{ active: boolean }>`
  color: white;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.purlple};
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  font-size: 0px;
  overflow: hidden;
  transform: translate(-50%, -50%);
  transition: 0.3s cubic-bezier(0.64, 0.57, 0.67, 1.53) 0s;

  ${({ active }) =>
    active &&
    css`
      width: 30px;
      height: 30px;
      font-size: initial;
    `}
`;
