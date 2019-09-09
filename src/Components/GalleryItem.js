import React from 'react';

const GalleryItem = (props) => {
    return (
        <li>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
                <img src={`${props.url}`} alt="" />
            </a>
        </li>
    )
}

export default GalleryItem;