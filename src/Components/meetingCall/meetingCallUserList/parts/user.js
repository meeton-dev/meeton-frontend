import React from 'react';
import vidPlaceholder from '../../../../assets/webcamvideoplaceholder.gif';
export const User = (props) => {
    // console.log(Math.floor(Math.random()*16777215).toString(16));
    return (
        <div className="userBox">
            <img src={vidPlaceholder}></img>
        </div>
    )
}