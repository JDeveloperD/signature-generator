import { WebWindow } from '@components/utils';
import FirmCard from '../FirmCard/FirmCard';
import { Fragment } from 'react';

const FirmPreview = () => {
  return (
    <WebWindow>
      <Fragment>
        <FirmCard />
      </Fragment>
    </WebWindow>
  );
};

export default FirmPreview;
