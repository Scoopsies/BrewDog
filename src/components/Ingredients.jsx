import uuid from 'react-uuid'

const Ingredients = ({beer}) => {

  return (
    <div className="ingredients">
    <h3>Ingredients:</h3>


    <ul className="malt">
    <h4>Malt:</h4>
      {
        beer.ingredients.malt.map(_malt => {
          return (
              <li key={uuid()}>{`
              ${_malt.amount.value} 
              ${_malt.amount.unit} 
              ${_malt.name}`}</li>
          )
        })
      }
    </ul>


    <ul className="hops">
    <h4>Hops:</h4>
      {
      beer.ingredients.hops.map(hop => {
        return (
          <div key={uuid()}>
              <li>{`
              ${hop.amount.value} 
              ${hop.amount.unit} 
              ${hop.name} 
              @ ${hop.add} ${hop.add === 'dry hop' ? '' : 'of boil'} 
              (for ${hop.attribute}${hop.attribute === 'aroma' ? '' : 'ing' })`}</li>
          </div>
        )
      })}
    </ul>


    <ul className='yeast'>
      <h4>Yeast:</h4>
      <li>{beer.ingredients.yeast}</li>
    </ul>

    {
    beer.method.twist ? (
    <ul className="twist">
      <h4>Twist:</h4>
      {
        beer.method.twist.split(',').map(_twist => {
          return (
            <li key={uuid()}>{_twist}</li>
          )
        })
      }
    </ul>)
    : null
    }
  </div>
  )
}

export default Ingredients