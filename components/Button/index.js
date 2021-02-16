import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = ({ children, onClick, disabled, ...props }) => (
  <Wrapper {...props} onClick={() => !disabled && onClick && onClick()} disabled={disabled}>
    {children}
  </Wrapper>
)

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
}

const Wrapper = styled.button`

  border-radius: 4px;
  border: none;
  fontSize: ${({ fontSize }) => fontSize || '16px'};
  width: ${({ width }) => width || '100px'};
  padding: ${({ padding }) => padding || '0'};
  margin-right: ${({ marginRight }) => marginRight || '0'};
  margin-left: ${({ marginLeft }) => marginLeft || '0'};
  margin-top: ${({ marginTop }) => marginTop || '0'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0'};
  height: ${({ height }) => height || '40px'};
  ${({ theme, variant }) => variant === 'primary' && ` 
    background-color: #f73859;
    color: #fff;
    border: none;
  `}
  ${({ theme, variant }) => variant === 'secondary' && ` 
    background-color: white;
    color: black;
    border: solid 1px #f73859;
  `}
  ${({ disabled }) => disabled && ` 
    cursor:not-allowed;
    opacity: 0.6;
  `}
  &:hover {
   ${({ theme, variant }) => variant === 'primary' && ` 
    background-color: black;
    color: #fff;
    border: none;
  `}
   ${({ theme, variant }) => variant === 'secondary' && ` 
    background-color: black;
    color: white;
    border: solid 1px #edf0f4;
  `}
  }

   &:focus {
    outline: none;
    box-shadow: 0px 0px 5px 0 #fafcff;
   ${({ theme, variant }) => variant === 'primary' && ` 
    box-shadow: 0px 0px 5px 0 #f73859;
    border: none;
  `}
   ${({ theme, variant }) => variant === 'secondary' && ` 
    box-shadow: 0px 0px 5px 0 black;
    border: none;
  `}
  }
`

export default Button
