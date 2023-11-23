import uuid from 'react-uuid'

const FoodPairings = ({beer}) => {
  return (
    <div className='foodPairings'>
        <h3>Food Pairings:</h3>
        <ul className='pairings'>
            {beer.food_pairing.map(food => {
                return (
                    <li key={uuid()}>{food}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default FoodPairings