import React, {Component} from 'react'
import { MenuItems } from "./MenuItems"
import StylesNav from '../../styles/Nav.module.css'
import { FaTimes, FaBars, FaReact} from "react-icons/fa";
import { Button } from '../Button'

class Navbar extends Component {

    state = { clicked: false} 

    handleClick = () => {
        this.setState({
            clicked:!this.state.clicked
        })
    }

    render() {
        return(
            <nav className={StylesNav.NavbarItems}>
                <h1 className={StylesNav.navbar_logo}>React<span>
                    <FaReact />
                </span></h1>
                <div className={StylesNav.menu_icon} onClick={this.handleClick}>
                    
                    {this.state.clicked && 
                        <span className={`${StylesNav.fas} ${StylesNav.fa_times}`}>
                        <FaTimes />
                    </span>
                    }
                    {!this.state.clicked &&
                        <span className={`${StylesNav.fas} ${StylesNav.fa_bars}`}>
                        <FaBars />
                        </span>
                    }

           </div>
                <ul className={this.state.clicked ? `${StylesNav.nav_menu} ${StylesNav.active}` : `${StylesNav.nav_menu}`}>
               {MenuItems.map((item, index) => {
                    if(item.cName == 'nav_links'){
                        return(    
                            <li key={index}>
                                <a className={StylesNav.nav_links} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    }else{
                        return(    
                            <li key={index}>
                                <a className={StylesNav.nav_links_mobile} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )   
                    }
               })} 
           </ul>
                <Button id="teste"> Sign Up</Button>
        </nav>
        )
    }
}

export default Navbar