import React from 'react';
import Comments from '../../data/comments.json';
import { LangContext } from '../../LangContext';

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
            <LangContext.Consumer>
                    {(context) => (
                        <button onClick={addComment("1", "1", "1")}>
                        {
                           (context.state.lang === "en") ? "Post" : "Poster"
                        }
                    </button>
                 )}
            </LangContext.Consumer>
        </div>
    );
}

export default CommentPanel;