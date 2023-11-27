import BeerType from "../Types/BeerType.types"

const FoodPairings = ({beer}: {beer: BeerType}) => {
  return (
    <div className='foodPairings'>
        <h3>Food Pairings:</h3>
        <ul className='pairings'>
            {beer.foodPairing.map(food => {
                return (
                    <li key={food}>{food}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default FoodPairings

