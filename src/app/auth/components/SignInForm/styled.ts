import styled from 'styled-components';

const Wrapper = styled.form`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 450px;
  margin: 0 auto;
`;

const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 100px;
`;

export default {
  Wrapper,
  Avatar,
};
