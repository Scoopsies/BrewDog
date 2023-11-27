
import FoodPairings from "./FoodPairings";
import Ingredients from "./Ingredients";
import Targets from "./Targets";
import Method from "./Method";
import Card from "./Card";
import BeerType from "../Types/BeerType.types";

const Recipe = ({ beer } : {beer: BeerType}) => {

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
