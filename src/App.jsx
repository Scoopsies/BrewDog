import axios from "axios"
import { useEffect, useState } from "react"
import Ingredients from "./components/Ingredients";
import Method from "./components/Method";
import Gravities from "./components/Gravities";
import Volumes from "./components/Volumes";
import Targets from "./components/Targets";
import FoodPairings from "./components/FoodPairings";

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const {data} = await axios.get('https://api.punkapi.com/v2/beers')
      setBeers(data)
    }
    fetchData()
  }, [])

  console.log(beers)

  return (
    <div>
      <h1>D.I.Y. DOG</h1>
      {beers.map(beer => {
        return (
        <li key={beer.id} className="recipe">
          <h3>{beer.name}</h3>
          <p>{`First Brewed: ${beer.first_brewed}`}</p>
          <h4>{beer.tagline}</h4>
          <div className="imgContainer"><img src={beer.image_url} /></div>
          <div className="stats">
            <div>{beer.abv ? `ABV: ${beer.abv}%` : null}</div>
            <div>{beer.ibu ? `IBU: ${beer.ibu}` : null}</div>
            <div>{beer.target_og ? `OG: ${(beer.target_og / 1000).toFixed(3)}` : null}</div>
          </div>
          <p>{beer.description}</p>
          <FoodPairings beer={beer} />
          <Ingredients beer={beer} />
          <Targets beer={beer} />
          <Method beer={beer}/>
          <Gravities beer={beer}/>
          <Volumes beer={beer}/>
          <h3>Brewers Tips:</h3>
          <p>{beer.brewers_tips}</p>

        </li>
        )
      })}
    </div>
    
  )
}

export default App
