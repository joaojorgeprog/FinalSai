import React, {Component} from 'react'
import { MenuItems } from "./MenuItems"
import stylesNav from '../../styles/Navbar.module.css'
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
            <nav className={stylesNav.NavbarItems}>
                <h1 className={stylesNav.navbar_logo}>React<span>
                    <FaReact />
                </span></h1>
                <div className={stylesNav.menu_icon} onClick={this.handleClick}>
                    
                    {this.state.clicked && 
                        <span className={`${stylesNav.fas} ${stylesNav.fa_times}`}>
                        <FaTimes />
                    </span>
                    }
                    {!this.state.clicked &&
                        <span className={`${stylesNav.fas} ${stylesNav.fa_bars}`}>
                        <FaBars />
                        </span>
                    }

           </div>
                <ul className={this.state.clicked ? `${stylesNav.nav_menu} ${stylesNav.active}` : `${stylesNav.nav_menu}`}>
               {MenuItems.map((item, index) => {
                    if(item.cName == 'nav_links'){
                        return(    
                            <li key={index}>
                                <a className={stylesNav.nav_links} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    }else{
                        return(    
                            <li key={index}>
                                <a className={stylesNav.nav_links_mobile} href={item.url}>
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