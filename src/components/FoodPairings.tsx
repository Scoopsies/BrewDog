import BeerType from "../Types/BeerType.types"

const FoodPairings = ({beer}: {beer: BeerType}) => {
  return (
    <ul className='foodPairings'>
        <h2 className="title">Food Pairings</h2>
        <div className='pairings'>
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

