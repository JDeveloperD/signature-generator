import { useState } from 'react';
import Tab from './styled';
import TabBody from './TabBody';
import TabHead from './TabHead';

const Tabs = () => {
  const [tabActive, setTabActive] = useState<number>(1);
  const [prevActive, setPrevActive] = useState<number>(1);

  const handleTab = (tab: number) => {
    setTabActive(prev => {
      setPrevActive(prev);

      return tab;
    });
  };
  return (
    <Tab.Wrapper>
      <TabHead tabActive={tabActive} handleTab={handleTab} />
      <TabBody tabActive={tabActive} prevActive={prevActive} />
    </Tab.Wrapper>
  );
};

export default Tabs;
