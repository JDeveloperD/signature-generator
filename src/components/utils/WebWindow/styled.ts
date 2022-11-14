import { Color } from '@styled/styled';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

const Top = styled.header`
  padding: 1rem;
  background: ${({ theme }) => theme.colors['dark-900']};
  border-bottom: 1px solid ${({ theme }) => theme.colors['dark-800']};
`;

const Button = styled.span<{ color: Color }>`
  width: 8px;
  height: 8px;
  margin-right: 0.3rem;
  border-radius: 40px;
  display: inline-block;
  background: ${({ theme, color }) => theme.colors[color]};
`;

const Body = styled.main`
  background: white;
`;

const MetaMessage = styled.div`
  background: ${({ theme }) => theme.colors['dark-900']};
  padding: 1rem 2rem;
`;

const Message = styled.main`
  width: 100%;
  padding: 8rem 1.5rem 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export default {
  Wrapper,
  Top,
  Button,
  Body,
  MetaMessage,
  Message,
};
