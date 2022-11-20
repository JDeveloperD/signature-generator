import { useFirm } from '../../../app/firm/contexts/firm.provider';
import { TextFieldIcon } from '../../inputs';
import { Typography } from '../../data-display';
import { FC } from 'react';
import { ItemsTranstition } from './TabBody';
import { item, list } from './animation';
import { motion } from 'framer-motion';

const TabTwo: FC<ItemsTranstition> = ({ translateAnimation }) => {
  const {
    setPersonal,
    setCompany,
    setContact,
    setSocialNetwork,
    setAdditionl,
    state: { firm },
  } = useFirm();
  const itemAnimate = item({ translateAnimation });
  return (
    <motion.div initial='hidden' animate='visible' variants={list}>
      <motion.div variants={itemAnimate}>
        <Typography as='h4' color='white' className='mb-5'>
          Introducte la información de tu firma
        </Typography>
      </motion.div>
      <motion.div variants={itemAnimate}>
        <TextFieldIcon
          className='mb-5'
          id='name'
          textLabel='Nombre'
          placeholder='David'
          value={firm.personal.name}
          onChange={e => {
            setPersonal('name', e.target.value);
          }}
        />
      </motion.div>
      <motion.div variants={itemAnimate}>
        <TextFieldIcon
          className='mb-5'
          id='lastName'
          textLabel='Apellidos'
          placeholder='Sandoval'
          value={firm.personal.lastName}
          onChange={e => {
            setPersonal('lastName', e.target.value);
          }}
        />
      </motion.div>
      <motion.div variants={itemAnimate}>
        <TextFieldIcon
          className='mb-5'
          id='profession'
          textLabel='Profesión'
          placeholder='Ing de sistemas'
          value={firm.personal.profession}
          onChange={e => {
            setPersonal('profession', e.target.value);
          }}
        />
      </motion.div>
      <motion.div variants={itemAnimate}>
        <TextFieldIcon
          className='mb-5'
          id='position'
          textLabel='Cargo'
          placeholder='Desarrollador'
          value={firm.company.position}
          onChange={e => {
            setCompany('position', e.target.value);
          }}
        />
      </motion.div>
      <motion.div variants={itemAnimate}>
        <TextFieldIcon
          className='mb-5'
          id='companyName'
          textLabel='Nombre de la Empresa'
          placeholder='Mi empresa genial'
          value={firm.company.companyName}
          onChange={e => {
            setCompany('companyName', e.target.value);
          }}
        />
      </motion.div>
      <motion.div variants={itemAnimate}>
        <TextFieldIcon
          className='mb-5'
          id='celphone'
          textLabel='Teléfono móvil'
          placeholder='(+51) 987654321'
          value={firm.contact.celphone}
          onChange={e => {
            setContact('celphone', e.target.value);
          }}
        />
      </motion.div>
      <motion.div variants={itemAnimate}>
        <TextFieldIcon
          className='mb-5'
          id='email'
          textLabel='Correo Electrónico'
          placeholder='email@gmail.com'
          value={firm.contact.email}
          onChange={e => {
            setContact('email', e.target.value);
          }}
        />
      </motion.div>
      <motion.div variants={itemAnimate}>
        <TextFieldIcon
          className='mb-5'
          id='website'
          textLabel='Url del sitio web'
          placeholder='https://www.miempresagenial.net'
          value={firm.contact.website}
          onChange={e => {
            setContact('website', e.target.value);
          }}
        />
      </motion.div>
      <motion.div variants={itemAnimate}>
        <Typography as='h4' color='white' className='mb-5'>
          Introducte tus enlaces de redes sociales
        </Typography>
      </motion.div>
      <motion.div variants={itemAnimate}>
        <TextFieldIcon
          className='mb-5'
          id='linkedin'
          textLabel='LinkedIn'
          placeholder='https://www.linkedin.com'
          value={firm.socialeNetworks.linkedin}
          onChange={e => {
            setSocialNetwork('linkedin', e.target.value);
          }}
        />
      </motion.div>
      <motion.div variants={itemAnimate}>
        <TextFieldIcon
          className='mb-5'
          id='facebook'
          textLabel='Facebook'
          placeholder='https://www.facbook.com'
          value={firm.socialeNetworks.facebook}
          onChange={e => {
            setSocialNetwork('facebook', e.target.value);
          }}
        />
      </motion.div>
      <motion.div variants={itemAnimate}>
        <TextFieldIcon
          className='mb-5'
          id='facebook'
          textLabel='Facebook'
          placeholder='https://www.facbook.com'
          value={firm.socialeNetworks.facebook}
          onChange={e => {
            setSocialNetwork('facebook', e.target.value);
          }}
        />
      </motion.div>
      <motion.div variants={itemAnimate}>
        <TextFieldIcon
          className='mb-5'
          id='twitter'
          textLabel='Twitter'
          placeholder='https://www.twitter.com'
          value={firm.socialeNetworks.twitter}
          onChange={e => {
            setSocialNetwork('twitter', e.target.value);
          }}
        />
      </motion.div>
      <motion.div variants={itemAnimate}>
        <TextFieldIcon
          className='mb-5'
          id='instagram'
          textLabel='Instagram'
          placeholder='https://www.instagram.com'
          value={firm.socialeNetworks.instagram}
          onChange={e => {
            setSocialNetwork('instagram', e.target.value);
          }}
        />
      </motion.div>
      <motion.div variants={itemAnimate}>
        <Typography as='h4' color='white' className='mb-5'>
          Campo personalizado
        </Typography>
      </motion.div>
      <motion.div variants={itemAnimate}>
        <TextFieldIcon
          id='additional'
          textLabel='Campo personalizado'
          placeholder='Contenido adicional'
          tooltipMessage='En este campo, puedes incluir la información que quieras, como tu horario de trabajo, cómo se pronuncia tu nombre, etc.'
          value={firm.additional}
          onChange={e => {
            setAdditionl(e.target.value);
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default TabTwo;
