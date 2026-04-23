import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { fetchWeather } from "./WeatherDashboardReduxt/actions/actionWeather";
import Search from "./WeatherDashboardReduxt/components/Search";
import CurrentWeather from "./WeatherDashboardReduxt/components/CurrentWeather";
import ForecastDetails from "./WeatherDashboardReduxt/components/ForecastDetails";

function App() {
  const city = useSelector((state) => state.weatherReducer.city);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather(city));
  }, []);
  return (
    <div className="p-10 flex flex-col items-center gap-10">
      <div className="sticky top-0 p-10 z-10 bg-base-100 w-full flex flex-col items-center">
        <h1 className="text-3xl mb-6">Weather Dashboard</h1>
        <Search />
      </div>
      <CurrentWeather />
      <ForecastDetails />
    </div>
  );
}

export default App;
