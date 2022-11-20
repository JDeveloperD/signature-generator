import { useFirm } from '../../../app/firm/contexts/firm.provider';
import { Typography } from '../../data-display';
import { InputColor, InputRange } from '../../inputs';
import { FC } from 'react';
import { ItemsTranstition } from './TabBody';
import { item, list } from './animation';
import { motion } from 'framer-motion';

const TabThree: FC<ItemsTranstition> = ({ translateAnimation }) => {
  const {
    state: { theme },
    setTheme,
  } = useFirm();
  const itemAnimate = item({ translateAnimation });
  return (
    <motion.div initial='hidden' animate='visible' variants={list}>
      <motion.div variants={itemAnimate}>
        <Typography as='h4' color='white' className='mb-5'>
          Define un estilo para tu firma
        </Typography>
      </motion.div>
      <motion.div variants={itemAnimate}>
        <InputColor
          label='Elige el color del tema'
          name='themeColor'
          value={theme.themeColor}
          onChange={e => {
            setTheme('themeColor', e.target.value);
          }}
          className='mb-5'
        />
      </motion.div>

      <motion.div variants={itemAnimate}>
        <InputColor
          label='Elige el color del texto'
          name='fontColor'
          value={theme.fontColor}
          onChange={e => {
            setTheme('fontColor', e.target.value);
          }}
          className='mb-5'
        />
      </motion.div>

      <motion.div variants={itemAnimate}>
        <InputColor
          label='Elige el color de los elaces'
          name='linkColor'
          value={theme.linkColor}
          onChange={e => {
            setTheme('linkColor', e.target.value);
          }}
          className='mb-5'
        />
      </motion.div>

      <motion.div variants={itemAnimate}>
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
      </motion.div>
    </motion.div>
  );
};

export default TabThree;
