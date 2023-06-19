const parseArgs = () => {
    const argsArray = [];
    for (let name in process.env) {
      argsArray.push(`${name} is ${process.env[name]}`)
    }
    process.stdout.write(argsArray.join(', '))
};

parseArgs();