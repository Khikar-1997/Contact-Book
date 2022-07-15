import React from 'react';

import add from '../../../data/images/icons/Add.svg';
import Arrow from '../../../data/images/icons/Arrow.svg';
import Search from '../../../data/images/icons/Search.svg';

const iconList = {
  add,
  arrow: Arrow,
  search: Search,
};

const RenderIcon = ({ icon }) => {
  const TagName = iconList[icon];
  return TagName ? <TagName /> : null;
};

const AppIcon = props => <RenderIcon {...props} />;

export default AppIcon;
