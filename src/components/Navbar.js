import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <div>
             
            <div className="clickable" style={{width:"auto", height:"100%", display:"inline-block", alignContent:"middle", border:"1px solid #999999"}}>
                <Link to={`/`} style={{textDecoration: "none", color:"inherit"}}>
                    <h3 style={{margin:"10px 0px 0px 10px"}}>Home</h3>
                </Link>
            </div>
             
        </div>
    );
}
export default Navbar;