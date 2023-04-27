

function Footer({data}) {
  return (
    <div className="bottom">
    <div className="feels">
      <p>{data.main.feels_like}</p>
      <p>Feels Like</p>
    </div>
    <div className="humidity">
      <p>{data.main.humidity}%</p>
      <p>Humidity</p>
    </div>
    <div className="wind">
      <p>{data.wind.speed}</p>
      <p>Wind</p>
    </div>
  </div>
  )
}

export default Footer