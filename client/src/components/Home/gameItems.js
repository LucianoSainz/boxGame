import React from 'react';


function gameItems(props){
    const {photo,title,gender,ageClassification,year,lenguage,description,price} = props
    return(
        <div>
            <p>{photo}</p>
            <p>title:{title}</p>
            <p>gender:{gender}</p>
            <p>age:{ageClassification}</p>
            <p>year:{year}</p>
            <p>lenguage:{lenguage}</p>
            <p>description:{description}</p>
            <p>price:{price}</p>
        </div>
    )
}

export default gameItems