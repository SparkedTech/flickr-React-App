import React from 'react';

//rendered in place of gallery if user directs browser to non-existent route.
const NotFound = () => {
    return (
        <div className="not-found-div">
            <h1 className="not-found-message">Page Not Found</h1>
            <h3 className="not-found-message">Why not search for images, or try a default search term?</h3>
        </div>
    )
}

export default NotFound;