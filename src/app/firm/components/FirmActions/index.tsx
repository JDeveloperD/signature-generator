import React from 'react';
import Button from '../../../../components/inputs/Button';
import { useFirm } from '../../contexts/firm.provider';
import FeatherIcon from 'feather-icons-react';
import { toast } from 'react-toastify';

const FirmActions = () => {
  const {
    clearFirm,
    state: { firm },
  } = useFirm();

  const copyFirm = () => {
    if (!firm.personal.name) {
      toast.error('Nombre: Introduce información válida', {
        theme: 'colored',
      });
    }
  };

  return (
    <div>
      <div className='text-center'>
        <Button
          variant='contained'
          size='lg'
          color='dark-900'
          className='mt-5'
          onClick={copyFirm}
        >
          Crear Firma
        </Button>
      </div>
      <div className='text-center'>
        <Button
          variant='text'
          color='white'
          className='mt-3'
          onClick={clearFirm}
        >
          <FeatherIcon icon='rotate-cw' size='20' />
          BORRAR TODO
        </Button>
      </div>
    </div>
  );
};

export default FirmActions;
