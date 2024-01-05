import BeerType from "../Types/BeerType.types"

const Ingredients = ({beer} : {beer: BeerType}) => {

  return (
    <div className="ingredients">
      <div className="ingredientPair">
        <ul className="malt">
          <h4>Malt:</h4>
            {
              beer.ingredients.malt.map((_malt, index) => {
                return (
                    <li key={index}>{`
                    ${_malt.amount.value.toFixed(1)}
                    ${_malt.amount.unit}
                    ${_malt.name}`}</li>
                )
              })
            }
          </ul>
          <ul className="hops">
          <h4>Hops:</h4>
            {
            beer.ingredients.hops.map((hop, index) => {
              return (
                <div key={index}>
                    <li>{`
                    ${hop.amount.value.toFixed(1)}
                    ${hop.amount.unit}
                    ${hop.name}
                    @ ${hop.add} ${hop.add === 'dry hop' ? '' : 'of boil'}
                    (for ${hop.attribute}${hop.attribute === 'aroma' ? '' : 'ing' })`}</li>
                </div>
              )
            })}
        </ul>
    </div>


    <div className="ingredientPair">
      <ul className='yeast'>
        <h4>Yeast:</h4>
        <li>{beer.ingredients.yeast}</li>
      </ul>
      {
      beer.method.twist ? (
      <ul className="twist">
        <h4>Twist:</h4>
        {
          beer.method.twist.split(',').map((_twist, index) => {
            return (
              <li key={index}>{_twist}</li>
            )
          })
        }
      </ul>)
      : null
      }
    </div>
  </div>
  )
}

export default Ingredients