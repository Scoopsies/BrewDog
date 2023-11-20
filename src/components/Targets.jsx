
const Targets = ({beer}) => {
  return (
    <div className='specifications'>
        <h3>Targets:</h3>
        <ul>
            <li>{`Pre-boil Volume: ${beer.boil_volume.value} ${beer.boil_volume.unit}`}</li>
            <li>{`Final Volume: ${beer.volume.value} ${beer.volume.unit}`}</li>
            <li>{`Original Gravity: ${(beer.target_og / 1000).toFixed(3)}`}</li>
            <li>{`Final Gravity: ${(beer.target_fg / 1000).toFixed(3)}`}</li>
            <li>{`Attenuation Level: ${beer.attenuation_level}%`}</li>
            <li>{beer.ibu ? `IBU: ${beer.ibu}` : null}</li>
            <li>{beer.srm ? `SRM: ${beer.srm}` : null}</li>
            <li>{beer.ph ? `PH: ${beer.ph}` : null}</li>
        </ul>
    </div>
  )
}

export default Targets