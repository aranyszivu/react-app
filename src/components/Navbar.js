import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import { LangContext } from '../LangContext';

const Navbar = () => {
    return(
        <div>
             
            <div className="clickable" style={{width:"auto", height:"100%", display:"inline-block", alignContent:"middle", backgroundColor: "#bbbbbb", border:"1px solid #999999", margin:"0px 0px 0px 248px"}}>
                <Link to={`/`} style={{textDecoration: "none", color:"inherit"}}>
                    <LangContext.Consumer>
                        {(context) => (
                                <h3 style={{margin:"10px 10px 13px 10px"}}>{(context.state.lang === "en") ? "Home" : "Accueil"}</h3>
                        )}
                    </LangContext.Consumer>
                </Link>
            </div>
             
        </div>
    );
}
export default Navbar;