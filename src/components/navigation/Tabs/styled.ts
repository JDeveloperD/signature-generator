import styled from 'styled-components';

const Wrapper = styled.aside`
  position: sticky;
  z-index: 90;
  width: 100%;
  top: 0;
`;

const Head = styled.header<{ tabActive: number }>`
  background-color: ${({ theme }) => theme.colors['dark-800']};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  position: relative;

  &::before {
    content: '';
    display: block;
    background: ${({ theme }) => theme.colors['dark-900']};
    width: 25%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 1;
    transition: left 0.5s cubic-bezier(0.29, 0.15, 0.2, 0.84);
    left: ${({ tabActive }) => (tabActive - 1) * 25}%;
  }
`;

const ButtonOption = styled.button`
  border-style: none;
  background: transparent;
  border-left: 1px solid ${({ theme }) => theme.colors['dark-900']};
  border-right: 1px solid ${({ theme }) => theme.colors['dark-900']};
  height: 70px;
  padding: 1.5rem;
  cursor: pointer;
  color: var(--white);
  text-align: center;
  position: relative;
  z-index: 2;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Body = styled.div`
  height: calc(100vh - 70px);
  background-color: ${({ theme }) => theme.colors['dark-900']};
  padding: 3rem 4rem;
  overflow-y: auto;
`;

export default {
  Wrapper,
  Head,
  ButtonOption,
  Body,
};
