import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"

type Beer = {
  foodPairing: string[]
}

const FoodPairings = ({beer}: {beer: Beer}) => {
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

