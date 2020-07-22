import React from 'react';
import Posts from '../../data/posts.json';
import Users from '../../data/users.json';
import Comments from '../../data/comments.json';
import CommentPanel from './CommentPanel';
import CommentPost from './CommentPost';

const CommentBlock = (props) => {
    console.log(props);
    return (

        <div style={{margin: "10px 0px", padding: "10px", border: "3px solid #cccccc", backgroundColor: "#e5e5e5"}}>
            <CommentPanel />
            <br/>
            {Comments.map( (item) => (
                (item.postid === props.workId) ?
                <CommentPost comment={item} />
                : ""
            ))}
        </div>
    );
}

export default CommentBlock;