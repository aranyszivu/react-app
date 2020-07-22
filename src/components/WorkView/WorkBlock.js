import React from 'react';
import Posts from '../../data/posts.json';
import Users from '../../data/users.json';
import WorkInfo from './WorkInfo';
import CommentBlock from './CommentBlock';

const WorkBlock = (props) => {
    const workWrapperStyle = {
        display:"block",
        width: "100%",
        backgroundColor: "#444444",
        padding: "0px 300px 50px 250px"
    };
    const workBlockStyle = {
        width: "70%",
        height: "auto",
        backgroundColor: "#eeeeee",
        padding: "30px",
        textAlign: "center"
    };
    const contentWrapperStyle = {
        padding: "0px 200px"
    };

    const currentPost = Posts.find(x => x.postid === Number(props.match.params.workid));
    const currentAuthor = Users.find(x => x.uid === currentPost.user);


    return (
        <div style={workWrapperStyle}>
            <div style={workBlockStyle}>
                <h3 style={{fontSize: "200%"}}>{currentPost.title}</h3>
                <img src={process.env.PUBLIC_URL + currentPost.imgUrl} alt={currentPost.title} />
                <div id="contentWrapper" style={contentWrapperStyle}>
                    <WorkInfo work={currentPost} author={currentAuthor} />
                    <CommentBlock workId={currentPost.postid} />
                </div>
            </div>
        </div>
    );
}
export default WorkBlock;