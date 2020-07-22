import React from 'react';
import Comments from '../../data/comments.json';

const CommentPanel = (props) => {

    function addComment(postId, userId, commentText) {
        let comment = {};
        let time = new Date();
        comment["postid"] = postId;
        comment["userid"] = userId;
        comment["commenttext"] = commentText;
        comment["postedDate"] = time.getFullYear() + "-" + time.getMonth() + "-" + time.getDate();
        Comments.push(comment);
    };

    return (
        <div style={{margin: "10px 0px 0px 0px"}}>
            <textarea id="commentTextPanel" style={{verticalAlign:"middle", marginRight:"10px"}}></textarea>
            <button onClick={addComment("1", "1", "1")}>Post</button>
        </div>
    );
}

export default CommentPanel;