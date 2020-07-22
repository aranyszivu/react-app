import React from 'react';
import Posts from '../../data/posts.json';
import Users from '../../data/users.json';
import Comments from '../../data/comments.json';

const WorkBlock = (props) => {
    const work = props.work;

    function getUser(uid) {
        return Users.find(x => x.uid === uid);
    }

    const infoWrapperStyle = {
        margin: "10px 0px",
        padding: "10px",
        border: "3px solid #cccccc",
        backgroundColor: "#DDDDDD",
        overflow: "auto"
    };

    function getNumComments() {
        let num = 0;
        Comments.forEach(element => {
            if (element.postid === work.postid) {
                num++;
            }
        });
        return num;
    }

    return (
        <div style={infoWrapperStyle}>
            <div style={{float:"left", width:"auto", textAlign: "left"}}>
                <div style={{display:"inline-block", width:"auto", height:"100%"}}>
                    <img src={process.env.PUBLIC_URL + getUser(work.user).iconUrl} style={{width:"60px", display: "inline"}} /> 
                    <p style={{margin:"5px"}}><b>{getUser(work.user).username}</b></p>
                </div>
                <div style={{display:"inline-block", width:"100px", height:"auto"}}>
                    <img src={process.env.PUBLIC_URL + '/resources/images/heart.png'} alt="Favourites:" style={{opacity: "0.7", width:"20px", padding: "0px 5px", display: "inline"}} />
                    <p style={{ padding: "0px 5px 0px 0px", display: "inline"}}>{work.favs}</p> <br/> <br/>
                    <img src={process.env.PUBLIC_URL + '/resources/images/comment.png'} alt="Comments:" style={{opacity: "0.7", width:"20px", padding: "0px 5px", display: "inline"}} />
                    <p style={{ display: "inline"}}>{getNumComments()}</p>
                </div>
            </div>
            <div style={{float: "right", display:"flex", margin:"10px", padding: "10px", backgroundColor:"#eeeeee", textAlign: "left"}}>
                <p style={{width:"500px", margin: "0"}}><i>{work.desc}</i></p>
            </div>
        </div>
    );
}
export default WorkBlock;