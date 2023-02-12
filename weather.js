#!/usr/bin/env node
import * as dotenv from 'dotenv'
dotenv.config()
import { getArgs } from './helpers/args.js'
import { getWeather, getIcon } from './services/api.service.js';
import { printHelp, printSuccess, printError, printWeather } from './services/log.service.js';
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';

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
const saveCity = async (city) => {
    if (!city.length) {
        printError('no city passed')
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city)
        printSuccess('City save')
    } catch (e) {
        printError(e.message)
    }
}

const getForCast = async () => {

    try {
        const city =  await getKeyValue(TOKEN_DICTIONARY.city)
        const weather = await getWeather(city);
        printWeather(weather, getIcon(weather.weather[0].icon))
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
        return printHelp()
    }

    if (args.c) {
        return saveCity(args.c)
    }

    if (args.t) {
        return saveToken(args.t)
    }

    return getForCast()
}

initCli()
