import React, { FC, ReactNode } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Col lg={5}>{children}</Col>
        <Col lg={7} className='d-none d-lg-block pe-0 vh-100 bg-gradient'></Col>
      </Row>
    </Container>
  );
};

export default AuthLayout;
