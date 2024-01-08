
import FoodPairings from "./FoodPairings";
import Ingredients from "./Ingredients";
import Targets from "./Targets";
import Method from "./Method";
import { useQuery } from "@tanstack/react-query";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import conversions from "../functions/conversions";


const Recipe = () => {
  const [measurement, setMeasurement] = useState(true);
  const {id} = useParams()
  const {search} = useLocation()

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
  
  let beer = data;

  const handleClick = () => {
    console.log('clicked')
    beer = conversions(beer)
    setMeasurement(!measurement)
  }

  if (data) return (
    <div>
      <div className="recipe">
          <h1 className="title">{beer.name}</h1>          
          <div className="imageContainer">
            <img className="image"
              src={
                beer.image_url
                  ? beer.image_url
                  : "https://images.punkapi.com/v2/keg.png"
              }
            />
          </div>
          <h4 className="italic">{`"${beer.tagline}"`}</h4>
          <div>{beer.description}</div>
          <FoodPairings beer={beer} />
          <h2 className="title">Ingredients:</h2>
          <br/>
          <div>
          <button onClick={handleClick}>{measurement ? 'convert to Imperial' : 'convert to Metric'}</button>
          </div>
          <Ingredients beer={beer} />
          <Targets beer={beer} />
          <Method beer={beer} />
          <h2 className="title">Brewers Tips:</h2>
          <p>{beer.brewers_tips}</p>
          <br/>
          <Link to={`/${search ? search : ''}`} >Back to all recipes</Link>
      </div>

    </div>
  );
};

export default Recipe;
