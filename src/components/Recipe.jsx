import React from "react";
import FoodPairings from "./FoodPairings";
import Ingredients from "./Ingredients";
import Targets from "./Targets";
import Method from "./Method";
import Card from "./Card";

const Recipe = ({ beer }) => {
  // Converts numeric month to string
  const dateStr = () => {
    const brewed = beer.first_brewed.split("/");
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    brewed[0] = months[brewed[0] * 1 - 1];
    return brewed.join(" ");
  };

  // Removes duplicate hop or malt and from array and lists out as seperate divs
  const ingredientList = (hopOrMalt) => {
    const ingredients = hopOrMalt.map((ingredient) => ingredient.name);
    const filtered = ingredients.filter(
      (ingredient, index) => ingredients.indexOf(ingredient) === index
    );
    return filtered.map((ingredient) => {
      return <div key={ingredient}>{ingredient}</div>;
    });
  };

  return (
    <div className="recipe">
        <Card beer={beer} />
        <h4>{`"${beer.tagline}"`}</h4>
        <div>{beer.description}</div>
        <FoodPairings beer={beer} />
        <Ingredients beer={beer} />
        <Targets beer={beer} />
        <Method beer={beer} />
        <h3>Brewers Tips:</h3>
        <p>{beer.brewers_tips}</p>
    </div>
  );
};

export default Recipe;
