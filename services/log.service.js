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
        -s [CITY] to select a city
        -h to get help
        -t [API_KEY] to save a token`
    );
}

export { printError, printSuccess, printHelp }