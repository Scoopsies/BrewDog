
const Targets = ({beer}) => {
  return (
    <div className='specifications'>
        <h3>Targets:</h3>
        <div className="target">
            <div>
              <div>{`Pre-boil Volume: ${beer.boil_volume.value} ${beer.boil_volume.unit}`}</div>
              <div>{`Final Volume: ${beer.volume.value} ${beer.volume.unit}`}</div>
              <div>{`Original Gravity: ${(beer.target_og / 1000).toFixed(3)}`}</div>
              <div>{`Final Gravity: ${(beer.target_fg / 1000).toFixed(3)}`}</div>
            </div>
            <div>
              <div>{beer.ibu ? `IBU: ${beer.ibu}` : null}</div>
              <div>{beer.srm ? `SRM: ${beer.srm}` : null}</div>
              <div>{beer.ph ? `Final PH: ${beer.ph}` : null}</div>
              <div>{`Attenuation: ${beer.attenuation_level}%`}</div>
            </div>
        </div>
    </div>
  )
}

export default Targets