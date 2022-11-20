import { TextFieldIcon } from '../../inputs';
import { Typography } from '../../data-display';
import { useFirm } from '../../../app/firm/contexts/firm.provider';
import { FC } from 'react';
import { ItemsTranstition } from './TabBody';
import { motion } from 'framer-motion';
import { item, list } from './animation';

const TabFour: FC<ItemsTranstition> = ({ translateAnimation }) => {
  const {
    setCompany,
    setPersonal,
    state: { firm },
  } = useFirm();
  const itemAnimate = item({ translateAnimation });
  return (
    <motion.div initial='hidden' animate='visible' variants={list}>
      <motion.div variants={itemAnimate}>
        <Typography as='h4' color='white' className='mb-5'>
          Ingresa las imágenes para tu firma
        </Typography>
      </motion.div>
      <motion.div variants={itemAnimate}>
        <TextFieldIcon
          className='mb-5'
          id='profilePhoto'
          textLabel='Imagen de Perfil'
          placeholder='https://www.exampleimage.com/image/sample.png'
          tooltipMessage='Carga una imagen a tu cuenta de Dropbox, Google Drive o similar y pega la URL aquí. El tamaño del archivo no puede superar los 2 MB.'
          value={firm.personal.photo}
          onChange={e => setPersonal('photo', e.target.value)}
        />
      </motion.div>
      <motion.div variants={itemAnimate}>
        <TextFieldIcon
          className='mb-5'
          id='companyLogo'
          textLabel='Logo de la compañia'
          placeholder='https://www.exampleimage.com/image/sample.png'
          tooltipMessage='Carga una imagen a tu cuenta de Dropbox, Google Drive o similar y pega la URL aquí. El tamaño del archivo no puede superar los 2 MB.'
          value={firm.company.companyLogo}
          onChange={e => setCompany('companyLogo', e.target.value)}
        />
      </motion.div>
    </motion.div>
  );
};

export default TabFour;
