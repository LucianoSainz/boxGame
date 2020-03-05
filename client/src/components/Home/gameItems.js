import React from 'react';
import { Link } from "react";



function gameItems(props){
    return(
<Link to='game.id'>
{this.props.photo}
{this.props.title}
{this.props.gender}
{this.props.ageClassification}
{this.props.year}
{this.props.lenguage}
{this.props.description}
{this.props.price}
</Link>

    )
}
export default gameItems