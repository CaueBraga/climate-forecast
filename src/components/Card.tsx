import CloseIcon from "@mui/icons-material/Close";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export function Card({ wD }: any) {
  return (
    <div className="flex flex-col gap-4 pl-12 py-4 sm:mt-10 h-72 w-full bg-slate-100 rounded-lg">
      <div className="flex justify-between">
        <div className="text-lg">
          {wD.location.name}, {wD.location.country}, {wD.location.region}
        </div>
        <CloseIcon className="mr-2" />
      </div>
      <div className="font-bold text-4xl">
        {wD.current.temp_c}°C {wD.current.condition.text}
      </div>
      <div className="flex justify-between w-3/5">
        <div>
          <ArrowDownwardIcon className="text-orange-400" />
          <span className="font-bold">
            {wD.forecast.forecastday[0].day.mintemp_c}°
          </span>
          <ArrowUpwardIcon className="text-orange-400" />
          <span className="font-bold">
            {wD.forecast.forecastday[0].day.maxtemp_c}°
          </span>
        </div>
        <div>
          <span className="font-thin">Feelslike :</span>{" "}
          <span className="font-bold">{wD.current.feelslike_c}° C</span>
        </div>
      </div>
      <div className="flex justify-between w-3/5">
        <div className="flex gap-2">
          <span className="font-thin">Wind :</span>
          <span className="font-bold">{wD.current.wind_kph} km/h</span>
        </div>
        <div className="flex gap-2">
          <span className="font-thin">Humidity : </span>

          <span className="font-bold">{wD.current.humidity}%</span>
        </div>
      </div>

      <div className="h-[1px] w-11/12 bg-orange-300 text-center"></div>

      <div className="flex justify-around pr-12 gap-3">
        {wD.forecast.forecastday.map((item: any) => (
          <div key={item.date.slice(5, 10)} className="text-center">
            <div className="font-bold">{item.date.slice(5, 10)}</div>
            <span className="text-orange-400 font-bold">
              <ArrowUpwardIcon className="text-orange-300" />{" "}
              {item.day.mintemp_c}°{" "}
              <ArrowDownwardIcon className="text-orange-300" />
              {item.day.maxtemp_c}°
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
