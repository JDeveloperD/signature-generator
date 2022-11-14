import React, { useState } from 'react';
import Tab from './styled';
import TabBody from './TabBody';
import TabHead from './TabHead';

const Tabs = () => {
  const [tabActive, setTabActive] = useState<number>(1);

  return (
    <Tab.Wrapper>
      <TabHead tabActive={tabActive} handleTab={setTabActive} />
      <TabBody tabActive={tabActive} />
    </Tab.Wrapper>
  );
};

export default Tabs;
