import React from 'react';
import { FreeSpaceWrapper } from './style';

const index = ({ height = 60 }) => {
  return <FreeSpaceWrapper height={height + 'px'} />;
};

export default index;
