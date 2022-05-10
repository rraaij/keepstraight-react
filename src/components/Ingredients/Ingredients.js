import React, { useCallback, useEffect, useState } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);

  const firebaseUrl =
    "https://keepstraight-backend-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json";

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    setIngredients(filteredIngredients);
  }, []);

  const addIngredientHandler = (ingredient) => {
    fetch(firebaseUrl, {
      method: "POST",
      body: JSON.stringify(ingredient),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((responseData) => {
        setIngredients((previousIngredients) => [
          ...previousIngredients,
          {
            id: responseData.name,
            ...ingredient,
          },
        ]);
      });
  };

  const removeIngredientHandler = (id) => {
    setIngredients((prevState) => [
      ...prevState.filter((ingredient) => ingredient.id !== id),
    ]);
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList
          ingredients={ingredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
};

export default Ingredients;
