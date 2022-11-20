import { useFirm } from '@app/firm/contexts/firm.provider';
import Template1 from './Template1';
import Template2 from './Template2';
import Template3 from './Template3';

const FirmCard = () => {
  const {
    state: { template },
  } = useFirm();

  switch (template) {
    case 3:
      return <Template3 />;
    case 2:
      return <Template2 />;
    default:
      return <Template1 />;
  }
};

export default FirmCard;
