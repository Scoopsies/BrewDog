import axios from "axios"
import { useEffect, useState } from "react"
import Filters from "./components/Filters";
import Recipe from "./components/Recipe";
import Card from "./components/Card";

function App() {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async() => {
      const {data} = await axios.get(`https://api.punkapi.com/v2/beers?page=1&per_page=10`)
      setBeers(data)
    }
    fetchData()
  }, [])

  const loadMore = () => {
    const fetchData = async() => {
      const {data} = await axios.get(`https://api.punkapi.com/v2/beers?page=${page + 1}&per_page=10`)
      setBeers([...beers, ...data])
    }
    fetchData()
    setPage(page + 1)
  }

  console.log(beers)

  return (
    <div>
      <h1>D.I.Y. DOG</h1>
      <div className="recipeContainer">
        {beers.map(beer => {
          return (
            <Card key={beer.id} beer={beer} />
          )
        })}
      </div>
      <button onClick={() => loadMore()}>Load More</button>
    </div>
    
  )
}

export default App
