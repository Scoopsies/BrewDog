const Volumes = ({beer}) => {
  return (
    <div className='volumes'>
        <h3>Volumes:</h3>
        <ul>
            <li>{`Pre-boil Volume: ${beer.boil_volume.value} ${beer.boil_volume.unit}`}</li>
            <li>{`Final Volume: ${beer.volume.value} ${beer.volume.unit}`}</li>
        </ul>
    </div>
  )
}

export default Volumes