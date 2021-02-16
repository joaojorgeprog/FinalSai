import React, {Component, useState} from 'react'
import { MenuItems } from "./MenuItems"
import StylesNav from '../../styles/Nav.module.css'
import { FaTimes, FaBars, FaReact} from "react-icons/fa";
import { Button } from '../Button'
import Link from 'next/link'
import { useSession , signIn} from 'next-auth/client'
import Dropdown from '../Dropdown/index'



const NavBar = () => {

    const [clicked, setClicked] = useState(false)
    const [session, loading] = useSession();
    const [drop, setDrop] = useState(true)
    const [selected , setSelected] = useState(null)

    const handleSignin = (e) => {
        e.preventDefault()
        signIn()
    }

    function handleClick() {
        setClicked(!clicked)
    }
        return(
            <nav className={StylesNav.NavbarItems} style={{
                backgroundImage: "url(" + `${require("../../public/index.png")}` + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover" }}>
                <h1 className={StylesNav.navbar_logo}>React<span>
                    <FaReact />
                </span></h1>
                <div className={StylesNav.menu_icon} onClick={handleClick}>
                    
                    {clicked && 
                        <span className={`${StylesNav.fas} ${StylesNav.fa_times}`}>
                        <FaTimes />
                    </span>
                    }
                    {!clicked &&
                        <span className={`${StylesNav.fas} ${StylesNav.fa_bars}`}>
                        <FaBars />
                        </span>
                    }

           </div>
                <ul className={clicked ? `${StylesNav.nav_menu} ${StylesNav.active}` : `${StylesNav.nav_menu}`}>
               {MenuItems.map((item, index) => {
                    if(item.cName == 'nav_links'){
                        
                        return(    
                            <li key={index} onClick={() => { setClicked(!clicked); setSelected(index) }}>
                                <Link href={item.url}>
                                    <a className={index == selected ? `${StylesNav.nav_links} ${StylesNav.nav_links_active}` : `${StylesNav.nav_links}`}>
                                {item.title}
                                </a>
                                </Link>
                            </li>
                        )
                    }else{
                        if (session && item.title == 'User'){
                                return(
                                    <li key={index}>
                                            <a className={StylesNav.nav_links_mobile}>
                                            <Dropdown mobile={true} image={session.user.image} title={session.user.name} onClick={() => alert('clicado')} />
                                            </a>
                                    </li>
                                )
                        }else{
                            if (!session && item.title != 'User'){
                            return(    
                                <li key={index}>
                                    <Link href={item.url}>
                                    <a className={StylesNav.nav_links_mobile}>
                                    {item.title}
                                    </a>
                                    </Link>
                                </li>
                            )
                            }
                        }
                    }
               })} 
           </ul>
                {!session &&
                    <div className={StylesNav.buttonUser}>
                    <Button id="teste" className={StylesNav.buttonLogin} onClick={handleSignin}> Sign Up</Button>
                    </div>
                }
                {session &&
                    <div className={StylesNav.buttonUser}>
                    <Dropdown image={session.user.image} title={session.user.name} onClick={drop} click={false}/>
                    </div>
                }
        </nav>
        )
    }

export default NavBar