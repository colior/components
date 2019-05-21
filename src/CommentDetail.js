import React from 'react';

const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a className="avatar" href="/">
                <img alt="avatar" src={props.avatar}/>
            </a>
            <div className="content">
                <a className="author" href="/">
                    {props.username}
                </a>
                <div className="metadata">
                    <span className="date">{props.date}</span>
                </div>
                <div className="text">{props.text}</div>
            </div>
        </div>
    )
}

export default CommentDetail;