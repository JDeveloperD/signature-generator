import React, { FC } from 'react';
import Tab from './styled';
import TabFour from './TabFour';
import TabOne from './TabOne';
import TabThree from './TabThree';
import TabTwo from './TabTwo';

type TabBodyProps = {
  tabActive: number;
};

const TabBody: FC<TabBodyProps> = ({ tabActive }) => {
  return (
    <Tab.Body>
      {tabActive === 1 && <TabOne />}
      {tabActive === 2 && <TabTwo />}
      {tabActive === 3 && <TabThree />}
      {tabActive === 4 && <TabFour />}
    </Tab.Body>
  );
};

export default TabBody;
