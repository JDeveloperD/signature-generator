import React, { FC, ReactNode } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Tabs } from '../components/navigation';
import Header from '../components/Header';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Container fluid className='bg-gradient'>
      <Row>
        <Col md={5} lg={4} xl={3} className='px-0'>
          <Tabs />
        </Col>
        <Col md={7} lg={8} xl={9}>
          <div className='px-md-4 px-lg-5 pb-4'>
            <Header />
            {children}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;
