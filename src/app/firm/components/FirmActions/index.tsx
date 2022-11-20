import FeatherIcon from 'feather-icons-react';
import { toast } from 'react-toastify';
import { useCopy } from '@app/firm/hooks/useCopy';
import { Button } from '@components/inputs';
import { useFirm } from '@app/firm/contexts/firm.provider';

const FirmActions = () => {
  const {
    clearFirm,
    state: { firm },
    copyTemplateRef,
  } = useFirm();
  const copyFirm = () => {
    if (!firm.personal.name) {
      return toast.error('Nombre: Introduce información válida', {
        theme: 'colored',
      });
    }

    useCopy(copyTemplateRef);
    toast.success('Firma creada! ahora pegala en tu correo', { theme: 'dark' });
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
