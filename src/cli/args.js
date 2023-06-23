const parseArgs = () => {
  const args = process.argv.slice(2)
  const argsArray = []

  for (let i = 0; i < args.length; i += 2) {
    const propName = args[i].slice(2)
    const propValue = args[i + 1]
    argsArray.push(`${propName} is ${propValue}`)
  }
  
  process.stdout.write(argsArray.join(', '))
};

parseArgs();