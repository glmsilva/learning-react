import React from 'react';


function Avatar(props) {
    return (
        <img src={props.img} className="circle-img" alt="avatar_img" />
    )
}

export default Avatar;