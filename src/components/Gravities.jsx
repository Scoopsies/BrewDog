const Gravities = ({beer}) => {
  return (
    <div className='gravities'>
        <h3>Gravities:</h3>
        <ul>
            <li>{`Original Gravity: ${beer.target_og}`}</li>
            <li>{`Final Gravity: ${beer.target_fg}`}</li>
        </ul>
    </div>
  )
}

export default Gravities