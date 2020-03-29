import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: inline-block;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  .button__text {
    color: ${props => (props.isSecondary ? `#272833` : `var(--white-two)`)};
    font-weight: bold;
    cursor: pointer;
    padding: 5px 20px;
    border: none;
    width: 100%;
    height: 100%;
    background-color: ${props =>
      props.isSecondary ? `#F1F2F5` : `var(--dark-sea-green)`};
  }
  .button__loading {
    height: 20px;
    vertical-align: middle;
  }
  .button__text.disabled {
    opacity: 0.7;
    cursor: auto;
  }
`;
