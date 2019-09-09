import React from 'react';
import GalleryItem from './GalleryItem';
import NoResults from './NoResults';

const Gallery = (props) => {
    const imgArray = props.photos; 
    
    let images;
//If search returned results, map them to array. Else, display message
    if (imgArray.length > 0) {
        images = imgArray.map( photo => <GalleryItem url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id}/>);
    } else {
        images = <NoResults />
    }

    return (
        <div className="photo-container">
            <h2>{props.searchTerm}</h2>
            <ul>
                {images}
            </ul>
        </div>
    )
};

export default Gallery;