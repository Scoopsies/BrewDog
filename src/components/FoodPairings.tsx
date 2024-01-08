import BeerType from "../Types/BeerType.types"

const FoodPairings = ({beer}: {beer: BeerType}) => {
  return (
    <div className='foodPairings'>
        <h2 className="title">Food Pairings:</h2>
        <ul className='pairings'>
            {beer.food_pairing.map(food => {
                return (
                    <li key={food}>{food}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default FoodPairings

