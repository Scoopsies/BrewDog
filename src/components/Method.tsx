import BeerType from "../Types/BeerType.types"

const Method = ({beer} : {beer: BeerType}) => {
  const {method} = beer
  return (
    <div >
        <h3>Method:</h3>
        <ul className='method'>

          <div>
            <h5>{method.mash_temp.length === 1 ?`Mash Temperature:` : 'Mash Temperatures:'}</h5>
            {
              method.mash_temp.map((mash, index) => {
                return (
                  <div key={index}>
                    {`${mash.temp.value} ${mash.temp.unit} for ${mash.duration} minutes`}
                  </div>
                )
              })
            }
          </div>

          <div>
            <h5>Fermentation:</h5>
            <div>{`${method.fermentation.temp.value} ${method.fermentation.temp.unit}`}</div>
          </div>
        </ul>
    </div>
  )
}

export default Method