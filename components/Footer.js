import React, { Component, Fragment } from "react";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter} from 'react-icons/io'

class Footer extends Component {
    render() {
        return (
            <div style={{ bottom: 0, width: "100%", position:'relative' }} className="bg-gray-100">
                <div style={{ width: "100%", backgroundColor: '#f73859', display:"flex", justifyContent: "space-around", alignItems:"center" }} className="bg-gray-100 container mx-auto px-6 pt-10 pb-6">
                    <div>
                        <p style={{fontWeight:'bold'}}>Get connected with us on social network</p>
                    </div>
                    <div>
                        <IoLogoFacebook color="white" size={25} style={{marginInline:'10px'}} />
                        <IoLogoInstagram color="white" size={25} style={{ marginInline: '10px' }}/>
                        <IoLogoTwitter color="white" size={25} />
                    </div>
                </div>
                <div style={{ width: "100%", backgroundColor: 'black', display: "flex" }} className="bg-gray-100 container mx-auto px-6 pt-10 pb-6">
                    <div style={{ width: "60%", justifyContent:'center', alignItems:'center',textAlign:'center'}}>
                        <h1 style={{ color: "white" }}>SAI</h1>
                        <p style={{ color: "whitesmoke", textAlign: 'center', marginInline:"20%" }}>Lorem ipsum dolor sit amet. Sit earum aliquid vel nesciunt quasi sit repellendus itaque! Eos consectetur autem aut itaque saepe hic nesciunt impedit. Cum sapiente iusto eos galisum doloremque aut soluta voluptatem aut consequatur quam.</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                        <div style={{ marginRight:20}}>
                            <h4 style={{ color: "white", borderBottom: "1px solid red" }}>ABOUT US</h4>
                            <p style={{ color: "whitesmoke" }}>oalre</p>
                            <p style={{ color: "whitesmoke" }}>oalre</p>
                            <p style={{ color: "whitesmoke" }}>oalre</p>
                        </div>
                        <div>
                            <h4 style={{ color: "white", borderBottom: "1px solid red" }}>ABOUT US</h4>
                            <p style={{ color: "whitesmoke" }}>oalre</p>
                            <p style={{ color: "whitesmoke" }}>oalre</p>
                            <p style={{ color: "whitesmoke" }}>oalre</p>
                        </div>
                    </div>
                </div>
                <div style={{ paddingTop:"15px",width: "100%", backgroundColor: 'black', display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ borderTop: "1px solid red", width: "60%", justifyContent:'center', alignItems:'center'}}>
                     <p style={{color:"white", textAlign:'center'}}>Copiright @2021 My Site | Designed by SAI</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;