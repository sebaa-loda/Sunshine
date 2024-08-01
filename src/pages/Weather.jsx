import { useSelector } from "react-redux";
import "../scss/pages/_weather.scss";

export const Weather = () => {
  const forecast = useSelector((state) => state.forecast);

  return (
    <main>
      {forecast ? (
        <div className="weather">
          <div className="weather__container">
            <div className="location">
              <h1 className="location__name">{forecast.location?.name}, </h1>
              <h1 className="location__region">{forecast.location?.region},</h1>
              <h1 className="location__country">
                {forecast.location?.country}
              </h1>
            </div>
            <div className="current">
              <h2 className="current__condition">
                {forecast.current?.condition.text}
              </h2>
              <h2 className="current__temp">{forecast.current?.temp_c}°</h2>

              <img
                className="current__icon"
                src={forecast.current?.condition.icon}
                alt={forecast.current?.condition.text}
              />
            </div>
          </div>
          <div className="extra">
            <p className="extra__time">{forecast.location?.localtime}</p>
            <p className="extra__wind">{forecast.current?.wind_kph} Km/h</p>
            <p className="extra__hum">{forecast.current?.humidity}%</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};
