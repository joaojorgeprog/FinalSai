import React, {Component} from 'react'
import { MenuItems } from "./MenuItems"
import stylesT from "../../styles/Navbar.module.css"
import { FaBeer, FaTimes, FaBars, FaReact} from "react-icons/fa";
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
            <nav className={stylesT.NavbarItems}>
                <h1 className={stylesT.navbar_logo}>React<span>
                    <FaReact />
                </span></h1>
                <div className={stylesT.menu_icon} onClick={this.handleClick}>
                    
                    {this.state.clicked && 
                        <span className={`${stylesT.fas} ${stylesT.fa_times}`}>
                        <FaTimes />
                    </span>
                    }
                    {!this.state.clicked &&
                        <span className={`${stylesT.fas} ${stylesT.fa_bars}`}>
                        <FaBars />
                        </span>
                    }

           </div>
                <ul className={this.state.clicked ? `${stylesT.nav_menu} ${stylesT.active}` : `${stylesT.nav_menu}`}>
               {MenuItems.map((item, index) => {
                    var str1 = "stylesT.";
                    var str2 = `${item.cName}`;
                    var res = str1.concat(str2);
                    console.log(`resultado: ${res}`)
                    if(item.cName == 'nav_links'){
                        return(    
                            <li key={index}>
                                <a className={stylesT.nav_links} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    }else{
                        return(    
                            <li key={index}>
                                <a className={stylesT.nav_links_mobile} href={item.url}>
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