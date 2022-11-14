import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
  @media screen and (max-width: ${({ mobileBreakpoint }) =>
      mobileBreakpoint}px) {
    display: none;
  }
`

const Button = styled.span`
  position: absolute;
  top: -60px;
  left: 200px;
  height: 35px;
  width: 35px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 5px 0 #0009;
  z-index: 10;
  cursor: pointer;
  font-size: 10px;
  opacity: 0.6;
  transition: opacity 0.25s;
  right: ${({ type }) => (type === 'next' ? '5px' : 'initial')};

  &:hover {
    opacity: 1;
    background-image: linear-gradient(166deg, rgb(242, 40, 118) -30%, rgb(148, 45, 217) 100%);
  }

  &::before {
    content: '';
    height: 10px;
    width: 10px;
    background: transparent;
    border-top: 2px solid #000;
    border-right: 2px solid #000;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 60%;
    transform: ${({ type }) =>
      type === 'next'
        ? 'translate(-25%, -50%) rotate(135deg)'
        : 'translate(-75%, -50%) rotate(-135deg)'};
  }
`

const LeftArrowButton = ({
  type,
  mobileBreakpoint = 1,
  hidden = false,
  CustomBtn,
  onClick
}) => (
  <ButtonWrapper
    mobileBreakpoint={mobileBreakpoint}
    hidden={hidden}
    onClick={onClick}
  >
    {CustomBtn ? (
      typeof CustomBtn === 'function' ? (
        <CustomBtn />
      ) : (
        CustomBtn
      )
    ) : (
      <Button type={type} />
    )}
  </ButtonWrapper>
)

LeftArrowButton.propTypes = {
  type: PropTypes.oneOf(['prev', 'next']).isRequired,
  mobileBreakpoint: PropTypes.number,
  hidden: PropTypes.bool,
  CustomBtn: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.elementType
  ]),
  onClick: PropTypes.func.isRequired
}

export default LeftArrowButton
