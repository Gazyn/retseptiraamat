import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, withRouter, Link, useParams } from "react-router-dom";
const RecipeList = (props) => {
    return (
      <div>
        {props.recipes.map((recipe, index) => {
          return <div>
            <li key={index} recipe={recipe}>{props.recipes[index].name}</li><Link to={`/recipes/${index}`}>Vaata lähemalt</Link>
          </div>
        })}
      </div>
    )
}
export default RecipeList;