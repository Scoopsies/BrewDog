import BeerType from "../Types/BeerType.types"

const Ingredients = ({beer} : {beer: BeerType}) => {

  return (
    <div className="ingredients">
      <div className="ingredient">
        <h4>Malt:</h4>
        <ul className="malt">
            <div>
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
            </div>
          </ul>
      </div>

      <div className="ingredient">
        <h4>Hops:</h4>
        <ul className="hops">
          <div>
            {
            beer.ingredients.hops.map((hop, index) => {
              return (
                <div key={index}>
                    <li>{`
                    ${hop.amount.value.toFixed(1)}
                    ${hop.amount.unit}
                    ${hop.name}
                    at ${hop.add} ${hop.add === 'dry hop' ? '' : 'of boil'}
                    (for ${hop.attribute}${hop.attribute === 'aroma' ? '' : 'ing' })`}</li>
                </div>
              )
            })}
          </div>
        </ul>
      </div>

      <div className="ingredient">
        <h4>Yeast:</h4>
        <ul className='yeast'>
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