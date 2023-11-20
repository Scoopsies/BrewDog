import uuid from 'react-uuid'

const Method = ({beer}) => {
  const {method} = beer
  return (
    <div className='method'>
        <h3>Method:</h3>
        <ul>
          <h5>{method.mash_temp.length === 1 ?`Mash Temperature:` : 'Mash Temperatures:'}</h5>
          {
            method.mash_temp.map(mash => {
              return (
                <li key={uuid()}>
                  {`${mash.temp.value} ${mash.temp.unit} for ${mash.duration} minutes`}
                </li>
              )
            })
          }

          <h5>Fermentation:</h5>
          <li>{`${method.fermentation.temp.value} ${method.fermentation.temp.unit}`}</li>
        </ul>
    </div>
  )
}

export default Method