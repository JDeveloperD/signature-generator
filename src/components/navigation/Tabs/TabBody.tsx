import React, { FC } from 'react';
import Tab from './styled';
import TabFour from './TabFour';
import TabOne from './TabOne';
import TabThree from './TabThree';
import TabTwo from './TabTwo';

type TabBodyProps = {
  tabActive: number;
  prevActive: number;
};

export type ItemsTranstition = {
  translateAnimation: 'left' | 'right';
};

const TabBody: FC<TabBodyProps> = ({ tabActive, prevActive }) => {
  return (
    <Tab.Body>
      {tabActive === 1 && (
        <TabOne translateAnimation={prevActive < 1 ? 'right' : 'left'} />
      )}
      {tabActive === 2 && (
        <TabTwo translateAnimation={prevActive <= 2 ? 'right' : 'left'} />
      )}
      {tabActive === 3 && (
        <TabThree translateAnimation={prevActive <= 3 ? 'right' : 'left'} />
      )}
      {tabActive === 4 && (
        <TabFour translateAnimation={prevActive <= 4 ? 'right' : 'left'} />
      )}
    </Tab.Body>
  );
};

export default TabBody;
