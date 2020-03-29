import React from 'react';
import { LoadingWrapper } from './style';
import image from '../../assets/img';

const Loading = props => {
  return (
    <LoadingWrapper>
      <img src={image.loading} alt="Loading..." />
    </LoadingWrapper>
  );
};

export default Loading;
