const getArgs = (args) => {
    const res = {};
     console.log(args);
    const [executer, file, ...rest] = args;
    
    rest.forEach((value, index, array) => {
        if (value.charAt(0) === '-') {
            if (index === array.length - 1) {
                res[value.substring(1)] = true
            } else if (array[index + 1].charAt(0) !== '-') {
                res[value.substring(1)] = array.slice(1).join(' ')
            } else {
                res[value.substring(1)] = true
            }
        }
    });

    return res;
}


export { getArgs }