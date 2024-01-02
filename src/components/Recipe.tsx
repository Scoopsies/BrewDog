
import FoodPairings from "./FoodPairings";
import Ingredients from "./Ingredients";
import Targets from "./Targets";
import Method from "./Method";
import Card from "./Card";
import BeerType from "../Types/BeerType.types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


const Recipe = () => {
  const {id} = useParams()

  const fetchData = async() => {
    const {data} = await axios.get(
      `https://api.punkapi.com/v2/beers/${id}`
    )
    return data[0];
  }

  const queryKey : [string] = ['beer']

  const {data, isLoading, isError} = useQuery({
    queryKey,
    queryFn: fetchData
  })

  if (isLoading) return (
    <div>Loading...</div>
  )

  if (isError) return (
    <div>Error</div>
  )
  
  const beer = data;

  if (data) return (
    <div>
      <Link to='/'>back to all recipes</Link>
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
      <Link to='/' >back to all recipes</Link>
    </div>
  );
};

export default Recipe;
