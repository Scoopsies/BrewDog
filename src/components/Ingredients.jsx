import React from 'react'
import uuid from 'react-uuid'

const Ingredients = ({beer}) => {
  return (
    <div className="ingredients">
    <h4>Hops:</h4>
    <ul className="hops">
      {
      beer.ingredients.hops.map(hop => {
        return (
          <li key={uuid()}>
            <h5>{hop.name}</h5>
            <p>{`Attribute: ${hop.attribute}`}</p>
            <p>{`Add: ${hop.add}`}</p>
            <p>{`Amount: ${hop.amount.value} ${hop.amount.unit}`}</p>
          </li>
        )
      })}
    </ul>
    <h4>Malt:</h4>
    <ul className="malt">
      {
        beer.ingredients.malt.map(_malt => {
          return (
            <li key={uuid()}>
              <h5>{_malt.name}</h5>
              <p>{`Amount: ${_malt.amount.value} ${_malt.amount.unit}`}</p>
            </li>
          )
        })
      }
    </ul>
    <h4>Yeast:</h4>
    <ul>
      <li>{beer.ingredients.yeast}</li>
    </ul>
  </div>
  )
}

export default Ingredients