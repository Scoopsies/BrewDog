import BeerType from "../Types/BeerType.types"

const FoodPairings = ({beer}: {beer: BeerType}) => {
  return (
    <ul>
        <h2 className="title">Food Pairings</h2>
        <div className='food pairings'>
            {beer.food_pairing.map(food => {
                return (
                  <div>
                    <div key={food}>{food}</div>
                  </div>
                )
            })}
        </div>
    </ul>
  )
}

export default FoodPairings

