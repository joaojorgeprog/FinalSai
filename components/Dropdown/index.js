import React, {useState, useRef,} from 'react'
import styled from 'styled-components'
import { RiHeart2Fill } from 'react-icons/ri'
import PropTypes from 'prop-types'
import { darken } from 'polished'
import UseOutsideClick from "../UseOutsideClick";
import { MenuUser } from "../NavBar/MenuItems"
import Link from 'next/link'
import { signOut } from 'next-auth/client'

const Dropdown = ({ title, description, height, image, onClick, active, click, mobile }) => {

  const [open, setOpen] = useState(click)
  const ref = useRef();
  UseOutsideClick(ref, () => {
    if (open == true)
    {
      setOpen(false)
    } 
  });

  const handleSignout = (e) => {
    e.preventDefault()
    signOut()
  }

  return(
    <Main mobile={mobile}> 
      <DropDownContainer mobile={mobile}>
        <DropDownHeader mobile={mobile} onClick={() => {setOpen(true)}}>
          <DivHeader>
            <BackgroundImage mobile={mobile} image={image}/>  
          {title}
          </DivHeader>
        </DropDownHeader>
        {open && (
          <DropDownListContainer ref={ref}>
            <DropDownList>
              {MenuUser.map(option => {
                if (option.cName =='logout'){
                 return(
                    <ListItem key={Math.random()} onClick={handleSignout}>
                        {option.title}
                       </ListItem>
                 )
               }else{
                return(
                    <Link href={option.url}>
                      <ListItem key={Math.random()}>
                        {option.title}
                      </ListItem>
                    </Link>
                )
               } 
              })}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  )
}

Dropdown.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  height: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  click : PropTypes.bool,
  mobile: PropTypes.bool
}

export default Dropdown


const Main = styled("div")`
    background: transparent;
    height: 80px;
    ${({ mobile }) => mobile && `
    height: 40px;
  `}
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
`;

const DivHeader = styled("div")`
  display: flex;
  align-items: center;
`

const BackgroundImage = styled("div")`
  border-radius:50%;
  border: 2px groove #f73859;
  width:40px;
  height:40px;
  ${({ mobile }) => mobile && `
    height: 30px;
    width: 30px;
  `}
  margin-right:8px;
  ${({ image }) => image && `
  background-image: url(${image});
  background-size: cover;
`}
`;

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
  ${({ mobile }) => mobile && `
    height: 20px;
  `}
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.45em;
  padding: 0.7em 0em 0.4em 0em;
  font-weight: 500;
  font-size: 1.3rem;
  color: white;
  ${({ mobile }) => mobile && `
     padding: 0.2em 0em 0em 0.7em;
  `}
`;

const DropDownListContainer = styled("div")`
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #636363;
  box-sizing: border-box;
  color: whitesmoke;
  z-index:2;
  position: relative;
  border-bottom-left-radius:15px;
  border-Left:3px solid #f73859;
  border-Right:3px solid #f73859;
  border-Bottom:3px solid #f73859;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;