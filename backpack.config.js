const dotenv = require('dotenv');
const fs = require('fs');

module.exports = {
  modify(config, { dev }, webpack) {
    const appConfig = config;
    var env;
    console.log(dev);
    if (dev) {
    	env = dotenv.config().parsed;
    } else {
  		env = dotenv.parse(fs.readFileSync('.env.production'));
    }

    appConfig.plugins.push(
      new webpack.DefinePlugin({ 
        'process.env.PORT': JSON.stringify(env.PORT),
      })
  );

	return appConfig;
  },
};