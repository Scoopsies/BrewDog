import { v4 as uuidv4 } from "uuid"

const FoodPairings = ({beer}) => {
  return (
    <div className='foodPairings'>
        <h3>Food Pairings:</h3>
        <ul className='pairings'>
            {beer.food_pairing.map(food => {
                return (
                    <li key={uuidv4()}>{food}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default FoodPairings