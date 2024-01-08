import BeerType from "../Types/BeerType.types"

const Method = ({beer} : {beer: BeerType}) => {
  const {method} = beer

  const capitalizeFirst = (word : string) => {
    const first = word.charAt(0).toUpperCase()
    const remaining = word.slice(1, word.length)
    return first + remaining
  }

  return (
    <div >
        <h2 className="title">Method:</h2>
        <ul className='method'>

          <div>
            <h4>{method.mash_temp.length === 1 ?`Mash Temperature:` : 'Mash Temperatures:'}</h4>
            {
              method.mash_temp.map((mash, index) => {
                return (
                  <div key={index}>
                    {`${mash.temp.value}° ${capitalizeFirst(mash.temp.unit)}${mash.duration ? ` for ${mash.duration} minutes` : ''}`}
                  </div>
                )
              })
            }
          </div>

          <div>
            <h4>Fermentation:</h4>
            <div>{`${method.fermentation.temp.value}° ${capitalizeFirst(method.fermentation.temp.unit)}`}</div>
          </div>
        </ul>
    </div>
  )
}

export default Method