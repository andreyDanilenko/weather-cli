#!/usr/bin/env node
import { getArgs } from './helpers/args.js'
import { printHelp, printSuccess, printError } from './services/log.service.js';

const initCli = () => {
    const args = getArgs(process.argv)
    console.log(args);

    if (args.h) {
        printHelp()
        // Вывод help
    }

    if (args.s) {
        printSuccess('Hello')
        // Сохранить город
    }

    if (args.t) {
        // Сохранить токен
    }
    // Вывести погоду
}

initCli()