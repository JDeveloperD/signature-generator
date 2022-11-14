import React from 'react';
import { TextFieldIcon } from '../../inputs';
import { Typography } from '../../data-display';
import { useFirm } from '../../../app/firm/contexts/firm.provider';

const TabFour = () => {
  const {
    setCompany,
    setPersonal,
    state: { firm },
  } = useFirm();

  return (
    <div>
      <Typography as='h4' color='white' className='mb-5'>
        Ingresa las imágenes para tu firma
      </Typography>
      <TextFieldIcon
        id='profilePhoto'
        textLabel='Imagen de Perfil'
        placeholder='https://www.exampleimage.com/image/sample.png'
        tooltipMessage='Carga una imagen a tu cuenta de Dropbox, Google Drive o similar y pega la URL aquí. El tamaño del archivo no puede superar los 2 MB.'
        value={firm.personal.photo}
        onChange={e => setPersonal('photo', e.target.value)}
      />
      <TextFieldIcon
        id='companyLogo'
        textLabel='Logo de la compañia'
        placeholder='https://www.exampleimage.com/image/sample.png'
        tooltipMessage='Carga una imagen a tu cuenta de Dropbox, Google Drive o similar y pega la URL aquí. El tamaño del archivo no puede superar los 2 MB.'
        value={firm.company.companyLogo}
        onChange={e => setCompany('companyLogo', e.target.value)}
      />
    </div>
  );
};

export default TabFour;
