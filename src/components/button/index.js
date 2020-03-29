import React from 'react';
import { ButtonWrapper } from './style';
import img from '../../assets/img';

function ButtonLoading() {
  const loading = img.spinner;
  return (
    <div>
      <img alt="loading" src={loading} className="button__loading" />
    </div>
  );
}

export default function Button({
  text,
  isLoading = false,
  onClick,
  className = '',
  btnClassName = '',
  disabled,
  isSecondary
}) {
  return (
    <ButtonWrapper
      className={'component_button ' + className}
      isSecondary={isSecondary}
    >
      {isLoading ? (
        <ButtonLoading />
      ) : disabled ? (
        <button className={'disabled button__text ' + btnClassName}>
          {text}
        </button>
      ) : (
        <button onClick={onClick} className={'button__text ' + btnClassName}>
          {text}
        </button>
      )}
    </ButtonWrapper>
  );
}
