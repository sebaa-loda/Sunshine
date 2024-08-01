import { useDispatch } from "react-redux";
import { getForecast } from "../redux/actions";
import { useState } from "react";
import "../scss/components/_searchbar.scss";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchWeatherLocation, setSearchWeatherLocation] = useState("");

  const handleChange = (event) => {
    setSearchWeatherLocation(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      dispatch(getForecast(searchWeatherLocation));
      setSearchWeatherLocation(""); // Vaciar el campo de entrada
    }
  };

  const handleClick = () => {
    dispatch(getForecast(searchWeatherLocation));
    setSearchWeatherLocation(""); // Vaciar el campo de entrada
  };

  return (
    <header>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar..."
          value={searchWeatherLocation} // Añadir el valor del input
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="input"
        />
        <button type="submit" className="button" onClick={handleClick}>
        <i class='bx bx-search lupa'></i>
        </button>
      </div>
    </header>
  );
};
