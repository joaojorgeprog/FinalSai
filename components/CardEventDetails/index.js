import React, {useState} from 'react'
import styled from 'styled-components'
import { FcMusic } from 'react-icons/fc'
import PropTypes from 'prop-types'
import { events } from '../../dataFestas'
import PhotoView from '../PhotoView/index'
import Button from '../Button/index'

const CardEventDetails = ({ title, description, height, image, onClick , eventSelected}) => {
  
  const [open, setOpen] = useState(false)

  return(
    <Wrapper height={height} image={image}>
      <FlexColumn>
        <TextDate>23 Maio 230015</TextDate>
        <Title>{title}</Title>
        {open &&
          <PhotoView photos={eventSelected.allImages} onClose={() => setOpen(false)}/>
        }
        <BackgroundImage image={image} onClick={() => setOpen(!open)}>

        </BackgroundImage>
        <Title>Description</Title>
        <Descrition>{eventSelected.description}</Descrition>
        <Title>Artists</Title>
        {eventSelected && eventSelected.art[0] == undefined  && 
          <Descrition>No Artists to Show</Descrition>
        }
        <FlexRow>
          {eventSelected.art && eventSelected.art.map((event) =>
            <FlexDivIcon>
              <Icon
                color={'white'}
                size={'1.9em'}
                onClick={onClick}
              />
              <NumberLikes>
                {event}
              </NumberLikes>
            </FlexDivIcon>
          )
          }
        </FlexRow>
      </FlexColumn>
    </Wrapper>
  )
}

CardEventDetails.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  height: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  eventSelected : PropTypes.object
}

export default CardEventDetails

const Wrapper = styled.div`
box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.28);
width: 90%;
border-radius:15px;
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

const BackgroundImage = styled.div`
height:150px;
width:120px;
${({ image }) => image && `
  background-image: url(${image});
  background-size: cover;
`}
`


const NumberLikes = styled.p`
  color:white;
`

const TextDate = styled.p`
  font-size:11pt;
  color: #f73859; 
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
text-align: 'center';
`
const FlexColumn = styled.div`
border-radius:14px;
padding: 16px;
display: flex;
width:100%;
justify-content: flex-end;
flex-direction: column;
align-items: center;
background-color:  #636363;
`

const FlexDivIcon = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`


const FlexRow = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
max-width:100%;
align-items: center;
overflow:auto;
`

const Icon = styled(FcMusic)`
cursor: pointer;
`
