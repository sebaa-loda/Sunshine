import { useSelector } from "react-redux";

export const Forecast = () => {
  const forecast = useSelector((state) => state.forecast);
  console.log(forecast);

  return (
    <section>
      <h1>Forecast</h1>
      <div>
        {forecast ? 
        <div>
          <h1>{forecast.forecast?.forecastday[1].date}</h1>
          <h1>{forecast.forecast?.forecastday[1].day.condition.text}</h1>
          <h1>{forecast.forecast?.forecastday[1].day.maxtemp_c}°</h1>
          <h1>{forecast.forecast?.forecastday[1].day.mintemp_c}°</h1>
          <img 
              src={forecast.forecast?.forecastday[1].day.condition.icon} 
              alt={forecast.forecast?.forecastday[1].day.condition.text} 
            />
        </div>  
        : <p>Loading...</p>
      
      }
      </div>


    </section>
  )
}
