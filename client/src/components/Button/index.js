import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './StyledButton';

export default function Button(props) {
  return (
    <StyledButton className={props.className} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
