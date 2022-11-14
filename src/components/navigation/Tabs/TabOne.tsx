import React from 'react';
import { CardTemplate, Typography } from '../../data-display';
import template1 from '../../../static/template-1.svg';
import { useFirm } from '../../../app/firm/contexts/firm.provider';

const TabOne = () => {
  const {
    state: { template },
    setTemplate,
  } = useFirm();
  return (
    <div>
      <Typography as='h4' color='white' className='mb-5'>
        Selecciona tu plantilla
      </Typography>
      <CardTemplate
        active={template === 1}
        src={template1}
        text='Plantilla 1'
        onClick={() => setTemplate(1)}
        className='mb-4'
      />
    </div>
  );
};

export default TabOne;
