import React, { FC } from 'react';
import { Text, Wrapper } from './styled';
import './Tooltip.css';

type TooltipProps = {
  symbol: string;
  text: string;
};

const Tooltip: FC<TooltipProps> = ({ symbol, text }) => {
  return (
    <Wrapper>
      <span> {symbol} </span>
      <Text> {text} </Text>
    </Wrapper>
  );
};

export default Tooltip;
