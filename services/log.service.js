import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
    console.log(chalk.bgRed('ERROR' + ' ' + error))
}

const printSuccess = (success) => {
    console.log(chalk.bgGreen('SUCCESS' + ' ' + success))
}

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan('HELP')}
        Without parameters - weather output
        -c [CITY] to select a city
        -h to get help
        -t [API_KEY] to save a token`
    );
}

const printWeather = (res, icon) => {
    console.log(res, icon);
    console.log(
        dedent`${chalk.bgBlueBright('WEATHER')} weather in ${res.name}
        ${icon}  ${res.weather[0].description}
        Temperature: ${res.main.temp} (feels like ${res.main.feels_like})
        Humidity: ${res.main.humidity}%
        Wind speed: ${res.wind.speed}
        `
    );
}

export { printError, printSuccess, printHelp, printWeather }