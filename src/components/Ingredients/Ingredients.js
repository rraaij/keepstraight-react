import React, { useCallback, useEffect, useState } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const firebaseUrl =
    "https://keepstraight-backend-default-rtdb.europe-west1.firebasedatabase.app";

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    setIngredients(filteredIngredients);
  }, []);

  const addIngredientHandler = (ingredient) => {
    setLoading(true);
    fetch(`${firebaseUrl}/ingredients.json`, {
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
        setLoading(false);
      });
  };

  const removeIngredientHandler = (id) => {
    setLoading(true);
    fetch(`${firebaseUrl}/ingredients/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        setIngredients((prevState) => [
          ...prevState.filter((ingredient) => ingredient.id !== id),
        ]);
        setLoading(false);
      })
      .catch((error) => setError("!!! OHDJEEE!!! :" + error.message));
  };

  const clearError = () => {
      setError(null);
      setLoading(false);
  }

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />

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
