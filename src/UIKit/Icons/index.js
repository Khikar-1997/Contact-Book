import React from 'react';

import add from '../../../data/images/icons/Add.svg';
import arrow from '../../../data/images/icons/Arrow.svg';
import search from '../../../data/images/icons/Search.svg';
import call from '../../../data/images/icons/Call.svg';
import profile from '../../../data/images/icons/Profile.svg';

const iconList = {
  add,
  arrow,
  search,
  call,
  profile,
};

const RenderIcon = ({ icon }) => {
  const TagName = iconList[icon];
  return TagName ? <TagName /> : null;
};

const AppIcon = props => <RenderIcon {...props} />;

export default AppIcon;
