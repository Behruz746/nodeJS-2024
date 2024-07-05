// print textlarga rang berish uchun kurubxona
import chalk from "chalk";
// print textlarni boshjoylarini yo'qqilish uchun
import dedent from "dedent";

// error bo'lganida terminalgan error malumotni print qiladi
const printErr = (err) => {
  console.log(`${chalk.bgRed("ERROR")} ${err}`);
};

// success bo'lganida terminalgan malumotlarni print qiladi
const printSucc = (mess) => {
  console.log(`${chalk.bgGreen("SUCCESS")}: ${mess}`);
};

// help bo'lganda terminalga commandalarni print qiladi
const printHelp = () => {
  console.log(dedent`
        ${chalk.bgCyan("HELP")}
        -s [CITY] for install city
        -h for help
        -t [API_KEY] for saveing token
    `);
};

const printWeather = (res, icon) => {
  console.log(dedent`
      ${chalk.bgYellowBright("WEATHER")} weather City name ${res.name}
      ${icon} ${res.weather[0].description}
      Tempreture: ${res.main.temp} (feels like ${res.main.feels_like})
      Humidity: ${res.main.humidity}%
      Wind speed: ${res.wind.speed}
    `);
};

export { printErr, printSucc, printHelp, printWeather };
