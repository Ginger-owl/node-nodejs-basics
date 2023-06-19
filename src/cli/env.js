const parseEnv = () => {
    for (let variable in process.env) {
      if (/^RSS_*/.test(variable)) {
        console.log(process.env[variable])
      }
    }
};

parseEnv();