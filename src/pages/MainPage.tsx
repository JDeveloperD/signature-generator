import MainLayout from '../layouts/MainLayout';
import FirmActions from '../app/firm/components/FirmActions';
import FirmPreview from '../app/firm/components/FirmPreview';
import { FirmProvider } from '../app/firm/contexts/firm.provider';

const MainPage = () => {
  return (
    <FirmProvider>
      <MainLayout>
        <FirmPreview />
        <FirmActions />
      </MainLayout>
    </FirmProvider>
  );
};

export default MainPage;
