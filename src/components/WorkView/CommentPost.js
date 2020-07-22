import React from 'react';
import Comments from '../../data/comments.json';
import Users from '../../data/users.json';

const CommentBlock = (props) => {
    
    function removeComment() {
        let index = Comments.findIndex(x => (x.postid === props.comment.postid) && (x.userid === props.comment.userid));
        commentWrapperStyle["visibility"] = "hidden";
    }
    
    let user = Users.find(x => x.uid === props.comment.userid);
    var userName = user.username;
    var iconUrl = user.iconUrl;

    const commentWrapperStyle = {
        margin:"5px 20px", padding:"10px", backgroundColor:"#cccccc"
    }

    return (

        <div style={{margin:"5px 20px", padding:"10px", backgroundColor:"#cccccc"}}>
            <div style={{backgroundColor:"#dddddd", border:"3px solid #aaaaaa", margin:"0px 0px 10px 0px", textAlign:"left", padding:"10px"}}>
                <p style={{margin:"0"}}>{props.comment.commenttext}</p>
            </div>
            <div style={{textAlign:"left"}}>
                <img src={iconUrl} style={{width:"40px", display: "inline", verticalAlign:"middle"}} />
                <p style={{display: "inline", padding: "0px 10px"}}><b>{userName}</b></p>
                <button onClick={removeComment()} style={{float:"right"}}>Delete Post</button>
            </div>
        </div>
    );
}

export default CommentBlock;