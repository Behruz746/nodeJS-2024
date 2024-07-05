import axios from "axios";
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";

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

  console.log(token);

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

  console.log(data);

  return data;
};

export { getWeather };
