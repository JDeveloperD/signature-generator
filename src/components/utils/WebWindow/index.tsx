import React from 'react';
import Window from './styled';

const WebWindow = ({ children }: { children: React.ReactNode }) => {
  return (
    <Window.Wrapper>
      <Window.Top>
        <Window.Button color='danger'></Window.Button>
        <Window.Button color='warning'></Window.Button>
        <Window.Button color='success'></Window.Button>
      </Window.Top>
      <Window.Body>
        <Window.MetaMessage>
          <p className='text-light'>
            Para: <b>Tu destinatario</b>{' '}
          </p>
          <p className='text-light'>
            Asunto: <b>Mira mi nueva firma de correo electrónico</b>{' '}
          </p>
        </Window.MetaMessage>
        <Window.Message>{children}</Window.Message>
      </Window.Body>
    </Window.Wrapper>
  );
};

export default WebWindow;
