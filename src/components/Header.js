import React, {Component} from 'react';
import AccountPanel from './AccountPanel';
import Navbar from './Navbar';

class Header extends Component {
    
    render() {
        const hdrWrapperStyle = { 
            display: "block",
            width: "100vw",
            height: "auto",
            backgroundColor: "#DDDDDD",
            padding: "0"
        };
        const hdrBodyWrapperStyle = {
            width: "100%",
            overflow: "auto"
        };
        const hdrSplashWrapperStyle = {
            float: "left"
        };
        const hdrAccountWrapperStyle = {
            float: "right",
            width: "300px",
            height:"175px",
            backgroundColor: "#EEEEEE",
        };
        const hdrNavbarWrapperStyle = {
            width: "100%",
            height: "50px",
            backgroundColor: "#AAAAAA",
            margin: "0",
            padding: "0"
        };

        return (
        <div id="hdrWrapper" style={hdrWrapperStyle}>
            <div id="hdrBodyWrapper" style={hdrBodyWrapperStyle}>
                <div id="hdrSplashWrapper" style={hdrSplashWrapperStyle}>
                    <img src={process.env.PUBLIC_URL + '/resources/images/sitelogo.png'} style={{verticalAlign: "middle", width:"130px", margin: "20px", display: "inline"}} />
                    <div style={{display: "inline-block",}}>
                        <h2 style={{fontSize: "300%"}} >Amateur Hour</h2>
                    </div>
                </div>
                <div id="hdrAccountWrapper" style={hdrAccountWrapperStyle}>
                    <AccountPanel />
                </div>
            </div>
            <div id="hdrNavbarWrapper" style={hdrNavbarWrapperStyle}>
                <Navbar />
            </div>
        </div>
        );
    } 
}
export default Header;