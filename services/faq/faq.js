import { homedir } from 'os'
import { join, basename, dirname, extname, relative, isAbsolute, resolve, sep } from 'path';

const filePath = join(homedir(), 'weather-data.json')

const saveKeyValue = (key, value) => {
    console.log('last file or folder -', basename(filePath));
    console.log('path to last file -', dirname(filePath));
    console.log('extension dot -', extname(filePath));
    console.log('what should be done from to -', relative(filePath, dirname(filePath)));
    console.log('absolute path', isAbsolute(filePath));
    console.log(resolve('..'));
    console.log(sep);
}

export { saveKeyValue }
