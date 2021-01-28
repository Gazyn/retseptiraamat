import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, withRouter, Link, useParams } from "react-router-dom";
import Recipe from "./components/Recipe";
import RecipeList from "./components/RecipeList";

function App() {
  const getRecipes = () => {
    fetch("data/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }).then(data => data.json()).then(data => setRecipes(data))
  }
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    getRecipes();
  }, []);
  return (
    <div>
      {recipes.length !== 0 ? 
      (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <h1>Retseptiraamat</h1>
            <RecipeList recipes={recipes} />
            </Route>
            <Route path="/recipes/:id">
              <Recipe recipes={recipes} />
            </Route>
          </Switch>
        </BrowserRouter>

      ) 
      : 
      (<p>Please Wait...</p>)
      }
    </div>
  );
}

export default App;