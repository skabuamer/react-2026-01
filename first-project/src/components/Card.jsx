const Card = (props) => {
    const name = "Cardd"
    
  return (
    <div className="cards">
      <div className="card">
      <h2>Hi I am a {name}</h2> 
      <h3>{props.username}</h3>
      <p>{props.index}</p>
      </div>
    </div>
  )
}

export default Card