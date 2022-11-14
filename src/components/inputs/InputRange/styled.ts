import styled from 'styled-components';

export const Slider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 2px;
  background-color: gray;
  outline: none;
  transition: 0.3s ease-in-out;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
  }
`;
