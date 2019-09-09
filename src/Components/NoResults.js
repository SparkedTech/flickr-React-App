import React from 'react';

//rendered in place of gallery if no results returned from search.
const NoResults = () => {
    return (
        <div className="no-results-div">
            <h1>No Results Found For Your Search</h1>
            <h3>Perhaps searching a more specific term would help?</h3>
        </div>
    )
};

export default NoResults;