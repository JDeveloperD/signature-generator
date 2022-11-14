import React, { FC } from 'react';
import Tab from './styled';
import imgTabText from '../../../static/form-tab-text.svg';
import imgTabImage from '../../../static/image-tab.svg';
import imgTabStyle from '../../../static/style-tab.svg';
import imgTabTemplate from '../../../static/template-tab.svg';

type TabHeadProps = {
  tabActive: number;
  handleTab: React.Dispatch<React.SetStateAction<number>>;
};

const TabHead: FC<TabHeadProps> = ({ tabActive, handleTab }) => {
  return (
    <Tab.Head tabActive={tabActive}>
      <Tab.ButtonOption onClick={() => handleTab(1)}>
        <img src={imgTabTemplate} alt='' />
      </Tab.ButtonOption>
      <Tab.ButtonOption onClick={() => handleTab(2)}>
        <img src={imgTabText} alt='' />
      </Tab.ButtonOption>
      <Tab.ButtonOption onClick={() => handleTab(3)}>
        <img src={imgTabStyle} alt='' />
      </Tab.ButtonOption>
      <Tab.ButtonOption onClick={() => handleTab(4)}>
        <img src={imgTabImage} alt='' />
      </Tab.ButtonOption>
    </Tab.Head>
  );
};

export default TabHead;
