import React from 'react';

const AccountPanel = () => {
    
    const getNumAlerts = () => {return 0;}
    const getNumMessages = () => {return 0;}

    return (
        <div>
            <div style={{textAlign:"right", margin:"10px 40px 0px 0px"}}>
                <img src={process.env.PUBLIC_URL + '/resources/images/avatar.png'} style={{width:"40px", display: "inline", verticalAlign:"middle"}} />
                <p style={{display: "inline", padding: "0px 10px"}}><b>YourUserName</b></p>
            </div>
            <div style={{textAlign:"right", margin:"10px 40px"}}>
                <img src={process.env.PUBLIC_URL + '/resources/images/bell.png'} alt="Favourites:" style={{opacity: "0.7", width:"20px", padding: "0px 5px", display: "inline"}} />
                <p style={{ padding: "0px 5px 0px 0px", display: "inline"}}>{getNumAlerts()}</p> <br/> <br/>
                <img src={process.env.PUBLIC_URL + '/resources/images/mail.png'} alt="Favourites:" style={{opacity: "0.7", width:"20px", padding: "0px 5px", display: "inline"}} />
                <p style={{ display: "inline", margin:"0px 5px 0px 0px"}}>{getNumMessages()}</p>
            </div>
        </div>
    );
}

export default AccountPanel;