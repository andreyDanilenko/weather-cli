#!/usr/bin/env node
import * as dotenv from 'dotenv'
dotenv.config()
import { getArgs } from './helpers/args.js'
import { getWeather } from './services/api.service.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';

const saveToken = async (token) => {
    if (!token.length) {
        printError('no token passed')
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        printSuccess('Token save')
    } catch (e) {
        printError(e.message)
    }
}

const getForCast = async () => {
    try {
        const weather = await getWeather('saint petersburg');
        console.log(weather);
    } catch (e) {
        if (e?.response?.status === 404) {
            printError('Wrong city')
        } else if (e?.response?.status === 401) {
            printError('Wrong token')
        } else {
            printError(e.message)
        }
    }
}

const initCli = () => {
    const args = getArgs(process.argv)

    if (args.h) {
        printHelp()
        // Вывод help
    }

    if (args.s) {
        printSuccess('Hello')
        // Сохранить город
    }

    if (args.t) {
        return saveToken(args.t)
        // Сохранить токен
    }

    getForCast()
    // Вывести погоду
}

initCli()