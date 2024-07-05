import axios from "axios";
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";

const getIcon = (icon) => {
  switch (icon.slice(0, -1)) {
    case "01":
      return "☀️";
      break;
    case "02":
      return "🌤️";
      break;
    case "03":
      return "⛅";
      break;
    case "04":
      return "🌥️";
      break;
    case "09":
      return "🌧️";
      break;
    case "10":
      return "🌦️";
      break;
    case "11":
      return "🌨️";
      break;
    case "13":
      return "❄️";
      break;
    case "50":
      return "🌨️❄️";
      break;
  }
};

const getWeather = async (city) => {
  // api url
  const URL = "https://api.openweathermap.org/data/2.5/weather";

  // boshqa filedan tokini olish
  const token =
    process.env.TOKEN ?? (await getKeyValue(TOKEN_DICTIONARY.token));

  // agar token bo'lsa serverga so'rov jo'natish
  if (!token) {
    throw new Error("API doesn't exist, -t [API_KEY] for saveing token");
  }

  const { data } = await axios.get(
    // api url
    URL,
    {
      // url marametorlari
      params: {
        // shahar nomi
        q: city,
        // api token
        appid: token,
        // api tili
        lang: "en",
        // map o'lchami
        units: "matric",
      },
    }
  );

  return data;
};

export { getWeather, getIcon };
