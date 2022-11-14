import { AuthProvider } from './app/auth/contexts/auth.provider';
import { ThemeProvider } from 'styled-components';
import THEME_DEFAULT from './styled/theme';
import Globals from './styled/globals';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <ThemeProvider theme={THEME_DEFAULT}>
      <Globals />
      <AuthProvider>
        <MainPage />
        <ToastContainer />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
