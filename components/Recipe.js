import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, withRouter, Link, useParams } from "react-router-dom";
const Recipe = (props) => {
    const id = useParams().id;
    return (
      <div>
        <a href="/">tagasi avalehele</a>
        <h2>{props.recipes[id].name}</h2>
        <ul>
          {props.recipes[id].ingredients.map((ingredient, index) => {
            return <li key={index}>{ingredient}</li>;
          })}
        </ul>
      </div>
    )
}
export default Recipe;