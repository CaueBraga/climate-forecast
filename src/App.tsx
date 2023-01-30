import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./components/Card";

//perguntar como fazer o loading
//responsivo
//read.me
//perguntar que porra eh essa branca do lado do input
//
//
//
////

function App() {
  const [showCard, setShowCard] = useState<boolean>(false);
  const key = "b6d657ed2f6b48619fd233445232801";
  const [weatherData, setWeatherData] = useState();
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  const callApi = async () => {
    const response = await axios(
      `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${inputValue}&days=6&aqi=no&alerts=no`
    );
    setWeatherData(response.data);
    setShowCard(true);
  };
  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(inputValue);
    callApi();
    setInputValue("");
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <div className="flex justify-center items-start w-screen h-screen bg-gradient-to-t from-yellow-400 to-orange-500">
      <div className="flex flex-col w-full sm:w-auto">
        <h1 className="sm:mt-40 text-teal-50 text-5xl sm:text-6xl mx-auto">
          Weather Forecast
        </h1>
        {showCard && <Card wD={weatherData} />}
        <div className="bg-white mt-10 rounded">
          <form onSubmit={handleSubmit}>
            <input
              className="text-xl px-4 py-3 w-11/12 "
              placeholder="Insira aqui o nome da cidade"
              value={inputValue}
              onChange={handleInputChange}
            ></input>

            <button className="pl-2">
              <SearchIcon />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
