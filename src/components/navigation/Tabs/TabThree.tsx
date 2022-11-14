import { useFirm } from '../../../app/firm/contexts/firm.provider';
import React from 'react';
import { Typography } from '../../data-display';
import { InputColor, InputRange } from '../../inputs';

const TabThree = () => {
  const {
    state: { theme },
    setTheme,
  } = useFirm();

  return (
    <div>
      <Typography as='h4' color='white' className='mb-5'>
        Define un estilo para tu firma
      </Typography>

      <InputColor
        label='Elige el color del tema'
        name='themeColor'
        value={theme.themeColor}
        onChange={e => {
          setTheme('themeColor', e.target.value);
        }}
        className='mb-5'
      />

      <InputColor
        label='Elige el color del texto'
        name='fontColor'
        value={theme.fontColor}
        onChange={e => {
          setTheme('fontColor', e.target.value);
        }}
        className='mb-5'
      />

      <InputColor
        label='Elige el color de los elaces'
        name='linkColor'
        value={theme.linkColor}
        onChange={e => {
          setTheme('linkColor', e.target.value);
        }}
        className='mb-5'
      />

      <InputRange
        label='Elige el tamaño de la fuente'
        className='pt-4'
        value={theme.themeSize}
        name='themeSize'
        step={0.001}
        min={0.9}
        max={1.1}
        onChange={e => {
          setTheme('themeSize', e.target.value);
        }}
      />
    </div>
  );
};

export default TabThree;
