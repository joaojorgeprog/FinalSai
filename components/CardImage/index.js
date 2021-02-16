import React from 'react'
import styled from 'styled-components'
import { RiHeart2Fill } from 'react-icons/ri'
import PropTypes from 'prop-types'
import { darken } from 'polished'

const CardImage = ({ title, description, height, image, onClick, active }) => (
  <Wrapper height={height} image={image} onClick={onClick} active={active}>
    <DivDate>
        <TextDay>
          23
        </TextDay>
        <TextMouth>
          Maio
        </TextMouth>
      </DivDate>
    <FlexColumn>
      <Title>{title}</Title>
      <FlexRow>
        <Descrition>{description}</Descrition>
        <FlexDivIcon>
          <NumberLikes>
            75
          </NumberLikes>
          <Icon
            color={'white'}
            size={'1.9em'}
            onClick={onClick}
          />
        </FlexDivIcon>
      </FlexRow>
    </FlexColumn>
  </Wrapper>
)

CardImage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  height: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool
}

export default CardImage

const Wrapper = styled.div`
box-shadow: ${({ active }) => active ? '0 12px 24px 0 rgba(97, 22, 35, 1)' : '0 12px 24px 0 rgba(0, 0, 0, 0.28)'};
width: 90%;
border-top-right-radius:15px;
border-bottom-right-radius:15px;
margin-bottom:10px;
margin-left:5%;
display:flex;
${({ image }) => image && `
  background-image: url(${image});
  background-size: cover;
`}
`
const DivDate = styled.div`
background-color:white;
display: flex;
justify-content: center;
flex-direction: column;
align-items:center;
`
const NumberLikes = styled.p`
  color:white;
`

const TextMouth = styled.p`
  font-size:15pt;
  color: #f73859; 
`
const TextDay = styled.p`
  font-size:20pt;
  color: black;
  font-weight:bold;
`

const Descrition = styled.p`
opacity: 0.7;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 14px;
  color: #000;
  margin: 0;
`
const Title = styled.p`
font-family: ${({ theme }) => theme.fontFamily};
font-size: 22px;
font-weight: 600;
color: whitesmoke;
margin: 0;
`
const FlexColumn = styled.div`
border-top-right-radius:14px;
border-bottom-right-radius:14px;
padding: 16px;
display: flex;
width:100%;
justify-content: flex-end;
flex-direction: column;
align-items: flex-start;
background-color:  rgba(0, 0, 0, 0.5);
`

const FlexDivIcon = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`


const FlexRow = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
align-items: center;
`

const Icon = styled(RiHeart2Fill)`
cursor: pointer;
`
