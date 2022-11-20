import logoLight from '../../static/logo-david.png';
import Button from '../inputs/Button';
import FeatherIcon from 'feather-icons-react';

const Header = () => {
  const handleSignOut = () => {};

  return (
    <header className='py-3 d-flex align-items-center justify-content-between mb-5'>
      <a href='' className='logo' target='_blank'>
        <img src={logoLight} alt='Pandora Marketing' width={180} />
      </a>

      {/* <Button
        onClick={handleSignOut}
        variant='outlined'
        color='white'
        className='rounded-pill'
      >
        <FeatherIcon icon='log-out' size='20' />
        Salir
      </Button> */}
    </header>
  );
};

export default Header;
