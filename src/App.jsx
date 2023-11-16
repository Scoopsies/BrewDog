import axios from "axios"
import { useEffect, useState } from "react"
import uuid from "react-uuid";
import Ingredients from "./components/Ingredients";

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
      <h1>Brew Dog</h1>
      {beers.map(beer => {
        return (
        <li key={beer.id}>
          <h3>{beer.name}</h3>
          <div className="imgContainer"><img src={beer.image_url} /></div>
          <h4>{beer.tagline}</h4>
          <p>{beer.description}</p>
          <p>{`First Brewed: ${beer.first_brewed}`}</p>
          <div>
            <p>{`ABV: ${beer.abv}`}</p>
            <p>{`IBU: ${beer.ibu}`}</p>
            <p>{`EBC: ${beer.ebc}`}</p>
          </div>

          <Ingredients beer={beer} />

          <div className="ingredients">
            <h4>Hops:</h4>
            <ul className="hops">
              {
              beer.ingredients.hops.map(hop => {
                return (
                  <li key={uuid()}>
                    <h5>{hop.name}</h5>
                    <p>{`Attribute: ${hop.attribute}`}</p>
                    <p>{`Add: ${hop.add}`}</p>
                    <p>{`Amount: ${hop.amount.value} ${hop.amount.unit}`}</p>
                  </li>
                )
              })}
            </ul>
            <h4>Malt:</h4>
            <ul className="malt">
              {
                beer.ingredients.malt.map(_malt => {
                  return (
                    <li key={uuid()}>
                      <h5>{_malt.name}</h5>
                      <p>{`Amount: ${_malt.amount.value} ${_malt.amount.unit}`}</p>
                    </li>
                  )
                })
              }
            </ul>
            <h4>Yeast:</h4>
            <ul>
              <li>{beer.ingredients.yeast}</li>
            </ul>
          </div>
        </li>
        )
      })}
    </div>
    
  )
}

export default App
