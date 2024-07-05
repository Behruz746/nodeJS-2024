import https from "https";
import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";

const getWeather = async (city) => {
  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  //   https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  // boshqa filedan tokini olish
  const token = getKeyValue(TOKEN_DICTIONARY.token);

  // agar token bo'lsa serverga so'rov jo'natish
  if (!token) {
    throw new Error("API doesn't exist, -t [API_KEY] for saveing token");
  }

  console.log(token);

  // api urlga malumot qo'shish 
  const url = new URL(
    ` https://api.openweathermap.org/data/2.5/weather?q=uzun&appid=f347e5db6f3a03135353242a8f96e2ee`
  );
  //   urlga shahar qo'shish
  url.searchParams.append("q", city);
  // urlga token qo'shish
  url.searchParams.append("appid", token);
  // urlga malumot tinini qo'shish
  url.searchParams.append("lang", "en");
  // urlga map o'lchovini qo'shish
  url.searchParams.append("units", "metric");

  // api serverga so'rov jo'natish url berish callback functionga serverdan kelgan malumotni qabul qilish
  https.get(url, (response) => {
    // malumot tushadiga saqlovchi
    let res = "";

    // serverdan malumot qabul qilish
    response.on("data", (chunk) => {
      // res saqlovchiga chunk ichidagi malumotni qoshib ketish
      res += chunk;
    });

    // serverdan malumotlarni olib bo'lib consolega olingan malumotlarni ko'rsatish
    response.on("end", () => {
      console.log(JSON.parse(res));
    });
  });
};

export { getWeather };
