import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'
import PropTypes from 'prop-types'

const CheckboxContainer = styled.div`
display: inline-block;
vertical-align: middle;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  props: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${props => (props.checked ? '#f73859' : 'white')};
  border-radius: 4px;
  border: solid 1px #d9e2f0;
  transition: all 150ms;


  ${HiddenCheckbox}:focus + & {
    outline: none;
    box-shadow: 0 0 0 2px ${lighten(0.3, '#f73859')};
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }
`

const Label = styled.label`
display: flex;
cursor: pointer;
`

const TextBox = styled.text`
  font-size: 18px;
  margin-left:8px;
`

const Checkbox = ({ checked, ...props }) => (
  <Label>
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 10 10">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
    <TextBox>{props.label}</TextBox>
  </Label>
)

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  key: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default Checkbox
