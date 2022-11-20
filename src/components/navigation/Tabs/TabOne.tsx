import template1 from '@static/template-1.svg';
import template2 from '@static/template-2.svg';
import template3 from '@static/template-3.svg';
import { useFirm } from '@app/firm/contexts/firm.provider';
import { motion } from 'framer-motion';
import { CardTemplate, Typography } from '@components/data-display';
import { FC } from 'react';
import { ItemsTranstition } from './TabBody';
import { item, list } from './animation';

const TabOne: FC<ItemsTranstition> = ({ translateAnimation }) => {
  const {
    state: { template },
    setTemplate,
  } = useFirm();

  const itemAnimate = item({ translateAnimation });

  return (
    <motion.div initial='hidden' animate='visible' variants={list}>
      <motion.div variants={itemAnimate}>
        <Typography as='h4' color='white' className='mb-5'>
          Selecciona tu plantilla
        </Typography>
      </motion.div>
      <motion.div variants={itemAnimate}>
        <CardTemplate
          active={template === 1}
          src={template1}
          text='Plantilla 1'
          onClick={() => setTemplate(1)}
          className='mb-4'
        />
      </motion.div>
      <motion.div variants={itemAnimate}>
        <CardTemplate
          active={template === 2}
          src={template2}
          text='Plantilla 2'
          onClick={() => setTemplate(2)}
          className='mb-4'
        />
      </motion.div>
      <motion.div variants={itemAnimate}>
        <CardTemplate
          active={template === 3}
          src={template3}
          text='Plantilla 3'
          onClick={() => setTemplate(3)}
          className='mb-4'
        />
      </motion.div>
    </motion.div>
  );
};

export default TabOne;
