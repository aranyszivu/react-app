import React from 'react';
import { Link } from 'react-router-dom';
import Users from '../data/users.json';
import Comments from '../data/comments.json';

const GalleryItem = (props) => {
    const itemWrapperStyle = {
        display: "inline-block",
        width: "30%",
        height: "auto",
        padding: "10px"
    };
    const itemContainerStyle = {
        backgroundColor: "#DDDDDD",
        border: "5px solid #EAEAEA",
        padding: "5px",
        textAlign: "center",
        cursor: "pointer"
    }
    const thumbStyle = {
        width: "50%"
    };

    const getUserNameFromId = () => {
        return Users.find(x => x.uid === props.item.user).username ?? "";
    }

    function getNumComments() {
        let postId = props.item.postid;
        let num = 0;
        Comments.forEach(element => {
            if (element.postid === postId) {
                num++;
            }
        });
        return num;
    }

    return (
        <div style={itemWrapperStyle}>
            <Link to={`/work/${props.item.postid}`} style={{textDecoration: "none", color:"inherit"}}>
                <div style={itemContainerStyle}>
                    <img src={props.item.thumbUrl} alt={props.item.desc}  style={thumbStyle} />
                    <div style={{border: "2px solid #cccccc", backgroundColor: "#e5e5e5", margin: "5px 30px", padding: "-10px"}}>
                        <p style={{fontSize: "125%", fontStyle: "bold"}}>
                            {props.item.title}
                        </p>
                        <p>
                            <i>{getUserNameFromId()}</i>
                        </p>
                        <div style={{padding: "0px 0px 10px 0px"}}>
                            <img src="/resources/images/heart.png" alt="Favourites:" style={{opacity: "0.7", width:"20px", padding: "0px 5px", display: "inline"}} />
                            <p style={{ padding: "0px 5px 0px 0px", display: "inline"}}>{props.item.favs}</p>
                            <img src="/resources/images/comment.png" alt="Favourites:" style={{opacity: "0.7", width:"20px", padding: "0px 5px", display: "inline"}} />
                            <p style={{ display: "inline"}}>{getNumComments()}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default GalleryItem;